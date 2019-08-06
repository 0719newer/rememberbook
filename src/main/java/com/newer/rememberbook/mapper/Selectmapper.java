package com.newer.rememberbook.mapper;

import com.newer.rememberbook.domain.Article;
import com.newer.rememberbook.domain.Books;
import com.newer.rememberbook.domain.Tag;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface Selectmapper {
    //查询删除的文章 绑定用户uid
    @Select("select * from Sq_article where Uid=#{uid} and Artstatus=1")
    public List<Article> recycle(@Param("uid") Integer uid);
    //查询删除的书籍 绑定用户uid
    @Select("select * from Sq_book  where Uid=#{uid} and Artstatus=#{art}")
    public List<Books> selesqbook(@Param("uid") Integer uid, @Param("art") Integer art);
    //根据id彻底删除文章
    @Delete("delete  from Sq_article where Artid=#{artid}")
    public int delearticle(@Param("artid") Integer artid);
    //根据id修改被删除的文章 修改状态
    @Update("update Sq_article set Artstatus=0 where Artid=#{artid}")
    public int updaarticle(@Param("artid") Integer artid);

    //根据id彻底删除书籍
    @Delete("delete  from Sq_book where  Bid=#{bid}")
    public int delebook(@Param("bid") Integer bid);
    //根据id修改被删除的文章 修改状态
    @Update("update Sq_book set Artstatus=0 where Bid=#{bid}")
    public int updabook(@Param("bid") Integer bid);
    //查询文章状态为0的文章
    //@Select("select * from Sq_article where Artstatus=0 and Uid=#{uid}")
    public List<Article> bookadd(@Param("uid") Integer uid, @Param("databa") String databa, @Param("databt") String databt, @Param("labe") String labe);

    @Select("select * from Sq_tag")
    public List<Tag> seltag();

    @Update("update Sq_article set bid=#{bid} where Artid=#{artid}")
    public int upart(@Param("bid") Integer bid, @Param("artid") Integer artid);
    //根据书籍id 查询文章
    @Select("select * from Sq_article where bid=#{bid}")
    public List<Article> Start(@Param("bid") Integer bid);
}
