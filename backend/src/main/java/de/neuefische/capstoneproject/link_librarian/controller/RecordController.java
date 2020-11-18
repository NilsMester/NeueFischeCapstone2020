package de.neuefische.capstoneproject.link_librarian.controller;

import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/records")
public class RecordController {

    private final RecordService recordService;

    @Autowired
    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping
    public Record addRecord(@RequestBody AddRecordDto addRecordDto, Principal principal){
        return this.recordService.addRecord(addRecordDto, principal.getName());

    }
}
