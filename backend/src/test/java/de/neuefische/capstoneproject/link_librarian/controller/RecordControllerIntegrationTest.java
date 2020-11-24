package de.neuefische.capstoneproject.link_librarian.controller;

import de.neuefische.capstoneproject.link_librarian.dao.UserDao;
import de.neuefische.capstoneproject.link_librarian.dto.AddRecordDto;
import de.neuefische.capstoneproject.link_librarian.dto.LoginDto;
import de.neuefische.capstoneproject.link_librarian.model.LoginUser;
import de.neuefische.capstoneproject.link_librarian.model.Record;
import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.utilities.IdUtilities;
import de.neuefische.capstoneproject.link_librarian.utilities.TimeStampUtilities;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {"jwt.secretkey=somesecretkey"})
public class RecordControllerIntegrationTest {

    @LocalServerPort
    private int port;

    @MockBean
    private IdUtilities mockedIdUtilities;

    @MockBean
    private TimeStampUtilities mockedTimeStampUtilities;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private LinkLibrarianUserDao linkLibrarianUserDao;

    @Autowired
    private UserDao userDao;

    @BeforeEach
    public void setupDataBase(){
        linkLibrarianUserDao.deleteAll();
        linkLibrarianUserDao.saveAll(List.of(
                new LinkLibrarianUser(
                        "alex@web.de",
                        new ArrayList<>(List.of(

                                new Record("1",
                                        "someTitel",
                                        "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                        "tutorial box gradient borders with curves ",
                                        Instant.parse("2020-11-18T18:35:24.00Z"),
                                        true,
                                        new ArrayList<>(List.of("Css", "Styled-component"))),
                                new Record("2",
                                        "someTitel",
                                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                        "nice sidebar",
                                        Instant.parse("2020-11-19T18:35:24.00Z"),
                                        true,
                                        new ArrayList<>(List.of("React", "Css", "Styled-component")))
                        ))),
                new LinkLibrarianUser(
                        "klaus@web.de",
                        new ArrayList<>(List.of(

                                new Record("1",
                                        "someTitel",
                                        "https://www.youtube.com/watch?v=fMVhvMXHSIo&list=RDfMVhvMXHSIo&start_radio=1",
                                        "Iron Sky live on dutch television",
                                        Instant.parse("2020-11-18T18:35:24.00Z"),
                                        true,
                                        new ArrayList<>(List.of("Paolo Nutini", "Music"))),
                                new Record("2",
                                        "someTitel",
                                        "https://www.youtube.com/watch?v=BNMKGYiJpvg",
                                        "Feeling Good original",
                                        Instant.parse("2020-11-19T18:35:24.00Z"),
                                        true,
                                        new ArrayList<>(List.of("Nina Simone", "60s")))
                        )))
        ));

        userDao.deleteAll();
        String passwordAlex = new BCryptPasswordEncoder().encode("alex1234");
        String passwordKlaus = new BCryptPasswordEncoder().encode("klaus1234");
        userDao.saveAll(List.of(
                new LoginUser(
                        "alex@web.de",
                        passwordAlex,
                        "Alex"
                ),
                new LoginUser(
                        "klaus@web.de",
                        passwordKlaus,
                        "Klaus"
                ))
        );
    }

    private String linkLibrarianUserAccessUrl(){return "http://localhost:" + port + "/api/records"; }

    private String login(){
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:" + port + "/auth/login", new LoginDto(
                "alex@web.de", "alex1234"
        ), String.class);

        return response.getBody();
    }

    private <T> HttpEntity<T> getValidAuthorizationEntity(T data){
        String token = login();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        return new HttpEntity<>(data, headers);
    }

    @Test
    @DisplayName("The \"getUserRecordsList\" method should return the fitting list of records")
    public void getUserRecordsListTest(){
        //Given
        String url = linkLibrarianUserAccessUrl();

        //When
        HttpEntity<Void> entity = getValidAuthorizationEntity(null);
        ResponseEntity<Record[]> response = restTemplate.exchange(url, HttpMethod.GET,entity,Record[].class);

        List<Record> expectedList = new ArrayList<>(List.of(
                new Record("1",
                        "someTitel",
                        "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                        "tutorial box gradient borders with curves ",
                        Instant.parse("2020-11-18T18:35:24.00Z"),
                        true,
                        new ArrayList<>(List.of("Css", "Styled-component"))),
                new Record("2",
                        "someTitel",
                        "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                        "nice sidebar",
                        Instant.parse("2020-11-19T18:35:24.00Z"),
                        true,
                        new ArrayList<>(List.of("React", "Css", "Styled-component")))
        ));

        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertThat(response.getBody(), is(expectedList.toArray()));

    }

    @Test
    @DisplayName("The \"add\" method should add to the fitting LinkLibrarianUser and return the added record object")
    public void postRecordIntegrationTest (){
        //Given
        String url = linkLibrarianUserAccessUrl();

        AddRecordDto recordToAdd = new AddRecordDto(
                "someTitel",
                "https://mkyong.com/mongodb/spring-data-mongodb-update-document/",
                "Update document with query",
                true,
                List.of("Java", "MongoDB", "Spring")
        );
        when(mockedIdUtilities.generateId()).thenReturn("new generated id");
        when(mockedTimeStampUtilities.generateTimestampEpochSeconds()).thenReturn(Instant.parse("2020-11-22T18:35:24.00Z"));

        //WHEN
        HttpEntity<AddRecordDto> entity = getValidAuthorizationEntity(recordToAdd);
        ResponseEntity<Record> response = restTemplate.exchange(url, HttpMethod.POST, entity, Record.class);

        Object updatedLinkLibrarianUser = linkLibrarianUserDao.findById("alex@web.de");
        Object expectedLinkLibrarianUser =  Optional.of(new LinkLibrarianUser(
                "alex@web.de",
                new ArrayList<>(List.of(

                        new Record("1",
                                "someTitel",
                                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                "tutorial box gradient borders with curves ",
                                Instant.parse("2020-11-18T18:35:24.00Z"),
                                true,
                                new ArrayList<>(List.of("Css", "Styled-component"))),
                        new Record("2",
                                "someTitel",
                                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                "nice sidebar",
                                Instant.parse("2020-11-19T18:35:24.00Z"),
                                true,
                                new ArrayList<>(List.of("React", "Css", "Styled-component"))),
                        new Record("new generated id",
                                "someTitel",
                                "https://mkyong.com/mongodb/spring-data-mongodb-update-document/",
                                "Update document with query",
                                Instant.parse("2020-11-22T18:35:24.00Z"),
                                true,
                                List.of("Java", "MongoDB", "Spring"))
                ))));

        Record expectedRecord = new Record("new generated id",
                "someTitel",
                "https://mkyong.com/mongodb/spring-data-mongodb-update-document/",
                "Update document with query",
                Instant.parse("2020-11-22T18:35:24.00Z"),
                true,
                List.of("Java", "MongoDB", "Spring"));

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(expectedRecord));
        assertThat(updatedLinkLibrarianUser, is(expectedLinkLibrarianUser));
    }


    @Test
    @DisplayName("The \"updateRecord\" method should find the fitting LinkLibrarianUser & Record, update the Record and return the updated record object")
    public void putEditedRecordIntegrationTest () {
        //Given
        String url = linkLibrarianUserAccessUrl();

        Record editedRecord = new Record(
                "1",
                "Fancy Stuff",
                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                "tutorial box gradient borders with curves ",
                Instant.parse("2020-11-18T18:35:24.00Z"),
                true,
                List.of("Css", "Styled-component")
        );
        when(mockedIdUtilities.generateId()).thenReturn("new generated id");
        when(mockedTimeStampUtilities.generateTimestampEpochSeconds()).thenReturn(Instant.parse("2020-11-22T18:35:24.00Z"));

        //When
        HttpEntity<Record> entity = getValidAuthorizationEntity(editedRecord);
        ResponseEntity<Record> response = restTemplate.exchange(url, HttpMethod.PUT, entity, Record.class);

        Object updatedLinkLibrarianUser = linkLibrarianUserDao.findById("alex@web.de");
        Object expectedLinkLibrarianUser =  Optional.of(new LinkLibrarianUser(
                "alex@web.de",
                new ArrayList<>(List.of(

                        new Record("1",
                                "Fancy Stuff",
                                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                                "tutorial box gradient borders with curves ",
                                Instant.parse("2020-11-18T18:35:24.00Z"),
                                true,
                                new ArrayList<>(List.of("Css", "Styled-component"))),
                        new Record("2",
                                "someTitel",
                                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                "nice sidebar",
                                Instant.parse("2020-11-19T18:35:24.00Z"),
                                true,
                                new ArrayList<>(List.of("React", "Css", "Styled-component")))
                ))));

        Record expectedRecord = new Record("1",
                "Fancy Stuff",
                "https://dev.to/medhatdawoud/gradient-borders-with-curves-and-3d-movement-in-css-nextjs-ticket-clone-3cho",
                "tutorial box gradient borders with curves ",
                Instant.parse("2020-11-18T18:35:24.00Z"),
                true,
                List.of("Css", "Styled-component"));

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(expectedRecord));
        assertThat(updatedLinkLibrarianUser, is(expectedLinkLibrarianUser));
    }

    @Test
    @DisplayName("The \"deleteRecord\" method should delete the fitting Record byID")
    public void deleteRecordByIdIntegrationTest () {
        //Given
        String url = linkLibrarianUserAccessUrl() + "/1";

        //When
        HttpEntity<Void> entity = getValidAuthorizationEntity(null);
        ResponseEntity<Void> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, Void.class);

        Object updatedLinkLibrarianUser = linkLibrarianUserDao.findById("alex@web.de");
        Object expectedLinkLibrarianUser =  Optional.of(new LinkLibrarianUser(
                "alex@web.de",
                new ArrayList<>(List.of(
                        new Record("2",
                                "someTitel",
                                "https://react.semantic-ui.com/modules/sidebar/#examples-transitions",
                                "nice sidebar",
                                Instant.parse("2020-11-19T18:35:24.00Z"),
                                true,
                                new ArrayList<>(List.of("React", "Css", "Styled-component")))
                ))));

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(updatedLinkLibrarianUser, is(expectedLinkLibrarianUser));
    }
}


