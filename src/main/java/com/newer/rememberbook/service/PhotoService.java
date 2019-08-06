package com.newer.rememberbook.service;


import com.newer.rememberbook.domain.Photo;
import com.newer.rememberbook.mapper.PhotoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoService {
    @Autowired
    private PhotoMapper photoMapper;

    /*添加图片书*/
    public int addPhoto(Photo photo){
        return photoMapper.addPhoto(photo);
    }
}
