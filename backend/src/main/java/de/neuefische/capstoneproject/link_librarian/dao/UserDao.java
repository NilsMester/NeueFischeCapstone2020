package de.neuefische.capstoneproject.link_librarian.dao;


import de.neuefische.capstoneproject.link_librarian.model.LoginUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDao extends PagingAndSortingRepository<LoginUser, String> {
}
