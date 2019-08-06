package com.newer.rememberbook.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class Books implements Serializable {
    private static final long serialVersionUID = -2645387713969222674L;
    private Integer bid;
    private Integer uid;
    private String bname;
    private String bookurl;
    private Double bprice;
    private Integer bpage;
    private String bsize;
    private String bway;
    private Integer bnumber;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "GMT+8")
    private Date bdate;
    private Integer Artstatus;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "GMT+8")
    private Date deleteTime;

    public Books() {
    }

    public Books(Integer bid, Integer uid, String bname, String bookurl, Double bprice, Integer bpage, String bsize, String bway, Integer bnumber, Date bdate, Integer artstatus, Date deleteTime) {
        this.bid = bid;
        this.uid = uid;
        this.bname = bname;
        this.bookurl = bookurl;
        this.bprice = bprice;
        this.bpage = bpage;
        this.bsize = bsize;
        this.bway = bway;
        this.bnumber = bnumber;
        this.bdate = bdate;
        Artstatus = artstatus;
        this.deleteTime = deleteTime;
    }

    public Integer getBid() {
        return bid;
    }

    public void setBid(Integer bid) {
        this.bid = bid;
    }

    public Integer getUid() {
        return uid;
    }

    public Date getDeleteTime() {
        return deleteTime;
    }
    public void setDeleteTime(Date deleteTime) {
        this.deleteTime = deleteTime;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getBname() {
        return bname;
    }

    public void setBname(String bname) {
        this.bname = bname;
    }

    public String getBookurl() {
        return bookurl;
    }

    public void setBookurl(String bookurl) {
        this.bookurl = bookurl;
    }

    public Double getBprice() {
        return bprice;
    }

    public void setBprice(Double bprice) {
        this.bprice = bprice;
    }

    public Integer getBpage() {
        return bpage;
    }

    public void setBpage(Integer bpage) {
        this.bpage = bpage;
    }

    public String getBsize() {
        return bsize;
    }

    public void setBsize(String bsize) {
        this.bsize = bsize;
    }

    public String getBway() {
        return bway;
    }

    public void setBway(String bway) {
        this.bway = bway;
    }

    public Integer getBnumber() {
        return bnumber;
    }

    public void setBnumber(Integer bnumber) {
        this.bnumber = bnumber;
    }

    public Date getBdate() {
        return bdate;
    }

    public void setBdate(Date bdate) {
        this.bdate = bdate;
    }

    public Integer getArtstatus() {
        return Artstatus;
    }

    public void setArtstatus(Integer artstatus) {
        Artstatus = artstatus;
    }

    @Override
    public String toString() {
        return "Books{" +
                "bid=" + bid +
                ", uid=" + uid +
                ", bname='" + bname + '\'' +
                ", bookurl='" + bookurl + '\'' +
                ", bprice=" + bprice +
                ", bpage=" + bpage +
                ", bsize='" + bsize + '\'' +
                ", bway='" + bway + '\'' +
                ", bnumber=" + bnumber +
                ", bdate=" + bdate +
                ", Artstatus=" + Artstatus +
                '}';
    }
}
