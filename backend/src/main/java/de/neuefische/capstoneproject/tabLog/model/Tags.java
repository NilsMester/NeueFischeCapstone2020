package de.neuefische.capstoneproject.tabLog.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "linklibrarianuser")
@AllArgsConstructor
@NoArgsConstructor
public class Tags {

    private String _id;
    private double count;
}
