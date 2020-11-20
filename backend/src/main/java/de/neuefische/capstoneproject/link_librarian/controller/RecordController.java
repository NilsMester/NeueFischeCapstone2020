package de.neuefische.capstoneproject.link_librarian.controller;

import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/records")
public class RecordController {

    private final RecordService recordService;

    @Autowired
    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @GetMapping
    public List<Record> getUserRecordsList(Principal principal){
        return this.recordService.getUserRecordsList(principal.getName());
    }

    @PostMapping
    public Record addRecord(@RequestBody AddRecordDto addRecordDto, Principal principal){
        return this.recordService.addRecord(addRecordDto, principal.getName());

    }
}
