package de.neuefische.capstoneproject.link_librarian.service;

import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.utilities.IdUtilities;
import de.neuefische.capstoneproject.link_librarian.utilities.TimeStampUtilities;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import static org.junit.jupiter.api.Assertions.fail;

import java.time.Instant;
import java.util.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

public class RecordServiceTest{

        final IdUtilities idUtilities = mock(IdUtilities.class);
        final TimeStampUtilities timeStampUtilities = mock(TimeStampUtilities.class);

        final LinkLibrarianUserDao linkLibrarianUserDao = mock(LinkLibrarianUserDao.class);

        final RecordService recordService = new RecordService(linkLibrarianUserDao, idUtilities, timeStampUtilities);



@Test
@DisplayName("The \"add\" method should return the added record object")
void addRecordTest(){
        //Given
        String principalName = "alex@web.de";
        String expectedId = "uniqueId";
        Instant expectedTime = Instant.parse("2020-10-26T10:00:00Z");

        LinkLibrarianUser userAlex = new LinkLibrarianUser(
                "alex@web.de",
                new ArrayList<>(List.of(
                        new Record("1",
                                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                "tutorial box gradient borders with curves ",
                                expectedTime,
                                true,
                                new ArrayList<>(List.of("Css", "Styled-component")))))
        );

        AddRecordDto recordToAdd = new AddRecordDto(
                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                "nice sidebar",
                true,
                new ArrayList<>(List.of("React", "Css", "Styled-component"))
        );
        when(idUtilities.generateId()).thenReturn(expectedId);
        when(timeStampUtilities.generateTimestampEpochSeconds()).thenReturn(expectedTime);
        when(linkLibrarianUserDao.findById(principalName)).thenReturn(Optional.of(userAlex));

        //When
        Record addedRecord = recordService.addRecord(recordToAdd,principalName);

        LinkLibrarianUser expectedUser = new LinkLibrarianUser(
                "alex@web.de",
                new ArrayList<>(List.of(

                        new Record("1",
                                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                "tutorial box gradient borders with curves ",
                                expectedTime,
                                true,
                                new ArrayList<>(List.of("Css", "Styled-component"))),
                        new Record("uniqueId",
                                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                "nice sidebar",
                                expectedTime,
                                true,
                                new ArrayList<>(List.of("React", "Css", "Styled-component")))
                ))
        );

        Record expectedRecord = new Record("uniqueId",
                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                "nice sidebar",
                expectedTime,
                true,
                new ArrayList<>(List.of("React", "Css", "Styled-component")));

        //Then
        assertThat(addedRecord,is(expectedRecord));
        verify(linkLibrarianUserDao).save(expectedUser);
}

        @Test
        @DisplayName("The \"add\" method should return status FORBIDDEN")
        void addRecordForbiddenTest() {
                //Given
                String principalName = "saskia@web.de";
                String expectedId = "uniqueId";
                Instant expectedTime = Instant.parse("2020-10-26T10:00:00Z");

                LinkLibrarianUser userAlex = new LinkLibrarianUser(
                        "alex@web.de",
                        new ArrayList<>(List.of(
                                new Record("1",
                                        "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                        "tutorial box gradient borders with curves ",
                                        expectedTime,
                                        true,
                                        new ArrayList<>(List.of("Css", "Styled-component")))))
                );

                AddRecordDto recordToAdd = new AddRecordDto(
                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                        "nice sidebar",
                        true,
                        new ArrayList<>(List.of("React", "Css", "Styled-component"))
                );

                //When
                when(idUtilities.generateId()).thenReturn(expectedId);
                when(timeStampUtilities.generateTimestampEpochSeconds()).thenReturn(expectedTime);
                when(linkLibrarianUserDao.findById(principalName)).thenReturn(Optional.of(userAlex));

                //Then
                try {
                        recordService.addRecord(recordToAdd, principalName);
                        fail("missing exception");
                }catch (ResponseStatusException exception) {
                        assertThat(exception.getStatus(), is(HttpStatus.FORBIDDEN));
                }
        }

        @Test
        @DisplayName("The \"add\" method should return status FORBIDDEN")
        void addRecordUserNotFoundTest(){
                //Given
                String principalName = "alex@web.de";
                String expectedId = "uniqueId";
                Instant expectedTime = Instant.parse("2020-10-26T10:00:00Z");

                LinkLibrarianUser userAlex = new LinkLibrarianUser(
                        "alex@web.de",
                        new ArrayList<>(List.of(
                                new Record("1",
                                        "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                        "tutorial box gradient borders with curves ",
                                        expectedTime,
                                        true,
                                        new ArrayList<>(List.of("Css", "Styled-component")))))
                );

                AddRecordDto recordToAdd = new AddRecordDto(
                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                        "nice sidebar",
                        true,
                        new ArrayList<>(List.of("React", "Css", "Styled-component"))
                );

                //When
                when(idUtilities.generateId()).thenReturn(expectedId);
                when(timeStampUtilities.generateTimestampEpochSeconds()).thenReturn(expectedTime);
                when(linkLibrarianUserDao.findById(principalName)).thenReturn(Optional.empty());

                //Then
                try {
                        recordService.addRecord(recordToAdd, principalName);
                        fail("missing exception");
                }catch (ResponseStatusException exception) {
                        assertThat(exception.getStatus(), is(HttpStatus.NOT_FOUND));
                }
        }

}
