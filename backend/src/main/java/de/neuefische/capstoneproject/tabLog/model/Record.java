package de.neuefische.capstoneproject.tabLog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Record {

private String id;
private String titel;
private String recordLink;
private String description;
private Instant timestamp;
private boolean publicStatus;
private List<String> tagList;

}
