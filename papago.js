var Red = color(255, 0, 0);
var Green = color(0, 255, 0);
var Blue = color(0, 0, 255);
var White = color(255, 255, 255);
var Black = color(0, 0, 0);

var papago_show = 255;

var papago_body = color(0, 161, 255, papago_show);
var papago_body_shadow = color(0, 134, 255, papago_show);
var papago_up_beak = color(30, 218, 105, papago_show);
var papago_beak = color(255, 197, 0, papago_show);
var papago_eye = color(80, 80, 95, papago_show);

var papago_background1 = color(39, 210, 108);
var papago_background2 = color(1, 173, 255);
var papago_background3 = color(0, 136, 254);


//*************************Papago background*******************************
var papago_background = function() {
    background(White);
    noStroke();
    fill(papago_background3);
    rect(0, 320, 400, 80);
    
    fill(papago_background2);
    rect(0, 240, 400, 80);
    
    fill(papago_background1);
    rect(0, 160, 400, 80);
};
//***********************Papago background End*****************************



var XPOS = 200;
var YPOS = 120;
var xPos = 200;
var yPos = 120;

var charSize = 100;
var _SIZE = 100;

var papago_eye_h_size = 15;
var papago_beak_degree = 0;
var papago_feather_degree = 129;

var papago = function() {
//*************************Papago Body*******************************
    //papago head
    noStroke();
    fill(papago_body);
    arc(xPos, yPos, 100/_SIZE*charSize, 100/_SIZE*charSize, 70, 360);
    
    //papago upper back
    fill(papago_body);
    rect(xPos - 50/_SIZE*charSize, yPos - 5/_SIZE*charSize, 50/_SIZE*charSize, 90/_SIZE*charSize);
    
    //papago belly
    fill(papago_body);
    var x1 = xPos + 27/_SIZE*charSize;
    var y1 = yPos + 18/_SIZE*charSize;
    var cx1 = xPos + 34/_SIZE*charSize;
    var cy1 = yPos + 89/_SIZE*charSize;
    var cx2 = xPos - 7/_SIZE*charSize;
    var cy2 = yPos + 116/_SIZE*charSize;
    var x2 = xPos -50/_SIZE*charSize;
    var y2 = yPos + 115/_SIZE*charSize;
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
    
    
    //papago lower back
    fill(papago_body);
    triangle(xPos + 27/_SIZE*charSize, yPos + 21/_SIZE*charSize, xPos - 50/_SIZE*charSize, yPos + 115/_SIZE*charSize, xPos - 50/_SIZE*charSize, yPos);
    
    
    //papago head feather
    fill(papago_body);
    arc(xPos - 30/_SIZE*charSize, yPos - 50/_SIZE*charSize, 50/_SIZE*charSize, 35/_SIZE*charSize, 0, 190);
    
    
    //papago body shadow
    fill(papago_body_shadow);
    arc(xPos - 50/_SIZE*charSize, yPos + 64/_SIZE*charSize, 81/_SIZE*charSize, 102/_SIZE*charSize, -20, 90);
    
    
    //papago feather
    fill(papago_body);
    arc(xPos - 55/_SIZE*charSize, yPos + 50/_SIZE*charSize, 89/_SIZE*charSize, 96/_SIZE*charSize, -61, papago_feather_degree);
    
    //***********************Papago Body End*****************************
    
    //*************************Papago Head*******************************
    
    //papago head white part
    fill(White);
    ellipse(xPos, yPos, 65/_SIZE*charSize, 65/_SIZE*charSize);
    
    fill(White);
    arc(xPos, yPos, 105/_SIZE*charSize, 105/_SIZE*charSize, -90, 0);
    
    //papago green beak
    fill(papago_up_beak);
    arc(xPos, yPos, 100/_SIZE*charSize, 100/_SIZE*charSize, -90, papago_beak_degree);
    
    //papago yellow beak
    fill(papago_beak);
    arc(xPos, yPos, 65/_SIZE*charSize, 65/_SIZE*charSize, 35, 90);
    
    //papago eye
    fill(papago_eye);
    ellipse(xPos - 15/_SIZE*charSize, yPos - 5/_SIZE*charSize, 15/_SIZE*charSize, papago_eye_h_size/_SIZE*charSize);

//***********************Papago Head End*****************************
};


//*************************Papago Text*******************************
var papago_text = function(){
    fill(Black);
    
    textSize(40);
    text("PAPAGO", 125, 388);
    stroke(0, 255, 234);
    strokeWeight(3);
    line(100, 350, 300, 350);
    line(100, 395, 300, 395);
};
//***********************Papago Text End*****************************



var ACT = 1;
var INACT = 0;

var counter = INACT;

var featCounter = INACT;
var feat_state_flag = ACT;
var feat_flag = INACT;
papago_feather_degree = 100;

var eye_flag = ACT;

var papago_flag = ACT;
xPos = -30;
yPos = -30;
charSize = 20;

draw = function() {
    papago_background();    //draw green-skyblue-blue background
    
    //******************Papago feather action***********************
    {
    if(feat_state_flag === ACT) {
        if(papago_feather_degree <= 101) {
            feat_flag = 1;
        }
        if(papago_feather_degree >= 140) {
            feat_flag = 2;
        }
        if(xPos >= XPOS && yPos >= YPOS) {
            feat_flag = 3;
        }
    }
    if(feat_flag === 1) {
        papago_feather_degree += 3;
    }
    if(feat_flag === 2) {
        papago_feather_degree -= 3;
    }
    if(feat_flag === 3) {
        papago_feather_degree = 129;
    }
    //***************Papago feather action End*********************
    }
    
    
    //*************moving action***************
    {
    if(papago_flag === ACT) {
        if(charSize <= 100) {
            charSize += 0.6;
        }
        if(xPos <= 100) {
            xPos += 1.5;
            yPos += 0.5;
        }
        if(xPos >= 100 && yPos < YPOS) {
            yPos += 1.5;
            xPos += 1;
        }
        else {
            if(xPos < XPOS) {
                xPos += 1.5;
            }
        }
    }
    //**********moving action end*************
    }
    

    //**************eye moving******************
    {
    if(counter++ >= 100) {
        eye_flag = ACT;
        counter = 0;
    }
    if(eye_flag === ACT) {
        if(papago_eye_h_size > 2) {
            papago_eye_h_size--;
        }
        if(papago_eye_h_size === 2) {
            eye_flag = INACT;
        }
    }
    if(eye_flag === INACT) {
        if(papago_eye_h_size < 16) {
            papago_eye_h_size++;
        }
    }
    //**************eye moving end******************
    }
    
    papago();           //draw papago following by code
    papago_text();      // draw text
    
};




//*****************************NOT USE CODE***********************************
/*
stroke(Red);
strokeWeight(5);
point(xPos, yPos);
*/
/*
point(x1, y1);
point(cx1, cy1);
point(cx2, cy2);
point(x2, y2);
*/
//*************************Papago Body*******************************
//***********************Papago Body End*****************************

//*********init beak moving***********
/*
    if(beak_flag === ACT && xPos >= XPOS && yPos >= YPOS)
    {
        if(papago_beak_degree === 0) {
            papago_beak_degree = -90;
        }
        papago_beak_degree = papago_beak_degree + 3;
        if(papago_beak_degree >= 0) {
            beak_flag = 0;
        }
    }
*/
//*********init beak moving end***********

