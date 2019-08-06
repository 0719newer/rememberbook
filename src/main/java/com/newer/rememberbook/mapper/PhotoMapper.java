package com.newer.rememberbook.mapper;

import com.newer.rememberbook.domain.Photo;
import org.apache.ibatis.annotations.Insert;

public interface PhotoMapper {
    @Insert("insert into sq_photo values(null,#{imga},#{imgb},#{imgc},#{imgd},#{imge},#{context},#{bid},new(),101)")
    public int addPhoto(Photo photo);
}
