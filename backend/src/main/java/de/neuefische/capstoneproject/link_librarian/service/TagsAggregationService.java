package de.neuefische.capstoneproject.link_librarian.service;
import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Tags;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;


@Service
public class TagsAggregationService {

    private MongoTemplate mongoTemplate;


    public TagsAggregationService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

  /*  db.linklibrarianuser.aggregate([{"$match":{"_id":"saskia@web.net"}},
    {$group:{_id:"$recordList.tagsList"}},
    {$project:{_id:1, tagsList:1}},
    {"$unwind":"$_id"},
    {"$unwind":"$_id"},
    {$group:{_id:"$_id", count:{$sum:1}}},*/

    public List<Tags> userTagList(String principalName) {

        Aggregation aggregation = newAggregation(
                match(new Criteria("email").is(principalName)),
                group("recordList.tagList"),
                project("_id", "tagList"),
                unwind("_id"),
                unwind("_id"),
                group("_id").count().as("count")
        );

        AggregationResults<Tags> userResults = mongoTemplate.aggregate(aggregation, LinkLibrarianUser.class, Tags.class);
        List<Tags> userTagList = userResults.getMappedResults();
        return userTagList;
    }

}
