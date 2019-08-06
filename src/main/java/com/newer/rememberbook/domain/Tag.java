package com.newer.rememberbook.domain;

public class Tag {
   private int tagid;
   private String Tagname;

    public Tag(int tagid, String tagname) {
        this.tagid = tagid;
        Tagname = tagname;
    }

    public Tag() {
    }

    public int getTagid() {
        return tagid;
    }

    public void setTagid(int tagid) {
        this.tagid = tagid;
    }

    public String getTagname() {
        return Tagname;
    }

    public void setTagname(String tagname) {
        Tagname = tagname;
    }

    @Override
    public String toString() {
        return "tag{" +
                "tagid=" + tagid +
                ", Tagname='" + Tagname + '\'' +
                '}';
    }
}
