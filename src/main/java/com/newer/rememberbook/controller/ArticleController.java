package com.newer.rememberbook.controller;

import com.newer.rememberbook.domain.Article;
import com.newer.rememberbook.domain.SysUsers;
import com.newer.rememberbook.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @RequestMapping("add")
    public int add(Article article){
        int fluRows = articleService.add(article);

        return fluRows;
    }

    @RequestMapping("selectByTitle")
    public List<Article> selectByTitle(@RequestParam("Arttitle") String Arttitle,
                                       @RequestParam("startIndex") Integer startIndex,
                                       @RequestParam("pageSize") Integer pageSize){

        List<Article> articles = articleService.selectByTitle(Arttitle,startIndex,pageSize);
        List<Article> articlesAll = articleService.selectAll();
        String fonts ="";
        for(Article article:articlesAll){
            fonts+=article.getArttext();
        }

        String fontAry[] = fonts.split("");
        System.out.println(fontAry.length);

        return articles;

    }

    @ResponseBody
    @RequestMapping("/img")
    public Map<String,Object> uploadImgQiniu(@RequestParam("files") MultipartFile
                                                     file) throws IOException {
        Map<String,Object> map = new HashMap<String,Object>();
        if(!file.isEmpty()) {
            System.out.println(file.getOriginalFilename());
            String fileName = file.getOriginalFilename();
            // 获取后缀
            //String suffixName = fileName.substring(fileName.lastIndexOf("."));
            // 文件上传的路径
            String filePath = "D:/ideatest/bookremember/src/main/resources/upload";
            // fileName处理
            fileName = filePath+fileName;
            // 文件对象
            File dest = new File(fileName);
            // 创建路径
            if(!dest.getParentFile().exists()){
                dest.getParentFile().mkdir();
            }
            try {
                //保存文件
                file.transferTo(dest);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        map.put("filename", "/images/"+file.getOriginalFilename());
        return map;
    }

    @RequestMapping("queryAllByatype")
    public Map<String, Object> queryAllByatype1(HttpServletRequest req, HttpSession session, @RequestParam("startDate")String startDate, @RequestParam("endDate")String endDate
                                                ){
        //@RequestParam("title") String title,@RequestParam("context")String context,@RequestParam("tag")String tag
        SysUsers sysuser = (SysUsers) session.getAttribute("sysuser");
        int atype = sysuser.getState();
        int startIndex = Integer.parseInt(req.getParameter("iDisplayStart"));
        int pageSize = Integer.parseInt(req.getParameter("iDisplayLength"));
        List<Article> list = articleService.queryAllByatype1(atype,null,null,null,startIndex,pageSize,startDate,endDate);
        int totle = articleService.getTotal(atype,null,null,null,startDate,endDate);
        Map<String, Object> result = new HashMap<>();
        result.put("aaData",list);
        result.put("iTotalDisplayRecords",totle);
        result.put("iTotalRecords",totle);
        return result;
    }

    @RequestMapping("BearArticle")
    public int BearArticle(@RequestParam("artid")int artid){
        return articleService.BearArticle(artid);
    }

    @RequestMapping("Doblocking")
    public int Doblocking(@RequestParam("artid")int artid){
        return articleService.Doblocking(artid);
    }
}
