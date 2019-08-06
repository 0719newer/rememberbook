package com.newer.rememberbook.controller;

import com.newer.rememberbook.domain.Ordermore;
import com.newer.rememberbook.domain.User;
import com.newer.rememberbook.service.OrdermoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class OrdermoreController {

    @Autowired
    private OrdermoreService ordermoreService;

    @RequestMapping("queryLikeBookname")
    public List<Ordermore> queryLikeBookname(HttpSession session,@RequestParam("bname") String bname, @RequestParam("ordstatus") String ordstatus) {

        User user =(User)session.getAttribute("loginUser");
        int uid = user.getUid();
        if (bname == "" && ordstatus.equals("全部")) {
            //查询所有
            ordstatus = "";
        }
        System.out.println(bname + "----" + ordstatus);
        List<Ordermore> list = ordermoreService.queryLikeBookname(uid,bname, ordstatus);
        System.out.println(list);
        return list;
    }

    @RequestMapping("addOrdermore")
    public int addOrdermore(HttpSession session, @RequestParam("bid") int bid, @RequestParam("ordint") int ordint, @RequestParam("ordstatus") String ordstatus) {
        User user = (User) session.getAttribute("user");
        int count = ordermoreService.addOrdermore(user.getUid(), bid, ordint, ordstatus);
        return count;
    }

    @RequestMapping("delOrdermore")
    public int delOrdermore(@RequestParam("ordid") int ordid) {
        int count = ordermoreService.delOrdermore(ordid);
        return count;
    }
}
