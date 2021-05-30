
rgb_btn = document.querySelector("#swicth"); 
a__range = document.querySelector("#bgcolor_a");

console.log(a__range.value)

var r = 255;
var g = 0;
var b = 0;
var a = 0.55;
const value = 5;

var rgb_bool = false

function rgbChange(){
    if (rgb_bool == true){
        console.log(`${r},${g},${b}`);
        document.body.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
        
        if (r == 255 && g < 255 && b == 0){
            g += value;
        }
        if (r > 0 && g == 255 && b == 0){
            r -= value;
        }
        if (r == 0 && g == 255 && b < 255){
            b += value;
        }
        if (r == 0 && g > 0 && b == 255){
            g -= value;
        }
        if (r < 255 && g == 0 && b == 255){
            r += value;
        }
        if (r == 255 && g == 0 && b > 0){
            b -= value;
        }
        setTimeout(function(){
            rgbChange();
        },50);
    }
}

function rgb_swicth(){
    rgb_bool = !rgb_bool;
    rgbChange();
    if (rgb_bool == true){
        rgb_btn.value = "종료";
    }else{
        rgb_btn.value = "실행";
    }
}

function a_range(){
    console.log(a__range.value/100);
    a = a__range.value/100
}
