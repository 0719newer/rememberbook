package com.newer.rememberbook.mapper;

import com.newer.rememberbook.domain.Article;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface ArticleMapper {

    @Insert("insert into article values(null,#{Uid},#{Artstatus},#{Arttitle},#{Arttext}," +
            "#{Arttag},#{ArtphotoPath},now())")
    public int add(Article article);

    public List<Article> selectByTitle(@Param("Arttitle") String Arttitle,
                                       @Param("startIndex") Integer startIndex,
                                       @Param("pageSize") Integer pageSize);

    @Select("select * from article")
    public List<Article> selectAll();


    //查询未通过审批的文章
    public List<Article> queryAllByatype1(@Param("atype") int atype, @Param("artitle") String artitle, @Param("arttext") String arttext, @Param("arttag") String arttag, @Param("startIndex") Integer startIndex,
                                          @Param("pageSize") Integer pageSize, @Param("startDate") String startDate,
                                          @Param("endDate") String endDate);

    public int getTotal(@Param("atype") int atype, @Param("artitle") String artitle, @Param("arttext") String arttext, @Param("arttag") String arttag, @Param("startDate") String startDate, @Param("endDate") String endDate);

    //禁封
    @Update("update sq_article set artstatus = 2 where artid = #{artid}")
    public int BearArticle(@Param("artid") int artid);

    //解封
    @Update("update sq_article set artstatus = 0 where artid = #{artid}")
    public int Doblocking(@Param("artid") int artid);

    // 审批通过
    @Update("update sq_article set atype = #{atype} where artid = #{artid}")
    public int ApproveArticle(@Param("atype") int atype, @Param("artid") int artid);

    @Select("select count(*) from sq_article where Artstatus = 0")
    public int selectTotal();

    @Update("update sq_article set Bid = #{Bid} where Artid = #{Artid}")
    public int updById(Article article);

    @Delete("delete sq_article where Artid = #{Artid}")
    public int delById(@Param("Artid") Integer Artid);

}
