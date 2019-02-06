var shoplist={};

shoplist.name="MyBuylist 购物清单";
shoplist.time="2019/1/6";
shoplist.list=[
  {name:"吹风机",price:300},
  {name:"麦克风",price:9000},
  {name:"笔记本电脑",price:54300},
  {name:"iphone9",price:32000},
  {name:"神奇海螺",price:54300},
];

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-del-id={{delid}} class='del_btn'>X</div></li>";

var total_html="<li class='buy_item total'>总价<div class='price'>{{price}}</div></li>";
function showlist(){
  $("#items_list").html("");
  var total_price=0;
  for(var i=0;i<shoplist.list.length;i++){
    var item= shoplist.list[i];
    var item_id="buyitem_"+i;
    var del_item_id="del_buyitem_"+i;
    total_price+=parseInt(item.price);
    var current_item_html=
    item_html.replace("{{num}}",i+1)
             .replace("{{item}}",item.name)
             .replace("{{id}}",item_id)
             .replace("{{del_id}}",del_item_id)
             .replace("{{price}}",item.price)
             .replace("{{delid}}",i)
             ;

    $("#items_list").append(current_item_html);
    $("#"+del_item_id).click(
      function() {
      remove_item($(this).attr("data-del-id"));
    });
  }
  var current_total_html=
      total_html.replace("{{price}}",total_price);
  $("#items_list").append(current_total_html);
}
showlist();


$(".addbtn").click(
  function(){
    shoplist.list.push(
      {
        name:$("#input_name").val(),
         price:$("#input_price").val()
        }
      );
      $("#input_name").val("");
      $("#input_price").val("");
      showlist();
    }
);

  function remove_item(id){
    shoplist.list.splice(id,1);
    showlist();

  }
