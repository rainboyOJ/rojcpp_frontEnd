/* 分页算法 */

interface pagenation_type {
    link:string,
    name:string,
    disabled?:boolean
}
/** 
 * total : 总共页数
 * nowPage : 当前的页数
 * len : 要显示的长度(不包括 第一页 最后一个页面)
 *
 * */
function page(total:number,nowPage:number,len:number,
    baseUrl:string = "",
    start_page:number = 1,
    end_page:number = total
) : pagenation_type []{
    let pages : pagenation_type[] = []

    let half_len = Math.floor( len / 2);
    half_len = half_len <= 0 ? 1 : half_len; //至少是1
    console.log(half_len)

    let need_right_step :number = 0;
    let need_left_step : number =  half_len;

    //到左边的长度
    let left_point :number;
    let right_point :number;

    //超过了 start_page
    if( nowPage - need_left_step <  start_page) { 
        left_point  = start_page;
        need_right_step = half_len + half_len - (nowPage - start_page);
    }
    else {
        left_point = nowPage-need_left_step;
        need_right_step = half_len;
    }

    //向右边走
    if( nowPage + need_right_step > end_page) {
        right_point = end_page;
        need_left_step = half_len - (left_point - nowPage);
    }
    else {
        right_point = nowPage + need_right_step;
        need_left_step = 0;
    }
    //再向左走一下
    if( left_point - need_left_step <  start_page) { 
        left_point  = start_page;
        //need_right_step = half_len + half_len - (nowPage - start_page);
    }
    else {
        left_point = left_point-need_left_step;
        //need_right_step = half_len;
    }

    // 加入起点
    pages.push({link:`${baseUrl}/${start_page}`,name:`${start_page}`})

    if(left_point-start_page > 1){
        pages.push({link:"",name:"",disabled:true})
    }

    if(left_point == start_page) left_point++;
    if(right_point == end_page) right_point++;

    for(let i = left_point ; i <= right_point ;i++){
        pages.push({link:`${baseUrl}/${i}`,name:`${i}`})
    }

    if(end_page-right_point > 1){
        pages.push({link:"",name:"",disabled:true})
    }
    // 加入终点
    pages.push({link:`${baseUrl}/${end_page}`,name:`${end_page}`})

    return pages
}

export {
    page
}
