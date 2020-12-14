package de.neuefische.capstoneproject.tabLog.utilities;
import org.springframework.stereotype.Component;
import java.util.UUID;

@Component
public class IdUtilities {

    public String generateId() {

        return UUID.randomUUID().toString();
    }
}
