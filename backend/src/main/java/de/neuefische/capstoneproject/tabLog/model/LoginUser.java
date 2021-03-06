package de.neuefische.capstoneproject.tabLog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "login-user")
@Builder
public class LoginUser {

    @Id
    private String email;
    private String password;
    private String firstName;
}
