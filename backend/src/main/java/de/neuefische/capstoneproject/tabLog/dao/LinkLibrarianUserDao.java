package de.neuefische.capstoneproject.tabLog.dao;

import de.neuefische.capstoneproject.tabLog.model.LinkLibrarianUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface LinkLibrarianUserDao extends PagingAndSortingRepository <LinkLibrarianUser,String> {

LinkLibrarianUser findByEmail(String principalName);

}
