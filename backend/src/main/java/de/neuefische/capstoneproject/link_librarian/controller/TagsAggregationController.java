package de.neuefische.capstoneproject.link_librarian.controller;

import de.neuefische.capstoneproject.link_librarian.model.Tags;
import de.neuefische.capstoneproject.link_librarian.service.TagsAggregationService;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/usertags")
public class TagsAggregationController {

    private final TagsAggregationService tagsAggregationService;

    @Autowired
    public TagsAggregationController(TagsAggregationService tagsAggregationService) {
        this.tagsAggregationService = tagsAggregationService;
    }

    @GetMapping
    public List<Tags> userTagList(Principal principal){
        return this.tagsAggregationService.userTagList(principal.getName());
    }
}
