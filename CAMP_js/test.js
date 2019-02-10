// alert(11111);


// console.log("初めてのジャバスクリプト");


// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");


// var  name ="小林郁瑠";
// console.log("自分の名前を表示");
// console.log(name);

// var point =90;
// if(point >= 80){
//     console.log("素晴らしい！おめでとう！");
// }else{
//     console.log("もっと頑張りましょう！");
// }


// var no =Math.floor(Math.random()*5);
// if(no == 0){
//     console.log("0です！");
// }else if(no == 1){
//     console.log("1です！");
// }
// else if(no == 2){
//     console.log("2です！");
// }
// else  if(no == 3){
//     console.log("3です！");
// }
// else if(no ==4 ){
//     console.log("4です！");
// }



// var items = ['リンゴ', 'イチゴ', 'メロン', 'バナナ'];
 
// //最大値は配列の「要素数」にする
// var random = Math.floor( Math.random() * items.length );
 
// console.log( items[random] );




// $(document).ready(function(){

//     $('#test').html('あああ');
//     $('#test').css('color','yellow');
//     //文字消えてる状態 $('#test').css('display','none');   
// });

// $('#test').on('click',function(){
//     // $('#test').html('HTMLや文字列');
//     // $('#test').css('color','blue');
//     $('#test').fadeOut(500); 
//     $('#test').fadeIn(500); 
    

//     //フェードインの時は要素が元々消えていないといけない
// });


$(document).ready(function(){ 
    var count = 0;

$('#show').on('click',function(){
  count++; //count = count +1;と同じ
  console.log(count);
  
$('#test').html(count);
//$('#test').css('border','50px solid pink',); 
$('#test').css('border', +count+'px solid pink',); 

});

});



// $('#show').on('click',function(){
//     $('#ex').fadeIn(2000);  
// });

// $('#hide').on('click',function(){
//     $('#ex').fadeOut(2000);  
// });







