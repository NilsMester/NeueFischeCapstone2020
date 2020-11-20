package de.neuefische.capstoneproject.link_librarian.service;

import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.utilities.IdUtilities;
import de.neuefische.capstoneproject.link_librarian.utilities.TimeStampUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class RecordService {


    private final IdUtilities idUtilities;
    private final TimeStampUtilities timeStampUtilities;
    private final MongoTemplate mongoTemplate;
    private final LinkLibrarianUserDao linkLibrarianUserDao;


    @Autowired
    public RecordService(IdUtilities idUtilities, TimeStampUtilities timeStampUtilities, MongoTemplate mongoTemplate, LinkLibrarianUserDao linkLibrarianUserDao) {

        this.idUtilities = idUtilities;
        this.timeStampUtilities = timeStampUtilities;
        this.mongoTemplate = mongoTemplate;
        this.linkLibrarianUserDao = linkLibrarianUserDao;
    }

    public List<Record> getUserRecordsList(String principalName) {
        LinkLibrarianUser linkLibrarianUser = linkLibrarianUserDao.findById(principalName).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return linkLibrarianUser.getRecordList();
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

        Update update = new Update();
        update.addToSet("recordList", recordToBeAdded);

        mongoTemplate.updateFirst(query, update, LinkLibrarianUser.class);

        return recordToBeAdded;
    }


}
