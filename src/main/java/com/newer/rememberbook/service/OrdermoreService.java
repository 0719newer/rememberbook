package com.newer.rememberbook.service;

import com.newer.rememberbook.domain.Ordermore;
import com.newer.rememberbook.mapper.OrdermoreMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdermoreService {

    @Autowired
    private OrdermoreMapper ordermoreMapper;

    public List<Ordermore> queryLikeBookname(int uid, String bname, String ordstatus) {
        return ordermoreMapper.queryLikeBookname(uid,bname, ordstatus);
    }

    public int addOrdermore(int uid, int bid, int ordint, String ordstatus) {
        return ordermoreMapper.addOrdermore(uid, bid, ordint, ordstatus);
    }

    public int delOrdermore(int ordid) {
        return ordermoreMapper.delOrdermore(ordid);
    }

}
