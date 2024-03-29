package com.newer.rememberbook.controller;

import com.newer.rememberbook.domain.Area;
import com.newer.rememberbook.domain.City;
import com.newer.rememberbook.domain.Province;
import com.newer.rememberbook.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class  ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    /*查询所有省份*/
    @RequestMapping("allProvince")
    public List<Province> allProvince(){
        return provinceService.allProvince();
    }

    /*根据省份查询城市*/
    @RequestMapping("allCity")
    public List<City> allCity(@RequestParam("provinceCode") String provinceCode){
        return provinceService.allCity(provinceCode);
    }

    /*根据城市查询地区*/
    @RequestMapping("allArea")
    public List<Area>  allArea(@RequestParam("cityCode") String cityCode){
        return provinceService.allArea(cityCode);
    }
}
