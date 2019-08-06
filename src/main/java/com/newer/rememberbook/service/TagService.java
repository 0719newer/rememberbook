package com.newer.rememberbook.service;

import com.newer.rememberbook.domain.Tag;
import com.newer.rememberbook.mapper.TagMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {
    @Autowired
    private TagMapper tagMapper;
    //查询所有标签信息
    public List<Tag> queryAllTag(String tagname, int startIndex, int pageSize){
        return tagMapper.queryAllTag(tagname,startIndex,pageSize);
    }

    public int getTotal(String tagname,int startIndex,int pageSize){
        return tagMapper.getTotal(tagname,startIndex,pageSize);
    }

}
