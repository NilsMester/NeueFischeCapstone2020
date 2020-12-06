package de.neuefische.capstoneproject.link_librarian.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

@Service
@Slf4j
public class JwtAuthentifikationFilter extends OncePerRequestFilter {

    private final JwtUtilities jwtUtilities;

    public JwtAuthentifikationFilter(JwtUtilities jwtUtilities) {
        this.jwtUtilities = jwtUtilities;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest,
                                    HttpServletResponse httpServletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authorization = httpServletRequest.getHeader("Authorization");
        if(authorization == null || authorization.isBlank()){
            filterChain.doFilter(httpServletRequest,httpServletResponse);
            return;
        }

        String token = authorization.replace("Bearer ", "").trim();
        try {
            Claims claims = jwtUtilities.parseToken(token);
            if(!jwtUtilities.isExpired(claims)){
                SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(
                        claims.getSubject(),
                        "",
                        Collections.emptyList()
                        )
                );
            }
        }catch (JwtException e){
            logger.error("parsing Jwt token went wrong", e);
        }

        filterChain.doFilter(httpServletRequest,httpServletResponse);
    }
}
