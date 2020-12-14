package de.neuefische.capstoneproject.tabLog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "tablog-user")
@Builder
public class LinkLibrarianUser {

    @Id
    private String email;
    private List<Record> recordList;

}
