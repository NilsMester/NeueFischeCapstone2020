package de.neuefische.capstoneproject.link_librarian.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "linklibrarianuser")
@Builder
public class LinkLibrarianUser {

    @Id
    private String email;
    private List<Record> recordList;


}
