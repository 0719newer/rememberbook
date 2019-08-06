package com.newer.rememberbook.controller;

import com.newer.rememberbook.domain.Tag;
import com.newer.rememberbook.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TagController {
    @Autowired
    private TagService tagService;

    @RequestMapping("queryAllTag")
    public Map<String, Object> quueryAlltag(HttpServletRequest req){
        String tagname = req.getParameter("tagname");
        System.out.println(tagname+"---tag");
        int startIndex = Integer.parseInt(req.getParameter("iDisplayStart"));
        int pageSize = Integer.parseInt(req.getParameter("iDisplayLength"));
        List<Tag> list = tagService.queryAllTag(tagname,startIndex,pageSize);
        int totle = tagService.getTotal(tagname,startIndex,pageSize);
        Map<String, Object> result = new HashMap<>();
        result.put("aaData",list);
        result.put("iTotalDisplayRecords",totle);
        result.put("iTotalRecords",totle);
        return result;
    }
}
