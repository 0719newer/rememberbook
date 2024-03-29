package com.newer.rememberbook.mapper;

import com.newer.rememberbook.domain.Books;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface OrderMapper {
    //根据id查询书籍信息
    @Select("select * from sq_book where bid=#{bid}")
    public Books queryById(@Param("bid") int bid);

    @Select("select * from sq_book where uid =#{uid}")
    public List<Books> queryAll(@Param("uid") int uid);

    @Update("update sq_book set bnumber = bnumber+1")
    public int addNumberPrice();

    @Update("update sq_book set bnumber = bnumber-1")
    public int reduceNumberPrice();


}
