import React from "react";
import {useParams} from "react-router-dom";
import Coding_Data from "../Coding_Data";
import "./Coding_Blog_Controller.css";
const Coding_Blog_Controller=()=>{
        let id=useParams(); let blog_content_temp,blog_title_temp,blog_image_temp;
        console.log(id);
        for(let i=0;i<Coding_Data.length;i++)
        {
            if(Coding_Data[i].blog_name===id.id)
            {
                blog_content_temp=Coding_Data[i].blog_content;
                blog_title_temp=Coding_Data[i].blog_name;
                blog_image_temp=Coding_Data[i].blog_image
                break;
            }
        }
        return(
            <>
            <div className="Blog">
            <h2>{blog_title_temp}</h2>
            <br/>
            <br/> 
            <img src={blog_image_temp}></img>
            <p dangerouslySetInnerHTML={{ __html: `${blog_content_temp}` }} />
            </div>
            </>
        )
}
export default Coding_Blog_Controller;