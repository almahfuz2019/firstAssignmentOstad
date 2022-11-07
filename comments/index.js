import {comments} from "./comments.js";
comments.map((oneComment)=>{
    let Details=`Id:${oneComment.id}- My email address is ${oneComment.email}`
    console.log(Details)
    // console.log(item.code);
})
