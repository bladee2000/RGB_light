
rgb_btn = document.querySelector("#swicth"); 
a__range = document.querySelector("#bgcolor_a");
speed__range = document.querySelector("#rgb_speed");
background = document.querySelector(".bg")
console.log(a__range.value)

var r = 255;
var g = 0;
var b = 0;
var a = 0.55;
const value = 1;
var speed = 10.5584541;
var setting_bool = false;

var rgb_bool = false

function rgbChange(){
    if (rgb_bool == true){
        //console.log(`${r},${g},${b}`);
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
        },speed);
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
    a = a__range.value/100;
    if (rgb_bool==false){
        document.body.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
    }
    console.log(a__range.value/100);
    
}

function speed_range(){
    speed = 24 - speed__range.value;
    console.log(speed);
}

function setting_addClass(){
    if (setting_bool == false){
        document.querySelector(".setting").className += " open";
        setting_bool = !setting_bool;
    }else{
        document.querySelector(".setting").className = "setting";
        setting_bool = !setting_bool
    }
    
}