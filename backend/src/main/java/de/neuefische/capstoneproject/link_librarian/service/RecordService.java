package de.neuefische.capstoneproject.link_librarian.service;

import de.neuefische.capstoneproject.link_librarian.dao.RecordMongoDao;
import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.utilities.IdUtilities;
import de.neuefische.capstoneproject.link_librarian.utilities.TimeStampUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.Arrays;

@Service
public class RecordService {

    private final RecordMongoDao recordMongoDao;
    private final IdUtilities idUtilities;
    private final TimeStampUtilities timeStampUtilities;

    @Autowired
    public RecordService(RecordMongoDao recordMongoDao, IdUtilities idUtilities, TimeStampUtilities timeStampUtilities) {
        this.recordMongoDao = recordMongoDao;
        this.idUtilities = idUtilities;
        this.timeStampUtilities = timeStampUtilities;
    }


    public Record addRecord(AddRecordDto addRecordDto, Principal principal) {
        LinkLibrarianUser user = recordMongoDao.findById(principal.getName()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        Record recordToBeSaved = Record.builder()
                .id(idUtilities.generateId())
                .timestamp(timeStampUtilities.generateTimestampEpochSeconds())
                .description("")
                .recordLink("")
                .publicStatus(false)
                .tagsList(Arrays.asList(addRecordDto.getTagsList()))
                .build();
        return null;
        /*return recordMongoDao.user.save(recordToBeSaved);*/
    }


}
