package de.neuefische.capstoneproject.link_librarian.service;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Accumulators;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Projections;
import de.neuefische.capstoneproject.link_librarian.dao.LinkLibrarianUserDao;
import org.bson.Document;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.mongodb.client.model.Aggregates.group;

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

   public List<Document> tagsList(String principalName) {
        MongoCollection<Document> collection = mongoTemplate.getCollection("linklibrarianuser");
        collection.aggregate(
                Arrays.asList(
                        Aggregates.match(Filters.eq("email", principalName)),
                        /*group("$", Accumulators.sum("count", 1)
                        Aggregates.unwind()*/
                        Aggregates.project(
                                Projections.fields(
                                        Projections.exclude(),
                                        Projections.include("tagsList")
                                )
                        )
                )
        );
        return null;
    }


}
