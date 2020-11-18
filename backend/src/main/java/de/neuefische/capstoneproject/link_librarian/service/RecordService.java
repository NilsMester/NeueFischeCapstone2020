package de.neuefische.capstoneproject.link_librarian.service;

import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.utilities.IdUtilities;
import de.neuefische.capstoneproject.link_librarian.utilities.TimeStampUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class RecordService {

    private final LinkLibrarianUserDao linkLibrarianUserDao;
    private final IdUtilities idUtilities;
    private final TimeStampUtilities timeStampUtilities;

    ApplicationContext ctx =
            new AnnotationConfigApplicationContext(LinkLibrarianUserDao.class);
    MongoOperations mongoOperation =
            (MongoOperations) ctx.getBean("mongoTemplate");


    @Autowired
    public RecordService(LinkLibrarianUserDao linkLibrarianUserDao, IdUtilities idUtilities, TimeStampUtilities timeStampUtilities) {
        this.linkLibrarianUserDao = linkLibrarianUserDao;
        this.idUtilities = idUtilities;
        this.timeStampUtilities = timeStampUtilities;
    }

    public Record addRecord(AddRecordDto addRecordDto, String principalName) {

        Record recordToBeAdded = Record.builder()
                .id(idUtilities.generateId())
                .timestamp(timeStampUtilities.generateTimestampEpochSeconds())
                .description(addRecordDto.getDescription())
                .recordLink(addRecordDto.getRecordLink())
                .publicStatus(true)
                .tagsList(addRecordDto.getTagsList())
                .build();

        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(principalName));
        query.fields().include("email");

        LinkLibrarianUser actualUser = mongoOperation.findOne(query,LinkLibrarianUser.class);

        Update update = new Update();
        update.addToSet("recordList", recordToBeAdded);

        mongoOperation.updateFirst(query, update, LinkLibrarianUser.class);

      /*  LinkLibrarianUser user = linkLibrarianUserDao.findById(principalName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        Record recordToBeAdded = buildRecordWithRecordDto(addRecordDto);
        LinkLibrarianUser linkLibrarianUser = copyUserWithNewRecord(user, recordToBeAdded);

        linkLibrarianUserDao.save(linkLibrarianUser);*/

        return recordToBeAdded;
    }

    private Record buildRecordWithRecordDto (AddRecordDto addRecordDto){

        return Record.builder()
                .id(idUtilities.generateId())
                .timestamp(timeStampUtilities.generateTimestampEpochSeconds())
                .description(addRecordDto.getDescription())
                .recordLink(addRecordDto.getRecordLink())
                .publicStatus(true)
                .tagsList(addRecordDto.getTagsList())
                .build();
    }

    private LinkLibrarianUser copyUserWithNewRecord (LinkLibrarianUser linkLibrarianUser, Record toBeAddedComment){
        List<Record> records = linkLibrarianUser.getRecordList();
        records.add(toBeAddedComment);

        return LinkLibrarianUser.builder()
                .email(linkLibrarianUser.getEmail())
                .recordList(records)
                .build();
    }

}
