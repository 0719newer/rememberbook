package com.newer.rememberbook.service;

import com.newer.rememberbook.domain.Article;
import com.newer.rememberbook.domain.Books;
import com.newer.rememberbook.domain.Tag;
import com.newer.rememberbook.mapper.Selectmapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Sservice {
    @Autowired
    private Selectmapper selectmapper;

    public List<Article> selesqrecycle(Integer uid){
        List <Article> list=selectmapper.recycle(uid);
        return list;
    }

    public List<Books> selesqbook(Integer uid, Integer art){
        return selectmapper.selesqbook(uid,art);
    }

    public int delearticle(Integer artid){
        return selectmapper.delearticle(artid);
    }

    public int updaarticle(Integer artid){
        return selectmapper.updaarticle(artid);
    }

    public int delebook(Integer bid){
        return selectmapper.delebook(bid);
    }

    public int updabook(Integer bid){
        return selectmapper.updabook(bid);
    }

    public List<Article> bookadd(Integer uid,String databt,String databa,String labe){
        return selectmapper.bookadd(uid,databt,databa,labe);
    }

    public List<Tag> seltag(){
        return selectmapper.seltag();
    }

    public int upart(Integer bid,Integer artid){
        return selectmapper.upart(bid,artid);
    }

    public List<Article> Start(Integer bid){
        return selectmapper.Start(bid);
    }
}
