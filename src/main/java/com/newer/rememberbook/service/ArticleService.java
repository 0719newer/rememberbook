package com.newer.rememberbook.service;


import com.newer.rememberbook.domain.Article;
import com.newer.rememberbook.mapper.ArticleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Transactional(propagation = Propagation.REQUIRED,
            isolation = Isolation.DEFAULT,rollbackFor = Exception.class)
    public int add(Article article){
        return articleMapper.add(article);
    }

    public List<Article> selectByTitle(String Arttitle,Integer startIndex,Integer pageSize){
        return articleMapper.selectByTitle(Arttitle, startIndex, pageSize);
    }

    public List<Article> selectAll(){
        return articleMapper.selectAll();
    }

    public List<Article> queryAllByatype1(int atype,String artitle,String arttext,String arttag, int startIndex, int pageSize, String startDate,String endDate){
        return articleMapper.queryAllByatype1(atype,artitle,arttext,arttag,startIndex,pageSize,startDate,endDate);
    }
    //获取总记录数
    public int getTotal(int atype,String artitle,String arttext,String arttag,String startDate,String endDate) {
        return articleMapper.getTotal(atype, artitle, arttext, arttag, startDate, endDate);
    }
        //修改文章
        public int updById(Article article){
            return articleMapper.updById(article);
        }

        //删除文章
        public int delById(Integer Artid){
            return articleMapper.delById(Artid);
        }
        //禁封
        public int BearArticle(int artid){
            return articleMapper.BearArticle(artid);
        }
        //解封
        public int Doblocking (int artid){
            return articleMapper.Doblocking(artid);
        }

//        //根据标签查询
//        public List<Article> selectByTag(String Arttag){
//            return articleMapper.selectByTag(Arttag);
//        }

        //查询文章总记录数
        public int selectTotal(){
            return articleMapper.selectTotal();
        }
}
