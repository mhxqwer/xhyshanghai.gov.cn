$(function(){
    var htmlString="";
    var list=[];
    var newlist=[];
    var zwlist=[];
    var $ul=$("#qc");
    $ul.find("li").each(function(index,item){
    var json={};
    var url=$(this).find("a").attr("href");
    var data=$(this).html();
    json.url=url;
    json.data=data;
    list.push(json);
  })

  $.each(list,function(i,n){
     if(newlist.length>0){
         var exist=0;
      $.each(newlist,function(index,item){
        if(n.url==item.url){
          exist=1;
        }
      })
      if(exist==0){
        newlist.push(n);
      }
     }else{
       newlist.push(n);
     }

  })

  $.each(newlist,function(i,n){
    var newtitle=$(n.data).attr("title");
    if(zwlist.length>0){
        var exist=0;
     $.each(zwlist,function(index,item){
       var zwtitle=$(item.data).attr("title");
       if(newtitle==zwtitle){
         exist=1;
       }
     })
     if(exist==0){
      zwlist.push(n);
     }
    }else{
      zwlist.push(n);
    }

 })

  $.each(zwlist,function(i,n){
    htmlString=htmlString+"<li>"+n.data+"</li>";

  })
  $ul.html(htmlString);

})