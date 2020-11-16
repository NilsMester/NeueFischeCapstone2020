package de.neuefische.capstoneproject.link_librarian.dao;

import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RecordMongoDao extends PagingAndSortingRepository <LinkLibrarianUser,String> {

}
