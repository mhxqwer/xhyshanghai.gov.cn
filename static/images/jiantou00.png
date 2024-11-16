<html>
<head>
<meta http-equiv="Content-Type" content="text/html;"/>
<title>您访问的页面不存在</title>
<script type="text/javascript"> 
function countDown(secs,surl){ 
 //alert(surl); 
 var jumpTo = document.getElementById('jumpTo');
 jumpTo.innerHTML=secs; 
 if(--secs>0){ 
  setTimeout("countDown("+secs+",'"+surl+"')",1000); 
 }
 else
 {  
  location.href=surl; 
 } 
} 
</script>
<style>
    .error{
        text-align: center;
        color: #333;
    }
    .error-img img{
        width: 400px;
    }
    .logo{
        margin: 20px 0 50px;
    }
    .logo img{
        width: 200px;
    }
</style>
</head>
<body>
<div class="error">
    <div class="error-img"><img src="https://www.shanghai.gov.cn/zt/img/404.png" alt=""></div>
    <div class="logo"><img src="https://www.shanghai.gov.cn/zt/img/logo-big.png" alt=""></div>
    <div>您访问的页面不存在，<span id="jumpTo">5</span>秒后自动跳转到首页</div>
</div>
<script type="text/javascript">
countDown(5,'https://www.shanghai.gov.cn/');
</script> 
</body>
</html>