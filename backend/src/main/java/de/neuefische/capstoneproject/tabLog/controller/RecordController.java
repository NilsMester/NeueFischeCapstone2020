package de.neuefische.capstoneproject.tabLog.controller;

import de.neuefische.capstoneproject.tabLog.dto.AddRecordDto;
import de.neuefische.capstoneproject.tabLog.model.Record;
import de.neuefische.capstoneproject.tabLog.service.RecordService;
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
    public List<Record> getUserRecordList(Principal principal){
        return this.recordService.getUserRecordsList(principal.getName());
    }

    @PostMapping
    public Record addRecord(@RequestBody AddRecordDto addRecordDto, Principal principal){
        return this.recordService.addRecord(addRecordDto, principal.getName());
    }

    @PutMapping
    public Record updateRecord(@RequestBody Record record, Principal principal){
        return this.recordService.updateRecord(record, principal.getName());
    }

    @DeleteMapping("{recordId}")
    public void deleteRecord(@PathVariable String recordId, Principal principal){
        recordService.deleteRecord(recordId, principal.getName());
    }

}
