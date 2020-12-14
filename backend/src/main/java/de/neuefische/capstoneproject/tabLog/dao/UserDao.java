package de.neuefische.capstoneproject.tabLog.dao;


import de.neuefische.capstoneproject.tabLog.model.LoginUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDao extends PagingAndSortingRepository<LoginUser, String> {
}
