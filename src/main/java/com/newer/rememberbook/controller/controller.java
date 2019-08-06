package com.newer.rememberbook.controller;

import com.newer.rememberbook.domain.Article;
import com.newer.rememberbook.domain.Books;
import com.newer.rememberbook.domain.Tag;
import com.newer.rememberbook.domain.User;
import com.newer.rememberbook.service.Sservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class controller {
    @Autowired
    private Sservice sservice;

    @RequestMapping("cycle")
    public List<Article> cycle(HttpSession session){
        User user = (User) session.getAttribute("loginUser");
        int uid = user.getUid();
        System.out.println(uid+"---uid");
        List<Article> recycle=sservice.selesqrecycle(uid);
        return recycle;
    }
    @RequestMapping("selesqbook")
    public List<Books> selesqbook(HttpSession session){
        List<Books> recycle=sservice.selesqbook(1,1);
        return recycle;
    }

    @RequestMapping("selebook")
    public List<Books> selebook(HttpSession session){
        List<Books> recycle=sservice.selesqbook(1,0);
        return recycle;
    }

    @RequestMapping("delearticle")
    public int delearticle(@RequestParam("artid") Integer artid){
        int funct=sservice.delearticle(artid);
        return funct;
    }

    @RequestMapping("updaarticle")
    public int updaarticle(@RequestParam("artid") Integer artid){
        int funct=sservice.updaarticle(artid);
        return funct;
    }

    @RequestMapping("delebook")
    public int delebook(@RequestParam("bid") Integer bid){
        int funct=sservice.delebook(bid);
        return funct;
    }

    @RequestMapping("updabook")
    public int updabook(@RequestParam("bid") Integer bid){
        int funct=sservice.updabook(bid);
        return funct;
    }

    @RequestMapping("fbook")
    public List<Article> fbook(@RequestParam("databt") String databt,
                               @RequestParam("databa") String databa,
                               @RequestParam("labe") String labe
    ){
        System.out.println("vvv"+labe);
        List<Article> recycle=sservice.bookadd(2,databa,databt,labe);
        System.out.println(recycle);
        return recycle;
    }

    @RequestMapping("bookadd")
    public List<Article> bookadd(
    ){
        List<Article> recycle=sservice.bookadd(2,null,null,null);
        return recycle;
    }

    @RequestMapping("seltag")
    public List<Tag> seltag(){
        List<Tag> recycle=sservice.seltag();
        return recycle;
    }


    @RequestMapping("upart")
    public int upart(HttpServletRequest request){
        String [] js=request.getParameterValues("artid");
        System.out.println("jjj"+js);
        Integer temo=0;
        for(int i=0;i<js.length;i++) {
            temo=Integer.parseInt(js[i]);
        }
        System.out.println("js"+temo);
        int func=sservice.upart(1,temo);
        return func;
    }
    @RequestMapping("Start")
    public List<Article> Start(@RequestParam("bid") Integer bid){
        List<Article> list=sservice.Start(bid);
        return list;
    }
}
