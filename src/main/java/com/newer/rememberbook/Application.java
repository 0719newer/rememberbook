package com.newer.rememberbook;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.newer.rememberbook.mapper")//扫描映射接口

public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
