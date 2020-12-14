package de.neuefische.capstoneproject.tabLog.security;

import de.neuefische.capstoneproject.tabLog.dao.UserDao;
import de.neuefische.capstoneproject.tabLog.model.LoginUser;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoDbUserDetailsService implements UserDetailsService {

    private final UserDao userDao;

    public MongoDbUserDetailsService(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<LoginUser> userById = userDao.findById(email);
        if(userById.isEmpty()){
            throw new UsernameNotFoundException("user not found");
        }
        return new User(email, userById.get().getPassword(), List.of());
    }
}
