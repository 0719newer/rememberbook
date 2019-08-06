package com.newer.rememberbook.mapper;


import com.newer.rememberbook.domain.Books;
import com.newer.rememberbook.domain.Print;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface BookMapper {
//    根据pid查询拾柒书信息
    @Select("select * from sq_print where pid = #{pid}")
    public Print queryBookById(@Param("pid") int pid);
    
    @Select("select * from sq_print")
    public List<Print> queryBookAll();

    /*添加到书籍*/
    @Insert("insert into sq_book values(null,#{uid},#{bname},#{bookurl},#{bprice},#{bsize},#{bway},#{bnumber},new(),1,null)")
    public int addBook(Books book);
}
