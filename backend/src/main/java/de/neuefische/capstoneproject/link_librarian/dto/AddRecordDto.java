package de.neuefische.capstoneproject.link_librarian.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddRecordDto {
private String recordLink;
private String description;
private boolean publicStatus;
private String[] tagsList;

}
