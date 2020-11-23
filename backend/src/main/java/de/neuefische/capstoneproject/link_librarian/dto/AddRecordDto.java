package de.neuefische.capstoneproject.link_librarian.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddRecordDto {
private String titel;
private String recordLink;
private String description;
private boolean publicStatus;
private List<String> tagsList;
}
