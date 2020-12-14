package de.neuefische.capstoneproject.tabLog.utilities;
import org.springframework.stereotype.Component;
import java.time.Instant;

@Component
public class TimeStampUtilities {

    public Instant generateTimestampEpochSeconds() {

        return Instant.ofEpochSecond(Instant.now().getEpochSecond());
    }
}
