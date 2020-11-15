package de.neuefische.capstoneproject.link_librarian.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
@Builder
public class LinkLibrarianUser {

    @Id
    private String username;
    private String password;

}
