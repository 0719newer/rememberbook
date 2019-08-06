package com.newer.rememberbook.service;

import com.newer.rememberbook.domain.Books;
import com.newer.rememberbook.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderMapper orderMapper;

    //根据id查询书籍信息
    public Books queryById(int bid){
    return orderMapper.queryById(bid);
    }
    //加
    public int addNumberPrice(){
    return orderMapper.addNumberPrice();
    }
    //减
    public int reduceNumberPrice(){
        return orderMapper.reduceNumberPrice();
    }
    //查询所有
    public List<Books> queryAll(int uid){
        return orderMapper.queryAll(uid);
    }
}
