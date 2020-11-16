package de.neuefische.capstoneproject.link_librarian.controller;

import de.neuefische.capstoneproject.link_librarian.dao.UserDao;
import de.neuefische.capstoneproject.link_librarian.dto.LoginDto;
import de.neuefische.capstoneproject.link_librarian.model.LoginUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import java.util.Date;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
        "jwt.secretkey=somesecretkey",
})
class LoginControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserDao userDao;
    private final String secretKey = "somesecretkey";

    @BeforeEach
    public void setupUser() {
        userDao.deleteAll();
        String password = new BCryptPasswordEncoder().encode("password1234");
        userDao.save(new LoginUser("franci", password));
    }

    @Test
    public void loginWithValidCredentialsShouldReturnJwtToken() {

        //GIVEN
        LoginDto loginDto = new LoginDto(
                "franci",
                "password1234"
        );

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginDto, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));

        String token = response.getBody();
        Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();

        assertThat(claims.getSubject(), is("franci"));
        assertThat(claims.getExpiration().after(new Date()), is(true));
    }

    @Test
    public void loginWithInValidCredentialsShouldReturnForbidden() {

        //GIVEN
        LoginDto loginDto = new LoginDto(
                "franci",
                "password12345"
        );

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginDto, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));
    }

}