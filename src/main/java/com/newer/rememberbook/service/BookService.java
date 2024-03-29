package com.newer.rememberbook.service;


import com.newer.rememberbook.domain.Books;
import com.newer.rememberbook.domain.Print;
import com.newer.rememberbook.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookMapper bookMapper;
    //根据id查询信息
    public Print queryBookById(int pid){
        return bookMapper.queryBookById(pid);
    }
    
    public List<Print> queryBookAll(){
        return bookMapper.queryBookAll();
    }

    /*添加书籍*/
    public int addBook(Books book){
        return bookMapper.addBook(book);
    }
}
