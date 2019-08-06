package com.newer.rememberbook.mapper;

import com.newer.rememberbook.domain.Tag;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TagMapper {
    //分页查询标签信息
    public List<Tag> queryAllTag(@Param("tagname") String tagname, @Param("startIndex") int startIndex, @Param("pageSize") int pageSize);
    //查询总记录数
    public int getTotal(@Param("tagname") String tagname, @Param("startIndex") int startIndex, @Param("pageSize") int pageSize);
}
