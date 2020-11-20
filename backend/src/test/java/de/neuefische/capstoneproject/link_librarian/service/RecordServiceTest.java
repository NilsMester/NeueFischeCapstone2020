package de.neuefische.capstoneproject.link_librarian.service;

import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.utilities.IdUtilities;
import de.neuefische.capstoneproject.link_librarian.utilities.TimeStampUtilities;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.time.Instant;
import java.util.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

public class RecordServiceTest {

        final IdUtilities idUtilities = mock(IdUtilities.class);
        final TimeStampUtilities timeStampUtilities = mock(TimeStampUtilities.class);
        final LinkLibrarianUserDao linkLibrarianUserDao = mock(LinkLibrarianUserDao.class);
        MongoTemplate mongoTemplate = mock(MongoTemplate.class);
        final RecordService recordService = new RecordService(idUtilities, timeStampUtilities, mongoTemplate, linkLibrarianUserDao);

        @Test
        void getUserRecordsListTest(){
                //Given
                String principalName = "alex@web.de";
                Instant expectedTime = Instant.parse("2020-10-26T10:00:00Z");

                LinkLibrarianUser user = new LinkLibrarianUser(
                        "alex@web.de",
                        new ArrayList<>(List.of(

                                new Record("1",
                                        "someTitel",
                                        "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                        "tutorial box gradient borders with curves ",
                                        expectedTime,
                                        true,
                                        new ArrayList<>(List.of("Css", "Styled-component"))),
                                new Record("uniqueId",
                                        "someTitel",
                                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                        "nice sidebar",
                                        expectedTime,
                                        true,
                                        new ArrayList<>(List.of("React", "Css", "Styled-component")))
                        ))
                );


                //When
                when(linkLibrarianUserDao.findById(principalName)).thenReturn(Optional.of(user));
                List<Record> userRecordsList = recordService.getUserRecordsList(principalName);

                List<Record> expectedList = new ArrayList<>(List.of(

                        new Record("1",
                                "someTitel",
                                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                "tutorial box gradient borders with curves ",
                                expectedTime,
                                true,
                                new ArrayList<>(List.of("Css", "Styled-component"))),
                        new Record("uniqueId",
                                "someTitel",
                                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                "nice sidebar",
                                expectedTime,
                                true,
                                new ArrayList<>(List.of("React", "Css", "Styled-component")))
                ));
                //Then
                assertThat(userRecordsList, is(expectedList));
        }

        @Test
        @DisplayName("The \"add\" method should return the added record object")
        void addRecordTest() {
                //Given
                String principalName = "alex@web.de";
                Query query = Query.query((Criteria.where("email").is("alex@web.de")));
                String expectedId = "uniqueId";
                Instant expectedTime = Instant.parse("2020-10-26T10:00:00Z");
                Update update = new Update();

                AddRecordDto recordToAdd = new AddRecordDto(
                        "someTitel",
                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                        "nice sidebar",
                        true,
                        new ArrayList<>(List.of("React", "Css", "Styled-component"))
                );
                when(idUtilities.generateId()).thenReturn(expectedId);
                when(timeStampUtilities.generateTimestampEpochSeconds()).thenReturn(expectedTime);

                //When
                Record addedRecord = recordService.addRecord(recordToAdd, principalName);

                Record expectedRecord = new Record("uniqueId",
                        "someTitel",
                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                        "nice sidebar",
                        expectedTime,
                        true,
                        new ArrayList<>(List.of("React", "Css", "Styled-component")));

                //Then
                assertThat(addedRecord, is(expectedRecord));
                verify(mongoTemplate).updateFirst(query, update.addToSet("recordList", expectedRecord), LinkLibrarianUser.class);
        }

}