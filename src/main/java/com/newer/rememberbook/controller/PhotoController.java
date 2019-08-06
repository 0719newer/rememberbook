package com.newer.rememberbook.controller;

import com.newer.rememberbook.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class PhotoController {
    @Autowired
    private PhotoService photoService;
    /*添加图片文章书籍*/
    @RequestMapping("addPhoto")
    public int addPhoto(HttpServletRequest request){
        int count=1;
        
        return count;
    }

}
