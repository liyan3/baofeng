//ajax获取轮播图片
//<div class="item">
//<img src="img/carousel/3.jpeg">
//</div>

$.ajax({
    url:'data/index_add.php',
    type:'get',
    success:function(data){
        var html = "";
        for(var i = 0;i<data.length;i++){
            var obj = data[i];
            html +="<div class='item'>" +"<img src='img/carousel/"+obj.curl+"'>"+ "</div>"}
        //console.log(html);
        //console.log(111)
        $('#carousel_img').html(html);
        $('#carousel_img>div:first-child').addClass('active')
    }
})

//ajax获取轮播图片下面的小图片
//<div>
//<a href="#">
//<img src="img/carousel/a.png"/>
//<span>风迷福利</span>
//</a>
//</div>
$.ajax({
    url:'data/index_c_b.php',
    type:'GET',
    success:function(data){
        var html = "";
        for(var i = 0;i<data.length;i++){
            var obj = data[i];
            html +="<div><a href='"+obj.chref+"'><img src='img/carousel/"+obj.cburl+"'/> <span>"+obj.cspan+"</span> </a> </div>"

            //console.log(html)
        }
        $('#c_bottom>div').html(html)
    }

})
//产品信息表
//<div>
//<div></div>
//<img src="img/product/1.jpeg"/>
//<a href="#">
//<span>暴风魔镜Matrix一体机</span>
//<p>￥2499</p>
//<button class="none">查看详情</button>
//</a>
//</div>
$.ajax({
    url:'data/product.php',
    type:'GET',
    success:function(data){
        //console.log(data)
        var html = "";
        for(var i = 0;i<data.length;i++){
            var obj = data[i];
            html +="<div><div></div> <img src='img/product/"+obj.pburl+"'/><a href='"+obj.phref+"'> <span>"+obj.pname+"</span> <p>"+obj.price+"</p><button class='none'>查看详情</button> </a> </div>"

        }
        //console.log(html)
        $('#product div:nth-child(2)').html(html)
    }
});
//海量内容的
//<div>
//<a href="#">
//<div>
//<p>VR社交平台</p>
//<span>VR社交 改变未来</span>
//</div>
//<img src="img/content/5.jpeg" />
//<p>极乐王国</p>
//</a></div>

$.ajax({
    url:'data/content.php',
    type:'GET',
    success:function(data){
        //console.log(data)
        var html = "";
        for(var i = 0;i<data.length;i++){
            var obj = data[i];
html +="<div><a href='"+obj.conhref+"'> <div> <p>"+obj.conp+"</p> <span>"+obj.conspan+"</span> </div> <img src='img/content/"+obj.consrc+"' /><p>"+obj.conpl+"</p> </a> </div>"
        }
       // console.log(html)
       $('#content div:nth-child(2)').html(html)
    }
});
window.onload = function(){
    var my = $('#my_a');
    console.log(my.attr('href'));
    var a = (location.search.slice(1));
    if(a!==""){
        a = unescape(a.replace(/\\u/g,"%u"));
        a = JSON.parse(a);
        console.log(a);
        $('#my_a').on('mouseover', function () {
            console.log(111);
            $('#my').removeClass('none');
        });
        $('#my_a').on('mouseout', function () {
            console.log(22);
            $('#my').addClass('none');
        });
        $('#my>li:last-child').on('click', function () {
            location.search="";
            console.log( 33);
            setTimeout(function () {

            },2500)

        });
        window.onload = function () {
            location=location
        }
    }else{
        $('#my_a').on('mouseover', function () {
            $('#my_a a').removeClass('none');
        });
    }
};





