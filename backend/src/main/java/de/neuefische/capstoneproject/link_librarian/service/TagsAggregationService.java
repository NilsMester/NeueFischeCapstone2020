package de.neuefische.capstoneproject.link_librarian.service;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Accumulators;

import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Projections;
import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;

import org.bson.Document;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

import static com.mongodb.client.model.Aggregates.*;


@Service
public class TagsAggregationService {

    private LinkLibrarianUserDao linkLibrarianUserDao;
    private MongoTemplate mongoTemplate;


    public TagsAggregationService(LinkLibrarianUserDao linkLibrarianUserDao, MongoTemplate mongoTemplate) {
        this.linkLibrarianUserDao = linkLibrarianUserDao;
        this.mongoTemplate = mongoTemplate;
    }

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

    /*Arrays.asList(
            Aggregates.match(Filters.eq("email", principalName)),
                        *//*group("$", Accumulators.sum("count", 1)
                        Aggregates.unwind()*//*
            Aggregates.project(
            Projections.fields(
            Projections.exclude(),
            Projections.include("tagsList")
            )
            )
            )*/

  /*  db.linklibrarianuser.aggregate([{"$match":{"_id":"saskia@web.net"}},
    {"$unwind":"$recordList"},

    {$group:{_id:"$recordList.tagsList", count:{$sum:1}}},
    {"$unwind":"$_id"},

            ])*/

  /*  db.linklibrarianuser.aggregate([{"$match":{"_id":"saskia@web.net"}},
    {$group:{_id:"$recordList.tagsList"}},
    {$project:{_id:1, tagsList:1}},
    {"$unwind":"$_id"},
    {"$unwind":"$_id"},
    {$group:{_id:"$_id", count:{$sum:1}}},*/



   public List<Document> userTagsList(String principalName) {
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
    }


}
