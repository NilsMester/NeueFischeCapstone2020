package de.neuefische.capstoneproject.link_librarian.service;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Accumulators;

import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Projections;
import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;

import de.neuefische.capstoneproject.link_librarian.model.LinkLibrarianUser;
import de.neuefische.capstoneproject.link_librarian.model.Tags;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;


@Service
public class TagsAggregationService {

    private LinkLibrarianUserDao linkLibrarianUserDao;
    private MongoTemplate mongoTemplate;


    public TagsAggregationService(LinkLibrarianUserDao linkLibrarianUserDao, MongoTemplate mongoTemplate) {
        this.linkLibrarianUserDao = linkLibrarianUserDao;
        this.mongoTemplate = mongoTemplate;
    }

  /*  db.linklibrarianuser.aggregate([{"$match":{"_id":"saskia@web.net"}},
    {$group:{_id:"$recordList.tagsList"}},
    {$project:{_id:1, tagsList:1}},
    {"$unwind":"$_id"},
    {"$unwind":"$_id"},
    {$group:{_id:"$_id", count:{$sum:1}}},*/

    public List<Tags> userTagsLists(String principalName) {

        Aggregation aggregation = newAggregation(
                match(new Criteria("email").is(principalName)),
                group("recordList.tagsList"),
                project("_id", "tagsList"),
                unwind("_id"),
                unwind("_id"),
                group("_id").count().as("count")
        );

        AggregationResults<Tags> userResults = mongoTemplate.aggregate(aggregation, LinkLibrarianUser.class, Tags.class);
        List<Tags> userTagsList = userResults.getMappedResults();
        System.out.println(userTagsList);
        return userTagsList;
    }

  /*  public List<Document> userTagsList(String principalName) {
        MongoCollection<Document> collection = mongoTemplate.getCollection("linklibrarianuser");
        collection.aggregate(
                Arrays.asList(
                        match(Filters.eq("email", principalName)),
                        group("$recordList.tagsList"),
                        project(
                                Projections.fields(
                                        Projections.exclude(),
                                        Projections.include("tagsList")
                                )
                        ),
                        unwind("_id"),
                        unwind("_id"),
                        group("§_id", Accumulators.sum("count",1) ))
        );
        return (List<Document>) collection;
    }*/


/*  public List<String> tagList (String principalName){
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(principalName));
        query.fields().include("tagsList");

        List<String> list = mongoTemplate.find(query, String.class);

        Set<Object> tagSet = new HashSet<Object>();

        *//*for (Object tag : list)
            if(!tagSet.contains(tag))
                tagSet.add(tag);
            else(
*//*
        return list;
    }*/
}
