/*
@ Bucheon university Software Engineering 2019 Class Team - 1
@ Team member :
    o Charming Kyu
    o William - 1933033 Kim HeeChan / chandaley12@gmail.com
    o J
    o Stark
*/


// ########################################################
// ################### Define Functions ###################
// ########################################################
var Jsa_Background = function(cloud1, cloud2, cloud3)
{
    background(87, 202, 255);
    noStroke();
    var cnt = 0;
    
    var cloud = function(xPos, yPos, charSize)
    {
        var _xPos = 75+xPos;
        var _yPos = 70+yPos;
        var _charSize = 70;
        fill(168, 229, 240);
        ellipse(_xPos-35*charSize/_charSize, _yPos+3*charSize/_charSize, 27*charSize/_charSize, 27*charSize/_charSize);
        ellipse(_xPos-15*charSize/_charSize, _yPos-7*charSize/_charSize, 27*charSize/_charSize, 27*charSize/_charSize);
        ellipse(_xPos+8*charSize/_charSize, _yPos-17*charSize/_charSize, 35*charSize/_charSize, 35*charSize/_charSize);
        ellipse(_xPos+31*charSize/_charSize, _yPos-0.5*charSize/_charSize, 35*charSize/_charSize, 34*charSize/_charSize);
        rect(_xPos-33*charSize/_charSize, _yPos-6*charSize/_charSize, 66*charSize/_charSize, 22.7*charSize/_charSize);
    };
    //var cloud_xPos = [40, 430, 265];
    /*cloud(40 + cloudMove * 0.1, 35, 100);
    cloud(420 + cloudMove * 0.5, 5, 70);
    cloud(265 + cloudMove * 0.6, 75, 50);*/
    
    cloud(cloud1, 35, 100);
    cloud(cloud2, 5, 70);
    cloud(cloud3, 75, 50);
    
    
    
    stroke(0, 144, 80);
    fill(0, 144, 80);
    bezier(-58, 207, 41, 192, 146, 202, 287, 271);
    bezier(664, 181, 496, 185, 351, 199, 287, 271);
    triangle(-16, 214, 292, 270, -19, 266);
    triangle(598, 197, 292, 270, 606, 266);
    quad(-12, 267, -16, 402, 597, 402, 606, 266);
    
    //roof gray
    stroke(98, 99, 101);
    fill(98, 99, 101);
    quad(194, 237, 181, 198, 409, 198, 391,237); //point1,4
    
    
    //roof white 
    stroke(255, 255, 255);
    fill(255, 255, 255);
    quad(181, 184, 181, 198, 409, 198, 409,184);
    quad(261, 208, 261, 198, 326, 190, 326,208);
    
    //window gray
    stroke(78,79,81);
    fill(78,79,81);
    quad(194, 245, 194, 208, 394, 208, 394, 245); //point1,4
    
    stroke(103,132,144);
    fill(103,132,144);
    quad(196, 255, 196, 212, 391, 212, 391,255);
    
    // 3rd floor windows
    var Window_3rd = function(xPos)
    {
        stroke(145,158,167);
        fill(145,158,167);
        quad(197+xPos, 244, 206+xPos, 212, 217+xPos, 212, 208+xPos, 244);
        
        stroke(103,132,144);
        fill(103,132,144);
        strokeWeight(1);
        line(212+xPos, 211, 203+xPos, 245);
    };
    cnt = 0;
    while(cnt <= 8)
    {
        Window_3rd(cnt * 21.9);
        cnt++;
    }
    Window_3rd(0);
    
    
    //window black line
    stroke(56,56,57);
    fill(200, 200, 240);
    strokeWeight(1);
    line(64+130, 222, 263+130, 222);
    line(87+130, 211, 87+130, 238+7);
    line(110+130, 211, 110+130, 238+7);
    line(132+130, 211, 132+130, 238+7);
    line(154+130, 211, 154+130, 238+7);
    line(175+130, 211, 175+130, 238+7);
    line(158+130, 211, 158+130, 238+7);
    line(171+130, 211, 171+130, 238+7);
    line(165+130, 223, 165+130, 238+7);
    line(197+130, 237+8, 197+130, 212);
    line(220+130, 237+8, 220+130, 212);
    line(242+130, 237+8, 242+130, 212);
    
    
    //2nd gray
    stroke(98,99,101);
    fill(98,99,101);
    triangle(-64+130, 267, -46+132, 267, -46+133, 285);
    triangle(388+130, 267, 347+130, 267, 366+130, 285);
    triangle(-53+130, 334, -46+132, 345, -46+133, 326);
    triangle(388+125, 333, 347+130, 359, 366+130, 333);
    
    // block 2nd
    stroke(195,196,197);
    fill(195,196,197);
    quad(-64+130, 267, -64+130, 261, 388+130, 261, 388+130, 267);
    
    //white 3st
    stroke(255,255,255);
    fill(255,255,255);
    quad(-68+130, 246, -68+130, 261, 392+130, 261, 392+130, 246);
    strokeWeight(2);
    line(-68+130, 240 , 392+130, 240);
    strokeWeight(2.5);
    
    cnt = -68;
    while(cnt <= 392)
    {
        line(130+cnt, 241 , 130+cnt, 259);
        cnt +=10;
    }
    
    //1st, 2nd gray
    noStroke();
    fill(159,160,162);
    quad(-45+130, 267, -45+130, 383, 367+130, 383, 367+130, 267);
    
    strokeWeight(1);
    fill(135,135,135);
    stroke(135,135,135);
    cnt = 0;
    while( cnt <= 13)
    {
        line(97+(cnt*30), 267, 97+(cnt*30), 383);
        cnt++;
    }
    
    
    //start here
    //big window
    var Window_2nd = function(xPos, yPos, centerWindow)
    {
        stroke(56,56,57);
        fill(103,132,144);
        strokeWeight(1.2);
        quad(-26+130+xPos, 273+yPos, -26+130+xPos, 316+yPos, -9+130+xPos, 316+yPos, -9+130+xPos,273+yPos);
        
        stroke(135,158,167);
        fill(135,158,167);
        strokeWeight(1);
        quad(-18+130+xPos, 275+yPos, -25+130+xPos, 314+yPos, -17+130+xPos, 314+yPos, -10+130+xPos, 275+yPos);
        
        stroke(103,132,144);
        fill(103,132,144);
        strokeWeight(1);
        line(-13+130+xPos,275+yPos,-22+130+xPos,315+yPos);
        
        stroke(56,56,57);
        line(-10+130+xPos,286+yPos,-26+130+xPos,286+yPos);
        if(centerWindow === true)
        {
            stroke(56,56,57);
            line(-17+130+xPos,314+yPos,-17+130+xPos,286+yPos);
        }
    };
    
    
    //small window
    var Window_1st = function(xPos)
    {
        stroke(56,56,57);
        fill(103,132,144);
        strokeWeight(1.2);
        quad(-26+130+xPos, 339, -26+130+xPos, 365, -9+130+xPos, 365, -9+130+xPos,339);
        
        stroke(135,158,167);
        fill(135,158,167);
        strokeWeight(1);
        quad(-18+130+xPos, 340, -24+130+xPos, 364, -15+130+xPos, 364, -10+130+xPos,340);
        
        stroke(103,132,144);
        fill(103,132,144);
        strokeWeight(1);
        line(-13+130+xPos,340,-21+130+xPos,366);
    };
    
    
    
    // fist floor window drawing
    cnt = 0;
    while(cnt <= 12)
    {
        Window_1st(cnt * 30);
        cnt ++;
    }
    
    // second floor window drawing
    cnt = 0;
    var centerWindow = false;
    while(cnt <= 12)
    {
        if(cnt === 5 || cnt === 6 || cnt === 7)
        {
            centerWindow = true;
            Window_2nd(cnt * 30, 66, centerWindow);
        }
        
        if(cnt === 4 || cnt === 6 || cnt === 8) {centerWindow=true;}
        else {centerWindow=false;}
        Window_2nd(cnt * 30, 0, centerWindow);
        cnt++;
    }
    
    
    
    //white 2nd
    stroke(255,255,255);
    fill(255,255,255);
    quad(-68+10+130, 315, -68+10+130, 275+55, 392-10+130, 275+55, 392-10+130, 260+55);
    strokeWeight(2);
    line(-58+130, 240+69 , 381+130, 240+69);
    strokeWeight(2.5);
    
    cnt = -58;
    while(cnt <= 382)
    {
        line(130+cnt, 240+70 , 130+cnt, 260+68);
        cnt += 10;
    }
    
    
    //2nd black
    stroke(24,24,24);
    fill(24,24,24);
    rect(145+130, 263, 35, 12);
    stroke(255, 255, 255);
    fill(255, 255, 255);
    rect(76, 384, 439, 46); 
    stroke(172,174,176);
    fill(172,174,176);
    rect(76, 397, 439, 0); 
    rect(76, 402, 439, 0); 
    rect(76, 407, 439, 0); 
    rect(76, 412, 439, 0); 
    rect(76, 417, 439, 0); 
    rect(76, 422, 439, 0); 
    rect(76, 427, 439, 0); 
    rect(76, 432, 439, 1); 
    stroke(159,160,162);
    fill(159,160,162);
    rect(76, 432, 439, 17);
    stroke(195,196,197);
    fill(195,196,197);
    rect(76, 450, 439, 4);
    //pollen
    stroke(0,136,63);
    fill(0,136,63);
        ellipse(293,405,19,19);
    stroke(195,196,197);
    fill(195,196,197);
    rect(285.5, 413, 15, 17);
    
    stroke(0,136,63);
    fill(0,136,63);
    ellipse(379,383,19,19);
    stroke(195,196,197);
    fill(195,196,197);
    rect(371.1, 391, 15, 17);
    
    stroke(0,136,63);
    fill(0,136,63);
    ellipse(201,383,19,19);
    stroke(195,196,197);
    fill(195,196,197);
    rect(193, 391, 15, 17);
    
    //fruits
    stroke(104,195,229);
    fill(104,195,229);
    point(288,401);
    point(296,399);    
    point(294,407);
    point(375,379);
    point(385,383);
    point(375,386);
    point(197,386);
    point(205,382);
    point(197,379);
    stroke(217,108,165);
    fill(217,108,165);
    point(204,387);
    point(202,378);
    point(382,378);
    point(381,387);
    point(298,404);
    point(289,405);
    stroke(195,196,197);
    fill(195,196,197);    
    quad(-58+129+6, 269+64, -59+130+6, 267+64, 388+130-6, 265+66, 388+130-6, 269+64);

    //road1
    stroke(98,99,101);
    fill(98,99,101);
    quad(198, 454, 395, 454, 395, 511, 198, 511);

    //right tree
    noStroke();
    fill(77, 148, 59);
    ellipse(492,328,23,23);
    fill(94, 173, 48);
    ellipse(495,327,17,17);
    
    fill(77, 148, 59);
    ellipse(486,340,30,30);
    fill(94, 173, 48);
    ellipse(488,342,25,25);
    
    fill(77, 148, 59);
    ellipse(502,341,20,20);
    fill(94, 173, 48);
    ellipse(504,342,16,16);
    
    fill(94, 74, 15);
    quad(486,348,490,348,490,500,487,500);
    quad(504,344,506,344,500,360,494,360);
    
    //left tree
    var left = -392;
    noStroke();
    fill(77, 148, 59);
    ellipse(492+left,328,23,23);
    fill(94, 173, 48);
    ellipse(495+left,327,17,17);
    
    fill(77, 148, 59);
    ellipse(486+left,340,30,30);
    fill(94, 173, 48);
    ellipse(488+left,342,25,25);
    
    fill(77, 148, 59);
    ellipse(502+left,341,20,20);
    fill(94, 173, 48);
    ellipse(504+left,342,16,16);
    
    fill(77, 148, 59);
    ellipse(521+left,364,20,20);
    fill(94, 173, 48);
    ellipse(522+left,365,16,16);
    
    fill(94, 74, 15);
    quad(486+left,348,490+left,348,490+left,500,487+left,500);
    quad(504+left,344,506+left,344,497+left,360,494+left,360);
    
    //tree left_2
    fill(77, 148, 59);
    bezier(-56,368,-56,436,83,260,5,420);
    bezier(18,406,58,455,83,256,-30,414);
    fill(94, 173, 48);
    bezier(5,409,84,238,-301,499,-21,363);
    bezier(87,480,24,212,-73,485,62,490);
    
    //right tree2
    ellipse(595,381,20,20);
    
    
    
    
    
    //right blue house
    stroke(0,120,161);
    fill(0,120,161);
    //line(507, 348, 84, 348);//423
    var house_x = 423;
    quad(81+house_x, 361, -33+house_x, 399, 207+house_x, 412, 207+house_x, 401);
    quad(-35+house_x, 430, -35+house_x, 394, 207+house_x, 410, 207+house_x, 428);
    stroke(0,140,191);
    fill(0,140,191);
    quad(83+house_x, 392, -35+house_x, 418, -35+house_x, 512, 83+house_x, 512);
    quad(83+house_x, 392, 207+house_x, 421, 207+house_x, 512, 83+house_x, 512);
    //house line
    stroke(24,132,175);
    fill(21,128,163);    
    strokeWeight(0.5);
    cnt = 1;
    var blueLine_x = 6+house_x;
    var blueLine_y = 375;    
    while(cnt <= 29)
    {
        line(blueLine_x, blueLine_y, blueLine_x, 511);
        cnt++;
        blueLine_x += 7;
        if (cnt <= 15) 
            {
                blueLine_y += -1;
            }
        else {blueLine_y += 3;}
    }
    line(422, 381, 422, 511);
    line(422-7, 381, 422-7, 511);
    line(422-14, 388, 422-14, 511);
    line(422-21, 390, 422-21, 511);
    line(422-28, 392, 422-28, 511);
    stroke(0,115,144);
    fill(0,115,144);   
    quad(-36+house_x, 401, -59+house_x, 401, -59+house_x, 456, -36+house_x, 512);
    
    stroke(0,146,192);
    fill(0,146,192);
    strokeWeight(1);
    quad(81+house_x, 352, 81+house_x, 360, -72+house_x, 412, -72+house_x, 401);
    quad(81+house_x, 352, 81+house_x, 360, 237+house_x, 410, 237+house_x, 402);
    
    
    fill(0,146,192);    
    quad(81, 352, 81, 360, 3, 387, -39, 392);
    quad(81, 352, 81, 360, 237, 410, 237, 402);
    
    //
    stroke(8, 122, 150);
    fill(10, 132, 173,200);
    quad(390,425,428,425,428,510,390,510);
    quad(429,425,467,425,467,510,429,510);
    quad(495,425,540,425,540,510,495,510);
    quad(560,425,598,425,598,510,560,510);
    //
    fill(133, 119, 56);
    ellipse(436,470,5,5);
    ellipse(502,470,5,5);

    
    fill(23, 22, 23);
    quad(400,487,418,487,418,490,400,490);
    quad(400,491,418,491,418,494,400,494);
    quad(400,495,418,495,418,498,400,498);
    quad(400,499,418,499,418,502,400,502);
    
    
    quad(440,487,457,487,457,490,440,490);
    quad(440,491,457,491,457,494,440,494);
    quad(440,495,457,495,457,498,440,498);
    quad(440,499,457,499,457,502,440,502);
    
    quad(573,487,590,487,590,490,573,490);
    quad(573,491,590,491,590,494,573,494);
    quad(573,495,590,495,590,498,573,498);
    quad(573,499,590,499,590,502,573,502);
    //
    fill(0,120,161);
    quad(387,400,387,512,358,454,358,410);
    //
    fill(143, 198, 217);
  

      //house window
    fill(23, 22, 23);
    quad(510,440,525,440,525,460,510,460);
    
    //left blue house
    stroke(0,120,161);
    fill(0,120,161);      
    quad(81, 361, -33, 399, 207, 412, 207, 401);
    quad(-60, 415, -33, 399, 207, 412, 207, 421);
    stroke(0,140,191);
    fill(0,140,191);
    quad(83, 392, -7, 412, -7, 512, 83, 512);
    quad(83, 392, 207, 421, 207, 512, 83, 512);
    //house line
    stroke(24,132,175);
    fill(21,128,163);    
    
    cnt = 1;
    var blueLine_x = 6;
    var blueLine_y = 375;
    strokeWeight(0.5);
    while(cnt <= 29)
    {
        line(blueLine_x, blueLine_y, blueLine_x, 511);
        cnt++;
        blueLine_x += 7;
        if (cnt <= 15) 
            {
                blueLine_y += -1;
            }
        else {blueLine_y += 3;}
    }
    strokeWeight(1);
    stroke(0,115,144);
    fill(0,115,144);   
    quad(207, 401, 231, 409, 230, 456, 207, 512);
    stroke(0,146,192);
    fill(0,146,192);    
    quad(81, 352, 81, 360, 3, 387, -39, 392);
    quad(81, 352, 81, 360, 237, 410, 237, 402);

    stroke(87,205,236);
    fill(87,205,236);
    quad(210, 448, 228, 438, 228, 423, 210, 423);
    quad(210+156, 438, 228+156, 448, 228+156, 423, 210+156, 423);
    
    //
    stroke(8, 122, 150);
    fill(10, 132, 173,200);
    quad(2,425,40,425,40,510,2,510);
    quad(63,425,110,425,110,510,63,510);
    quad(130,425,168,425,168,510,130,510);
    quad(168,425,206,425,206,510,168,510);
    //
    fill(133, 119, 56);
    ellipse(160,470,5,5);
    ellipse(102,470,5,5);
    ellipse(2,470,5,5);
    //
    
    fill(23, 22, 23);
    quad(7,487,25,487,25,490,7,490);
    quad(7,491,25,491,25,494,7,494);
    quad(7,495,25,495,25,498,7,498);
    quad(7,499,25,499,25,502,7,502);
    
    
    quad(140,487,157,487,157,490,140,490);
    quad(140,491,157,491,157,494,140,494);
    quad(140,495,157,495,157,498,140,498);
    quad(140,499,157,499,157,502,140,502);
    
    quad(180,487,197,487,197,490,180,490);
    quad(180,491,197,491,197,494,180,494);
    quad(180,495,197,495,197,498,180,498);
    quad(180,499,197,499,197,502,180,502);

    ////house window
    fill(23, 22, 23);
    quad(80,440,95,440,95,460,80,460);
    
    
//road2 
    stroke(195,196,197);
    fill(195,196,197);
    quad(-68, 518, 655, 518, 811, 511, 10, 511);
    stroke(135,137,139);
    fill(135,137,139);
    quad(-68, 521, 655, 521, 811, 518, 10, 518);   
    stroke(159,160,162);
    fill(159,160,162);
    quad(-68, 521, 655, 521, 811, 628, 10, 622);     
    stroke(255, 255, 255);
    fill(255, 255, 255);
    quad(21, 552, 139, 552, 139, 560, 21, 560);  
    quad(21+220, 552, 139+220, 552, 139+220, 560, 21+220, 560);  
    quad(21+440, 552, 139+440, 552, 139+440, 560, 21+440, 560);  
    
    //tree
    stroke(91,144,61);
    fill(91,144,61);
    quad(74, 518, 655, 518, 811, 511, 10, 511);
    
    stroke(24,24,24);
    fill(24,24,24);
};

var papago = function(xPos, yPos, charSize, papago_eye_h_size, papago_feather_degree)
{
// variables
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
    
var XPOS = 200;
var YPOS = 120;
var _SIZE = 100;

var xPos = xPos;
var yPos = yPos;
var charSize = charSize;

// eye_h_size = 15;
// feather_degree = 130;
var papago_eye_h_size = papago_eye_h_size;
var papago_feather_degree = papago_feather_degree;
//papago_eye_h_size = 15
//papago_feather_degree = 129

// papago
{   
//*************************Papago Body*******************************
{
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
}    
    //*************************Papago Head*******************************
{    
    //papago head white part
    fill(White);
    ellipse(xPos, yPos, 65/_SIZE*charSize, 65/_SIZE*charSize);
    
    fill(White);
    arc(xPos, yPos, 100/_SIZE*charSize, 100/_SIZE*charSize, -90, 0);
    
    //papago green beak
    fill(papago_up_beak);
    arc(xPos, yPos, 101/_SIZE*charSize, 101/_SIZE*charSize, -90, 0);
    
    //papago yellow beak
    fill(papago_beak);
    arc(xPos, yPos, 65/_SIZE*charSize, 65/_SIZE*charSize, 35, 90);
    
    //papago eye
    fill(papago_eye);
    ellipse(xPos - 15/_SIZE*charSize, yPos - 5/_SIZE*charSize, 15/_SIZE*charSize, papago_eye_h_size/_SIZE*charSize);
}
}

};

var kim = function(xPos, yPos, charSize, legMove)
{
    //Variables
    //xPos = 200
    //yPos = 204
    //charSize = 200
    var xPos = xPos;
    var yPos = yPos;
    var charSize = charSize;

    //color
    fill(3, 3, 3);
    ellipse(xPos+charSize*14/200,yPos-charSize*157/200,charSize*64/200,charSize*39/200);
    ellipse(xPos-charSize*14/200,yPos-charSize*150/200,charSize*58/200,charSize*50/200);
    
    var RightLeg = function(legMove)
    {
        strokeWeight(4*charSize/200);
        fill(43, 46, 51);
        rect(xPos+charSize*17/200,yPos+charSize*(147+legMove)/200,charSize*50/200,charSize*50/200);//right pants
        fill(79, 79, 79);
        bezier(xPos+charSize*67/200,yPos+charSize*(196+legMove)/200,xPos+charSize*47/200,yPos+charSize*(150+legMove)/200,xPos+charSize*20/200,yPos+charSize*(184+legMove)/200,xPos+charSize*18/200,yPos+charSize*(196+legMove)/200); //right shoe
    };
    var LeftLeg = function(legMove)
    {
        strokeWeight(4*charSize/200);
        fill(43, 46, 51);
        rect(xPos-charSize*54/200,yPos+charSize*(147+legMove)/200,charSize*50/200,charSize*50/200);//left pants
        fill(79, 79, 79);
        bezier(xPos-charSize*4/200,yPos+charSize*(195+legMove)/200,xPos-charSize*21/200,yPos+charSize*(150+legMove)/200,xPos-charSize*55/200,yPos+charSize*(180+legMove)/200,xPos-charSize*54/200,yPos+charSize*(196+legMove)/200); //left shoe
    };
    
    if(legMove > 0)
    {
        LeftLeg(-legMove);
        RightLeg(0);
    }
    else 
    {
        RightLeg(legMove);
        LeftLeg(0);
    }
    
    //head
    strokeWeight(6*charSize/200);
    fill(3, 3, 3);
    bezier(xPos-charSize*5/200,yPos-charSize*177/200,xPos-charSize*104/200,yPos-charSize*164/200,xPos-charSize*135/200,yPos-charSize*171/200,xPos-charSize*100/200,yPos-charSize*74/200);//left head
    bezier(xPos-charSize*5/200,yPos-charSize*177/200, xPos+charSize*128/200,yPos-charSize*169/200,xPos+charSize*130/200,yPos-charSize*161/200, xPos+charSize*103/200,yPos-charSize*74/200); //right head
    
    //shirt filler
    noStroke();
    fill(43, 46, 51);
    rect(xPos-charSize*66/200,yPos+charSize*25/200,charSize*132/200,charSize*123/200);
    triangle(xPos+charSize*64/200,yPos+charSize*146/200,xPos+charSize*89/200,yPos+charSize*150/200,xPos+charSize*56/200,yPos-charSize*3/200);
    triangle(xPos-charSize*83/200,yPos+charSize*146/200,xPos+charSize*64/200,yPos+charSize*143/200,xPos-charSize*64/200,yPos-charSize*16/200);
    triangle(xPos-charSize*64/200,yPos+charSize*16/200,xPos-charSize*80/200,yPos+charSize*122/200,xPos-charSize*132/200,yPos+charSize*95/200);
    triangle(xPos+charSize*56/200,yPos+charSize*10/200,xPos+charSize*135/200,yPos+charSize*91/200,xPos+charSize*78/200, yPos+charSize*121/200); 
    
    //left shirt hand
    stroke(0, 0, 0);
    line(xPos-charSize*128/200,yPos+charSize*97/200,xPos-charSize*81/200,yPos+charSize*121/200);
    line(xPos-charSize*85/200,yPos+charSize*65/200,xPos-charSize*72/200,yPos+charSize*54/200);
    bezier(xPos-charSize*63/200,yPos+charSize*22/200,xPos-charSize*60/200,yPos+charSize*29/200, xPos-charSize*84/200,yPos+charSize*13/200,xPos-charSize*130/200,yPos+charSize*96/200);
    
    //right shirt hand
    fill(43, 46, 51);
    line(xPos+charSize*132/200,yPos+charSize*94/200,xPos+charSize*85/200,yPos+charSize*120/200);
    line(xPos+charSize*73/200,yPos+charSize*63/200,xPos+charSize*84/200,yPos+charSize*71/200);
    bezier(xPos+charSize*65/200,yPos+charSize*32/200,xPos+charSize*65/200,yPos+charSize*28/200,xPos+charSize*73/200,yPos+charSize*20/200,xPos+charSize*134/200,yPos+charSize*93/200);
    
    //hand
    strokeWeight(3*charSize/200);
    fill(251, 180, 160);
    bezier(xPos-charSize*131/200,yPos+charSize*98/200,xPos-charSize*144/200,yPos+charSize*144/200,xPos-charSize*89/200,yPos+charSize*145/200,xPos-charSize*82/200,yPos+charSize*124/200); //left
    bezier(xPos+charSize*87/200,yPos+charSize*122/200,xPos+charSize*105/200,yPos+charSize*143/200,xPos+charSize*153/200,yPos+charSize*134/200,xPos+charSize*134/200,yPos+charSize*96/200); //right
    
    //shirt
    strokeWeight(4*charSize/200);
    stroke(0, 0, 0);
    fill(43, 46, 51);
    line(xPos-charSize*3/200,yPos+charSize*46/200,xPos-charSize*3/200,yPos+charSize*146/200);
    line(xPos-charSize*83/200,yPos+charSize*147/200,xPos+charSize*91/200,yPos+charSize*147/200);
    line(xPos+charSize*90/200,yPos+charSize*146/200,xPos+charSize*65/200,yPos+charSize*35/200);
    line(xPos-charSize*61/200,yPos-charSize*18/200,xPos-charSize*82/200,yPos+charSize*145/200);
    triangle(xPos-charSize*6/200,yPos+charSize*46/200,xPos-charSize*32/200,yPos+charSize*72/200,xPos-charSize*65/200,yPos+charSize*30/200);
    triangle(xPos+charSize*5/200,yPos+charSize*44/200,xPos+charSize*30/200,yPos+charSize*69/200,xPos+charSize*74/200,yPos+charSize*19/200);
    
    //shirt button
    fill(92,93,95);
    ellipse(xPos+charSize*14/200,yPos+charSize*79/200,charSize*12/200,charSize*12/200);
    ellipse(xPos+charSize*14/200,yPos+charSize*110/200,charSize*12/200,charSize*12/200);
    
    //ear
    fill(250, 199, 180);
    bezier(xPos-charSize*104/200,yPos-charSize*28/200,xPos-charSize*132/200,yPos-charSize*45/200,xPos-charSize*122/200,yPos-charSize*73/200,xPos-charSize*100/200,yPos-charSize*75/200); //left ear
    bezier(xPos+charSize*117/200,yPos-charSize*35/200,xPos+charSize*135/200,yPos-charSize*40/200,xPos+charSize*136/200,yPos-charSize*81/200,xPos+charSize*103/200, yPos-charSize*74/200);//right ear 
    
    //face
    noStroke();
    ellipse(xPos+charSize*4/200,yPos-charSize*31/200,charSize*198/200,charSize*121/200); //face filler
    rect(xPos-charSize*51/200,yPos-charSize*137/200,charSize*49/200,charSize*22/200);// face filler
    rect(xPos-charSize*33/200,yPos-charSize*142/200,charSize*85/200,charSize*24/200,19);
    rect(xPos-charSize*74/200,yPos-charSize*128/200,charSize*150/200,charSize*68/200); //filler forehead
    stroke(0, 0, 0);
    fill(250, 199, 180);
    bezier(xPos-charSize*59/200,yPos+charSize*28/200,xPos-charSize*94/200,yPos+charSize*25/200,xPos-charSize*141/200,yPos-charSize*65/200,xPos-charSize*70/200,yPos-charSize*100/200); //left cheek
    bezier(xPos+charSize*74/200,yPos+charSize*25/200,xPos+charSize*79/200,yPos+charSize*27/200,xPos+charSize*165/200,yPos-charSize*42/200,xPos+charSize*72/200,yPos-charSize*100/200); //right cheek
    bezier(xPos-charSize*80/200,yPos+charSize*17/200,xPos-charSize*33/200,yPos+charSize*67/200, xPos+charSize*81/200,yPos+charSize*40/200, xPos+charSize*92/200, yPos+charSize*10/200); //chin
    bezier(xPos-charSize*42/200,yPos-charSize*140/200,xPos-charSize*76/200,yPos-charSize*125/200,xPos-charSize*98/200,yPos-charSize*132/200,xPos-charSize*70/200,yPos-charSize*100/200); //left forehead
    bezier(xPos+charSize*39/200,yPos-charSize*141/200,xPos+charSize*123/200,yPos-charSize*117/200,xPos+charSize*68/200,yPos-charSize*108/200,xPos+charSize*72/200,yPos-charSize*100/200); //right forehead
    bezier(xPos-charSize*46/200,yPos-charSize*138/200,xPos-charSize*63/200,yPos-charSize*130/200,xPos-charSize*5/200,yPos-charSize*151/200,xPos+charSize*46/200,yPos-charSize*139/200); // mid forehead
    
    //line below mouth
    strokeWeight(4*charSize/200);
    bezier(xPos-charSize*16/200,yPos+charSize*26/200,xPos+charSize*8/200,yPos+charSize*38/200,xPos+charSize*9/200,yPos+charSize*26/200,xPos+charSize*16/200,yPos+charSize*25/200);
    
    //nose
    strokeWeight(1*charSize/200);
    fill(0, 0, 0);
    arc(xPos+charSize*2/200,yPos-charSize*21/200,charSize*21/200,charSize*6/200,0,180);
    
    //MOUTH
    strokeWeight(3*charSize/200);
    fill(255, 255, 255);
    arc(xPos+charSize*2/200,yPos-charSize*8/200,charSize*48/200,charSize*19/200,0,180);
    line(xPos-charSize*22/200,yPos-charSize*9/200,xPos+charSize*25/200,yPos-charSize*9/200);
    
    //brows
    strokeWeight(5*charSize/200);
    line(xPos-charSize*32/200,yPos-charSize*76/200,xPos-charSize*50/200,yPos-charSize*76/200); //left
    line(xPos+charSize*35/200,yPos-charSize*76/200,xPos+charSize*54/200,yPos-charSize*76/200); //right
    
    //red cheeks
    noStroke();
    fill(251, 180, 160);
    ellipse(xPos-charSize*57/200,yPos-charSize*7/200,charSize*50/200,charSize*50/200); //left red cheek
    ellipse(xPos+charSize*60/200,yPos-charSize*7/200,charSize*50/200,charSize*50/200); //right red cheek
    
    //eyes
    fill(255, 252, 252);
    arc(xPos-charSize*39/200,yPos-charSize*50/200,charSize*50/200,charSize*20/200,0,180);//left down
    arc(xPos+charSize*48/200,yPos-charSize*50/200,charSize*50/200,charSize*20/200,0,180);//right down
    stroke(0, 0, 0);
    strokeWeight(3);
    arc(xPos-charSize*39/200,yPos-charSize*50/200,charSize*50/200,charSize*16/200,180,360);//left up
    arc(xPos+charSize*48/200,yPos-charSize*50/200,charSize*50/200,charSize*16/200,180,360);//right up
    
    //eyeball
    fill(0, 0, 0);
    ellipse(xPos-charSize*38/200,yPos-charSize*48/200,charSize*22/200,charSize*16/200);
    ellipse(xPos+charSize*47/200,yPos-charSize*48/200,charSize*22/200,charSize*16/200);
    noStroke();
    fill(247, 247, 247);
    ellipse(xPos-charSize*41/200,yPos-charSize*52/200,charSize*5/200,charSize*5/200);
    ellipse(xPos+charSize*42/200,yPos-charSize*52/200,charSize*5/200,charSize*5/200);
    
    //glasses
    stroke(0, 0, 0);
    strokeWeight(4*charSize/200);
    noFill();
    rect(xPos-charSize*76/200,yPos-charSize*65/200,charSize*70/200,charSize*38/200,20);
    rect(xPos+charSize*13/200,yPos-charSize*65/200,charSize*70/200,charSize*38/200,20);
    arc(xPos+charSize*4/200,yPos-charSize*50/200,charSize*20/200,charSize*15/200,180,360);
    
};

var jjangu = function(xPos, yPos, charSize, legmove) 
{
    
    var leftleg = function(legmove)
    {
        
        stroke(0,0,0);
        strokeWeight(3*charSize/300);
        fill(245, 222, 193); //left leg
        beginShape();
        vertex(xPos-charSize*41/300, yPos-charSize*(-153+legmove)/300);
        bezierVertex(xPos-charSize*121/300, yPos-charSize*(-133+legmove)/300, xPos-charSize*44/300, yPos-charSize*(-281+legmove)/300, xPos-charSize*36.5/300, yPos-charSize*(-215+legmove)/300);
        endShape();
        line(xPos-charSize*37/300, yPos-charSize*(-216+legmove)/300, xPos-charSize*39/300, yPos-charSize*(-180+legmove)/300);
        
        
        fill(255, 255, 255);
        quad(xPos-charSize*66/300, yPos-charSize*(-214+legmove)/300, xPos-charSize*37/300, yPos-charSize*(-212+legmove)/300, xPos-charSize*35/300, yPos-charSize*(-237+legmove)/300, xPos-charSize*57/300, yPos-charSize*(-240+legmove)/300); //left socks


        fill(225, 235, 87);
        quad(xPos-charSize*58/300, yPos-charSize*(-252+legmove)/300, xPos-charSize*28/300, yPos-charSize*(-251+legmove)/300, xPos-charSize*35/300, yPos-charSize*(-232+legmove)/300, xPos-charSize*57/300, yPos-charSize*(-236+legmove)/300); //left shoe1

        strokeWeight(charSize*0.0001/300);
        fill(225, 235, 87);
        bezier(xPos-charSize*53/300, yPos-charSize*(-251+legmove)/300, xPos-charSize*63/300, yPos-charSize*(-195+legmove)/300, xPos-charSize*65/300, yPos-charSize*(-257+legmove)/300, xPos-charSize*80/300, yPos-charSize*(-253+legmove)/300); //left shoe2

        strokeWeight(charSize*3/300);
        fill(225, 235, 87);
        bezier(xPos-charSize*56/300, yPos-charSize*(-237+legmove)/300, xPos-charSize*60/300, yPos-charSize*(-213+legmove)/300, xPos-charSize*66/300, yPos-charSize*(-231+legmove)/300, xPos-charSize*69/300, yPos-charSize*(-239+legmove)/300); //left shoe3

        fill(225, 235, 87);
        bezier(xPos-charSize*67/300, yPos-charSize*(-238+legmove)/300, xPos-charSize*118/300, yPos-charSize*(-253+legmove)/300, xPos-charSize*90/300, yPos-charSize*(-259+legmove)/300, xPos-charSize*57/300, yPos-charSize*(-252+legmove)/300); //left shoe4
    };
    
    var rightleg = function(legmove)
    {
        
        stroke(0,0,0);
        fill(245, 222, 193); //right leg
        beginShape();
        vertex(xPos-charSize*-48/300, yPos-charSize*(-174+legmove)/300);
        bezierVertex(xPos-charSize*-6/300, yPos-charSize*(121+legmove)/300, xPos-charSize*16/300, yPos-charSize*(-309+legmove)/300, xPos-charSize*-46/300, yPos-charSize*(-220+legmove)/300);
        endShape();
        line(xPos-charSize*-47/300, yPos-charSize*(-220+legmove)/300, xPos-charSize*-49/300, yPos-charSize*(-180+legmove)/300);


        fill(225, 235, 87);
        quad(xPos-charSize*-10/300, yPos-charSize*(-253+legmove)/300, xPos-charSize*-43/300, yPos-charSize*(-252+legmove)/300, xPos-charSize*-41/300, yPos-charSize*(-237+legmove)/300, xPos-charSize*-18/300, yPos-charSize*(-235+legmove)/300); //right shoe

        fill(255, 255, 255);
        quad(xPos-charSize*-13/300, yPos-charSize*(-210+legmove)/300, xPos-charSize*-48/300, yPos-charSize*(-210+legmove)/300, xPos-charSize*-44/300, yPos-charSize*(-237+legmove)/300, xPos-charSize*-19/300, yPos-charSize*(-235+legmove)/300); //right socks


        fill(225, 235, 87);
        bezier(xPos-charSize*-47/300, yPos-charSize*(-243+legmove)/300, xPos-charSize*-63/300, yPos-charSize*(-239+legmove)/300, xPos-charSize*-90/300, yPos-charSize*(-263+legmove)/300, xPos-charSize*-43/300, yPos-charSize*(-252+legmove)/300); //right shoe2


        strokeWeight(charSize*0.0001/300);
        fill(225, 235, 87);
        bezier(xPos-charSize*-32/300, yPos-charSize*(-251+legmove)/300, xPos-charSize*-43/300, yPos-charSize*(-224+legmove)/300, xPos-charSize*-55/300, yPos-charSize*(-225+legmove)/300, xPos-charSize*-50/300, yPos-charSize*(-252+legmove)/300); //right shoe3

        strokeWeight(charSize*3/300);
        fill(225, 235, 87);
        bezier(xPos-charSize*-39/300, yPos-charSize*(-237+legmove)/300, xPos-charSize*-48/300, yPos-charSize*(-222+legmove)/300, xPos-charSize*-49/300, yPos-charSize*(-224+legmove)/300, xPos-charSize*-51/300, yPos-charSize*(-243+legmove)/300); //right shoe4
    };
    
    
    leftleg(legmove+10);
    rightleg(-legmove+10);
      
    {
    stroke(0,0,0);
    strokeWeight(3*charSize/300); //upper head
    fill(245, 222, 193);
    bezier(xPos-charSize*84/300, yPos-charSize*78/300, xPos-charSize*74/300, yPos-charSize*154/300, xPos-charSize*-88/300, yPos-charSize*183/300, xPos-charSize*-105/300,yPos-charSize*58/300);



    fill(245, 222, 193); //left arm
    beginShape();
    vertex(xPos-charSize*92/300, yPos-charSize*-8/300);
    bezierVertex(xPos-charSize*112/300, yPos-charSize*-48/300, xPos-charSize*169/300, yPos-charSize*50/300,xPos-charSize*126/300 , yPos-charSize*72/300);
    endShape();
    line(xPos-charSize*126/300,yPos-charSize*62/300,xPos-charSize*93/300,yPos-charSize*6/300);

    ellipse(xPos-charSize*138/300,yPos-charSize*68/300,charSize*39/300,charSize*39/300); //left hand




    fill(245, 222, 193); //right arm
    beginShape();
    vertex(xPos-charSize*-66/300, yPos-charSize*-78/300);
    bezierVertex(xPos-charSize*-88/300, yPos-charSize*158/300,xPos-charSize*-109/300, yPos-charSize*-154/300, xPos-charSize*-71/300, yPos-charSize*-125/300);
    endShape();

    ellipse(xPos-charSize*-76/300,yPos-charSize*-133/300,charSize*30/300,charSize*30/300); //right hand




    fill(255,0,0); //left arm clothe
    quad(xPos-charSize*135/300, yPos-charSize*-9/300, xPos-charSize*93/300, yPos-charSize*31/300, xPos-charSize*63/300, yPos-charSize*-88/300, xPos-charSize*112/300, yPos-charSize*-33/300);



    fill(255,0,0);
    rect(xPos-charSize*-96/300, yPos-charSize*-18/300, charSize*-41/300, charSize*54/300); //right arm clothe





    strokeWeight(charSize*0.1/300); //T-shirt
    fill(255,0,0);
    quad(xPos-charSize*94/300, yPos-charSize*-31/300, xPos-charSize*-67/300, yPos-charSize*-13/300, xPos-charSize*-74/300, yPos-charSize*-130/300, xPos-charSize*98/300, yPos-charSize*-130/300);



    strokeWeight(charSize*3/300);  //T-shirt detail
    line(xPos-charSize*98/300,yPos-charSize*-130/300,xPos-charSize*95/300,yPos-charSize*-47/300);
    line(xPos-charSize*-74/300,yPos-charSize*-131/300,xPos-charSize*-69/300, yPos-charSize*-47/300);
    line(xPos-charSize*98/300,yPos-charSize*-130/300,xPos-charSize*-74/300,yPos-charSize*-130/300);







    fill(218, 227, 93); //pants
    quad(xPos-charSize*94/300, yPos-charSize*-130/300, xPos-charSize*12/300, yPos-charSize*-130/300, xPos-charSize*19/300, yPos-charSize*-180/300, xPos-charSize*98/300, yPos-charSize*-180/300);
    quad(xPos-charSize*20/300, yPos-charSize*-130/300, xPos-charSize*-66/300, yPos-charSize*-130/300, xPos-charSize*-72/300, yPos-charSize*-180/300, xPos-charSize*12/300, yPos-charSize*-180/300);



    strokeWeight(charSize*0.001/300); //pants color
    fill(218, 227, 93);
    quad(xPos-charSize*34/300, yPos-charSize*-131.6/300, xPos-charSize*17/300, yPos-charSize*-131.6/300, xPos-charSize*11/231, yPos-charSize*-154/300, xPos-charSize*18/300, yPos-charSize*-163/300);




    strokeWeight(charSize*3/300); //jaw
    fill(245, 222, 193);
    bezier(xPos-charSize*84/300, yPos-charSize*78/300, xPos-charSize*194/300, yPos-charSize*-10/300, xPos-charSize*36/300, yPos-charSize*-80/300, xPos-charSize*-81/300, yPos-charSize*-15/300); 



    beginShape();  //cheek
    vertex(xPos-charSize*84/300, yPos-charSize*78/300);
    bezierVertex(xPos-charSize*143/300, yPos-charSize*70/300, xPos-charSize*162/300, yPos-charSize*-65/300, xPos-charSize*0/300, yPos-charSize*-39.5/300);
    endShape();



    strokeWeight(charSize*0.01/300); //skin
    triangle(xPos-charSize*84/300, yPos-charSize*78/300, xPos-charSize*-103/300, yPos-charSize*59/300, xPos-charSize*-54/300, yPos-charSize*-4/300);



    strokeWeight(charSize*0.01/300); //skin
    triangle(xPos-charSize*84/300, yPos-charSize*78/300, xPos-charSize*-103/300, yPos-charSize*59/300, xPos-charSize*-80/300, yPos-charSize*-15/300);



    strokeWeight(charSize*3/300); //hair
    fill(0,0,0);
    beginShape();
    vertex(xPos-charSize*-104/300, yPos-charSize*58/300);
    bezierVertex(xPos-charSize*-99/300, yPos-charSize*125/300, xPos-charSize*-27/300, yPos-charSize*176/300, xPos-charSize*56/300, yPos-charSize*121/300);
    bezierVertex(xPos-charSize*-117/300, yPos-charSize*142/300, xPos-charSize*-70/300, yPos-charSize*20/300, xPos-charSize*-106/300, yPos-charSize*57/300);
    endShape();



    fill(0, 0, 0); //Thick eyeborow
    beginShape();
    vertex(xPos-charSize*65/300, yPos-charSize*113/300);
    bezierVertex(xPos-charSize*30/300, yPos-charSize*133/300, xPos-charSize*35/300, yPos-charSize*134/300, xPos-charSize*15/300, yPos-charSize*113/300);
    bezierVertex(xPos-charSize*30/300, yPos-charSize*92/300, xPos-charSize*27/300, yPos-charSize*132/300, xPos-charSize*64/300, yPos-charSize*101.5/300);
    endShape();


    strokeWeight(charSize*12/300);//Thick eyeborow
    point(xPos-charSize*65/300, yPos-charSize*107/300);

    strokeWeight(charSize*13.0/300);//Thick eyeborow
    point(xPos-charSize*20/300, yPos-charSize*110/300);



    strokeWeight(charSize*3/300); //ear
    fill(245, 222, 193);
    beginShape();
    vertex(xPos-charSize*-90/300, yPos-charSize*49/300);
    bezierVertex( xPos-charSize*-156/300, yPos-charSize*95/300, xPos-charSize*-137/300, yPos-charSize*-57/300, xPos-charSize*-80/300, yPos-charSize*-15/300);
    endShape();




    strokeWeight(charSize*3/300); //Thick eyeborow2
    fill(0,0,0);
    beginShape();
    vertex(xPos-charSize*-66/300, yPos-charSize*103/300);
    bezierVertex(xPos-charSize*-61/300, yPos-charSize*114/300, xPos-charSize*-42/300, yPos-charSize*142/300, xPos-charSize*-10/300, yPos-charSize*114/300);
    bezierVertex(xPos-charSize*-18/300, yPos-charSize*95/300, xPos-charSize*-36/300, yPos-charSize*128/300, xPos-charSize*-53/300, yPos-charSize*102/300);
    endShape();
    
    strokeWeight(charSize*13/300); //Thick eyeborow2
    point(xPos-charSize*-14/300, yPos-charSize*111/300);

    strokeWeight(charSize*14.4/300); //Thick eyeborow2
    point(xPos-charSize*-60/300, yPos-charSize*103/300);



    strokeWeight(charSize*2/300); //mouth
    fill(204, 55, 85);
    arc(xPos-charSize*32/300, yPos-charSize*-18/300, charSize*24/300, charSize*25/300, -80, 285);



    strokeWeight(charSize*3/300); //small eyebrow1
    fill(245, 222, 193);
    bezier(xPos-charSize*74/300, yPos-charSize*76/300, xPos-charSize*69/300, yPos-charSize*93/300, xPos-charSize*23/300, yPos-charSize*104/300, xPos-charSize*20/300, yPos-charSize*78/300);



    strokeWeight(charSize*3/300); //small eyebrow2
    fill(245, 222, 193);
    bezier(xPos-charSize*-7/300, yPos-charSize*77/300, xPos-charSize*-17/300, yPos-charSize*92/300, xPos-charSize*-56/300, yPos-charSize*104/300, xPos-charSize*-68/300, yPos-charSize*66/300);



    fill(0,0,0);  //eye1
    ellipse(xPos-charSize*44/300, yPos-charSize*57/300, charSize*47/300, charSize*40/300);
    ellipse(xPos-charSize*-27/300, yPos-charSize*54/300, charSize*48/300, charSize*40/300);//eye2

 

    fill(255, 255, 255);  //left pupil
    ellipse(xPos-charSize*45/300, yPos-charSize*56/300, charSize*26/300, charSize*24/300);
    ellipse(xPos-charSize*-24/300, yPos-charSize*53/300, charSize*26/300, charSize*24/300); //right pupil
}

};

var ryan = function(xpos,ypos,size,foot, m, mouthFlag, sweatFlag)
{
    var x=xpos;  //xpos 194
    var y=ypos;  //ypos 202
    var s=size;  //size 183
    foot = foot/3;
    fill(255, 191, 0);
    
    rect(x-s*48/300,(y-s*-28/300)-foot,s*41/300,s*41/300);     //left foot
    rect(x-s*-4/300,(y-s*-28/300)+foot,s*41/300,s*41/300);     //right foot
    rect(x-s*48/300,y-s*79/300,s*92/300,s*127/300); //body
    
    noStroke();
    rect(x-s*46/300,(y-s*-23/300)-foot,s*39/300,s*52/300);     //left foot hide
    rect(x-s*-5/300,(y-s*-23/300)+foot,s*39/300,s*52/300);     //right foot hide
    stroke(0, 0, 0);
    arc(x-s*27/300,(y-s*-71/300)-foot,s*40/300,s*49/300,0,180); //left foot
    arc(x-s*-24/300,(y-s*-71/300)+foot,s*40/300,s*49/300,0,180); //rigt foot
    bezier(x-s*-41/300, y-s*-32/300, x-s*-67/300, y-s*-36/300, x-s*-75/300, y-s*-15/300, x-s*-40/300, y-s*29/300);  //left arm
    bezier(x-s*46/300, y-s*-2/300, x-s*192/300, y-s*115/300, x-s*7/300, y-s*59/300, x-s*42/300, y-s*29/300);  //right arm
    noStroke();
    fill(255, 255, 255);
    arc(x-s*1/300,y-s*-16/300,s*48/300,s*40/300,-26,205); //body2
    arc(x-s*1/300,y-s*-6/300,s*48/300,s*40/300,50,150);
    triangle(x-s*7/300,y-s*-13/300,x-s*24/300,y-s*-10/300,x-s*16/300,y-s*1/300);
    triangle(x-s*11/300,y-s*-13/300,x-s*-10/300,y-s*-13/300,x-s*1/300,y-s*1/300);
    triangle(x-s*-2/300,y-s*-13/300,x-s*-23/300,y-s*-13/300,x-s*-15/300,y-s*1/300);
    fill(255, 191, 0);
    stroke(0, 0, 0);
    
    ellipse(x-s*40/300,y-s*140/300,s*50/300,s*50/300); //left ear
    ellipse(x-s*-55/300,y-s*140/300,s*50/300,s*50/300); //right ear
    ellipse(x,y-s*85/300,s*170/300,s*150/300); //face
    
    fill(0, 0, 0);
    rect(x-s*68/300,y-s*130/300,s*28/300,s*4/300); //left 눈썹
    rect(x-s*-3/300,y-s*130/300,s*40/300,s*4/300); //right 눈썹
    
    ellipse(x-s*55/300,y-s*110/300,s*10/300,s*10/300); //left eye
    ellipse(x-s*-15/300,y-s*110/300,s*10/300,s*10/300); //right eye
    
    if(mouthFlag === true)
    {
        fill(247, 46, 46);
        ellipse(x-s*27/300,y-s*65/300,10,m);
    }
    if(sweatFlag === true)
    {
        fill(255, 255, 255);
        noStroke();
        ellipse(x-s*-46/300,y-s*96/300,5,7);
         triangle(x-s*-40/300,y-s*101/300,x-s*-45/300,y-s*120/300,x-s*-52/300,y-s*94/300);
         triangle(x-s*-61/300,y-s*101/300,x-s*-65/300,y-s*114/300,x-s*-69/300,y-s*94/300);
        ellipse(x-s*-64/300,y-s*94/300,5,7);
    }
    fill(255, 255, 255);
    noStroke();
    ellipse(x-s*20/300,y-s*82/300,s*20/300,s*20/300); //mouse right
    ellipse(x-s*35/300,y-s*82/300,s*20/300,s*20/300); //mouse left
    
    fill(0,0,0);
    ellipse(x-s*28/300,y-s*90/300,s*10/300,s*10/300); //nose


};

var moon = function(xPos,yPos,charSize,legmovel,legmover)
{


var xPos = xPos;
var yPos = yPos;
var charSize = charSize;
noStroke();
fill(170, 170, 171);
quad(xPos-charSize*48/200, yPos-charSize*175/200, xPos+charSize*69/200, yPos-charSize*151/200, xPos+charSize*108/200, yPos-charSize*41/200, xPos-charSize*91/200, yPos-charSize*45/200);
triangle(xPos-charSize*110/200, yPos-charSize*106/200, xPos-charSize*49/200, yPos-charSize*173/200, xPos-charSize*89/200, yPos-charSize*37/200);  
triangle(xPos-charSize*84/200, yPos-charSize*157/200, xPos-charSize*49/200, yPos-charSize*173/200, xPos+charSize*4/200, yPos-charSize*124/200);

    strokeWeight(4*charSize/200);
    stroke(0,0,0);
var left_leg = function(legmovel)
{
    //left
    fill(40, 55, 96);
    rect(xPos-charSize*57/200, yPos+charSize*(142+legmovel)/200, charSize*55/200, charSize*51/200); //Leg
    fill(48, 51, 56);
    arc(xPos-charSize*29/200, yPos+charSize*(191+legmovel)/200, charSize*52/200, charSize*45/200, 180, 360);
};

var right_leg = function(legmover)
{
    //right
    fill(40, 55, 96);
    rect(xPos+charSize*16/200, yPos+charSize*(142+legmover)/200, charSize*55/200, charSize*51/200); //Leg
    fill(48, 51, 56);
    arc(xPos+charSize*44/200, yPos+charSize*(191+legmover)/200, charSize*52/200, charSize*45/200, 180, 360);
};

left_leg(legmovel);
right_leg(legmover);
noStroke();
//Face Skin dyeing start
fill(252, 200, 179);
ellipse(xPos+charSize*5/200, yPos-charSize*36/200, charSize*169/200, charSize*164/200);
ellipse(xPos-charSize*34.1/200, yPos+charSize*4/200, charSize*69/200, charSize*71/200);
ellipse(xPos+charSize*54/200, yPos-charSize*6/200, charSize*69/200, charSize*71/200);
ellipse(xPos+charSize*68/200, yPos-charSize*24/200, charSize*64/200, charSize*52/200);
ellipse(xPos+charSize*93/200, yPos-charSize*29/200, charSize*27/200, charSize*27/200);
ellipse(xPos-charSize*81/200, yPos-charSize*32/200, charSize*27/200, charSize*27/200);
ellipse(xPos-charSize*75/200, yPos-charSize*18/200, charSize*27/200, charSize*27/200);
ellipse(xPos+charSize*55/200, yPos-charSize*73/200, charSize*66/200, charSize*96/200);
ellipse(xPos+charSize*36/200, yPos-charSize*110/200, charSize*27/200, charSize*27/200);
ellipse(xPos-charSize*48/200, yPos-charSize*78/200, charSize*66/200, charSize*96/200);
ellipse(xPos-charSize*21/200, yPos-charSize*110/200, charSize*27/200, charSize*27/200);


//Hand skin && Suit dyeing start
fill(40, 55, 96);
noStroke();
ellipse(xPos+charSize*10/200, yPos+charSize*101/200, charSize*149/200, charSize*79/200);
ellipse(xPos-charSize*61/200, yPos+charSize*84/200, charSize*99/200, charSize*79/200);
ellipse(xPos-charSize*44/200, yPos+charSize*84/200, charSize*78/200, charSize*101/200);
ellipse(xPos-charSize*62/200, yPos+charSize*75/200, charSize*78/200, charSize*77/200);
ellipse(xPos-charSize*41/200, yPos+charSize*130/200, charSize*64/200, charSize*28/200);
ellipse(xPos-charSize*20/200, yPos+charSize*130/200, charSize*64/200, charSize*28/200);
ellipse(xPos-charSize*33/200, yPos+charSize*136/200, charSize*85/200, charSize*16/200);
ellipse(xPos+charSize*49/200, yPos+charSize*84/200, charSize*156/200, charSize*55/200);
ellipse(xPos+charSize*64/200, yPos+charSize*71/200, charSize*67/200, charSize*77/200);
ellipse(xPos+charSize*65/200, yPos+charSize*71/200, charSize*98/200, charSize*52/200);
ellipse(xPos+charSize*49/200, yPos+charSize*136/200, charSize*54/200, charSize*25/200);
ellipse(xPos+charSize*75/200, yPos+charSize*127/200, charSize*16/200, charSize*25/200);
ellipse(xPos+charSize*87/200, yPos+charSize*94/200, charSize*18/200, charSize*41/200);
ellipse(xPos+charSize*72/200, yPos+charSize*133/200, charSize*29/200, charSize*21/200);
fill(252, 200, 179);
ellipse(xPos+charSize*114/200, yPos+charSize*107/200, charSize*30/200, charSize*21/200);
ellipse(xPos+charSize*98/200, yPos+charSize*114/200, charSize*17/200, charSize*16/200);
ellipse(xPos+charSize*107/200, yPos+charSize*114/200, charSize*17/200, charSize*16/200);
ellipse(xPos+charSize*125/200, yPos+charSize*91/200, charSize*17/200, charSize*16/200);
ellipse(xPos+charSize*125/200, yPos+charSize*98/200, charSize*17/200, charSize*16/200);
ellipse(xPos+charSize*116/200, yPos+charSize*98/200, charSize*17/200, charSize*19/200);


//Hair outer line start
stroke(0, 0, 0);
fill(170, 170, 172);
strokeWeight(5*charSize/200);
bezier(xPos+charSize*69/200, yPos-charSize*149/200, xPos+charSize*54/200, yPos-charSize*175/200, xPos-charSize*7/200, yPos-charSize*196/200, xPos-charSize*49/200, yPos-charSize*173/200);
bezier(xPos-charSize*49/200, yPos-charSize*173/200, xPos-charSize*100/200, yPos-charSize*157/200, xPos-charSize*95/200, yPos-charSize*137/200, xPos-charSize*109/200, yPos-charSize*105/200);
bezier(xPos-charSize*109/200, yPos-charSize*105/200, xPos-charSize*109/200, yPos-charSize*105/200, xPos-charSize*109/200, yPos-charSize*105/200, xPos-charSize*109/200, yPos-charSize*105/200);
line(xPos-charSize*109/200, yPos-charSize*103.5/200, xPos-charSize*93/200, yPos-charSize*41/200);
line (xPos-charSize*93/200, yPos-charSize*41/200, xPos-charSize*80/200, yPos-charSize*48/200);
noFill();
bezier(xPos-charSize*80/200, yPos-charSize*48/200, xPos-charSize*80/200, yPos-charSize*64/200, xPos-charSize*82/200, yPos-charSize*123/200, xPos-charSize*50/200, yPos-charSize*127/200);
bezier(xPos-charSize*50/200, yPos-charSize*127/200, xPos-charSize*8/200, yPos-charSize*118/200, xPos+charSize*26/200, yPos-charSize*118/200, xPos+charSize*58/200, yPos-charSize*122/200);
bezier(xPos+charSize*58/200, yPos-charSize*122/200, xPos+charSize*87/200, yPos-charSize*104.1/200, xPos+charSize*88/200, yPos-charSize*85/200, xPos+charSize*90/200, yPos-charSize*37/200);
line (xPos+charSize*90/200, yPos-charSize*37/200, xPos+charSize*106/200, yPos-charSize*44/200);
fill(170, 170, 172);
bezier(xPos+charSize*106/200, yPos-charSize*44/200, xPos+charSize*131/200, yPos-charSize*90/200, xPos+charSize*112/200, yPos-charSize*151/200, xPos+charSize*69/200, yPos-charSize*149/200);
noFill();


//Hair inner line start
bezier(xPos-charSize*50/200, yPos-charSize*127/200, xPos-charSize*70/200, yPos-charSize*129/200, xPos-charSize*86/200, yPos-charSize*127/200, xPos-charSize*104/200, yPos-charSize*84/200);
bezier(xPos-charSize*2/200, yPos-charSize*121/200, xPos-charSize*27/200, yPos-charSize*154/200, xPos-charSize*66/200, yPos-charSize*159/200, xPos-charSize*99/200, yPos-charSize*132/200);
bezier(xPos+charSize*39/200, yPos-charSize*120/200, xPos+charSize*13/200, yPos-charSize*169/200, xPos+charSize*12/200, yPos-charSize*161/200, xPos-charSize*49/200, yPos-charSize*173/200);
line (xPos+charSize*58/200, yPos-charSize*122/200, xPos+charSize*69/200, yPos-charSize*149/200);
bezier(xPos+charSize*58/200, yPos-charSize*122/200, xPos+charSize*94/200, yPos-charSize*118/200, xPos+charSize*100/200, yPos-charSize*109/200, xPos+charSize*115/200, yPos-charSize*80/200);


//Ear line start
bezier(xPos-charSize*93/200, yPos-charSize*41/200,xPos-charSize*93/200, yPos-charSize*26/200, xPos-charSize*99/200, yPos-charSize*22/200, xPos-charSize*72/200, yPos+charSize*2/200); // Ear
bezier(xPos+charSize*106/200, yPos-charSize*44/200, xPos+charSize*104/200, yPos-charSize*15/200, xPos+charSize*103/200, yPos-charSize*17/200, xPos+charSize*87/200, yPos-charSize*1/200); 
line (xPos+charSize*90/200, yPos-charSize*37/200, xPos+charSize*87/200, yPos-charSize*1/200);
line (xPos-charSize*72/200, yPos+charSize*2/200, xPos-charSize*80/200, yPos-charSize*48/200);


//Face line start
bezier(xPos-charSize*72/200, yPos+charSize*2/200, xPos-charSize*64/200, yPos+charSize*39/200, xPos-charSize*21/200, yPos+charSize*44/200, xPos+charSize*5/200, yPos+charSize*47/200);
bezier(xPos+charSize*5/200, yPos+charSize*47/200, xPos+charSize*80/200, yPos+charSize*33/200, xPos+charSize*84/200, yPos+charSize*10/200, xPos+charSize*87/200, yPos-charSize*1/200);
strokeWeight(3*charSize/200);
line (xPos+charSize*34/200, yPos+charSize*40/200, xPos+charSize*49/200, yPos+charSize*23/200);
line (xPos-charSize*22/200, yPos+charSize*40/200, xPos-charSize*34/200, yPos+charSize*23/200);


//Face start
fill(255, 255, 255);
arc(xPos+charSize*6/200, yPos-charSize*6/200, charSize*85/200, charSize*2/20, -5, 185); // Teeth
bezier(xPos-charSize*36/200, yPos-charSize*6/200, xPos+charSize*10/200, yPos-charSize*2/200, xPos+charSize*2/200, yPos-charSize*5/200, xPos+charSize*48/200, yPos-charSize*6/200); // Lips
noStroke();
fill(247, 182, 164);
ellipse(xPos-charSize*51/200, yPos-charSize*25/200, charSize*29/200, charSize*29/200);
ellipse(xPos+charSize*63/200, yPos-charSize*25/200, charSize*29/200, charSize*29/200);
fill(0, 0, 0);
arc(xPos+charSize*6/200, yPos-charSize*24/200, charSize*19/200, charSize*8/200, -5, 185); //Noes
noFill();
strokeWeight(2.5*charSize/200);
stroke(0,0,0);
ellipse(xPos+charSize*46.4/200, yPos-charSize*43/200, charSize*6/20, charSize*52/200); // Glasses
ellipse(xPos-charSize*34.6/200, yPos-charSize*43/200, charSize*6/20, charSize*52/200); 
arc(xPos+charSize*6/200, yPos-charSize*52/200, charSize*25/200, charSize*15/200, -168, -2); 
fill(170, 170, 172);
strokeWeight(3.5*charSize/200);
bezier(xPos-charSize*64/200, yPos-charSize*71/200, xPos-charSize*43/200, yPos-charSize*91/200, xPos-charSize*28/200, yPos-charSize*74/200, xPos-charSize*8/200, yPos-charSize*71/200); //Left eyebrow
line (xPos-charSize*64/200, yPos-charSize*71/200, xPos-charSize*12.5/200, yPos-charSize*71/200); 
bezier(xPos+charSize*23/200, yPos-charSize*71/200, xPos+charSize*40/200, yPos-charSize*71/200, xPos+charSize*57/200, yPos-charSize*91/200, xPos+charSize*72.5/200, yPos-charSize*71/200); 
line (xPos+charSize*23/200, yPos-charSize*71/200, xPos+charSize*70.5/200, yPos-charSize*71/200); 


//Left eye start
fill(255, 255, 255);
noStroke();
arc(xPos-charSize*33/200, yPos-charSize*50/200, charSize*38/200, charSize*15/200, -193.2, 19); 
arc(xPos-charSize*33/200, yPos-charSize*50/200, charSize*38/200, charSize*15/200, 10, 170.4);
noFill();
stroke(0, 0, 0);
strokeWeight(3.5*charSize/200);
bezier(xPos-charSize*53/200, yPos-charSize*49/200, xPos-charSize*43/200, yPos-charSize*59/200, xPos-charSize*19/200, yPos-charSize*65/200, xPos-charSize*13/200, yPos-charSize*51/200);
fill(0, 0, 0);
ellipse(xPos-charSize*30.5/200, yPos-charSize*50.3/200, charSize*16/200, charSize*15.5/200);
fill(255, 255, 255);
noStroke();
ellipse(xPos-charSize*34/200, yPos-charSize*54.1/200, charSize*5/200, charSize*5/200);


//Right eye start
arc(xPos+charSize*45/200, yPos-charSize*50/200, charSize*38/200, charSize*15/200, -193.2, 19); 
arc(xPos+charSize*45/200, yPos-charSize*50/200, charSize*38/200, charSize*15/200, 10, 170.4);
noFill();
stroke(0, 0, 0);
strokeWeight(3.5*charSize/200);
bezier(xPos+charSize*25/200, yPos-charSize*51/200, xPos+charSize*27/200, yPos-charSize*59/200, xPos+charSize*50/200, yPos-charSize*65/200, xPos+charSize*66/200, yPos-charSize*48/200);
fill(0, 0, 0);
ellipse(xPos+charSize*44/200, yPos-charSize*50.3/200, charSize*16/200, charSize*15.5/200);
fill(255, 255, 255);
noStroke();
ellipse(xPos+charSize*41/200, yPos-charSize*53/200, charSize*5/200, charSize*5/200);




// Suit start
// Necktie start
stroke(0, 0, 0);
strokeWeight(4*charSize/200);
line (xPos-charSize*31/200, yPos+charSize*40/200, xPos+charSize*6/200, yPos+charSize*94/200);
line (xPos+charSize*44/200, yPos+charSize*40/200, xPos+charSize*6/200, yPos+charSize*94/200);
fill(0, 109, 164);
strokeWeight(3*charSize/200);
noStroke();
quad(xPos-charSize*9/200, yPos+charSize*71/200, xPos-charSize*1/200, yPos+charSize*57/200, xPos+charSize*14/200, yPos+charSize*57/200, xPos+charSize*21/200, yPos+charSize*72/200);
fill(0, 109, 164);
triangle(xPos-charSize*7/200, yPos+charSize*71/200, xPos+charSize*6/200, yPos+charSize*93/200, xPos+charSize*20/200, yPos+charSize*71/200);
stroke(0, 0, 0);
line (xPos-charSize*10/200, yPos+charSize*68/200, xPos-charSize*1/200, yPos+charSize*58/200);
line (xPos-charSize*1/200, yPos+charSize*58/200, xPos+charSize*13/200, yPos+charSize*58/200);
line (xPos+charSize*13/200, yPos+charSize*58/200, xPos+charSize*21/200, yPos+charSize*67/200);
line (xPos+charSize*12/200, yPos+charSize*57/200, xPos-charSize*1/200, yPos+charSize*57/200);
line (xPos+charSize*14/200, yPos+charSize*57/200, xPos+charSize*20/200, yPos+charSize*45/200);
line (xPos-charSize*1/200, yPos+charSize*57/200, xPos-charSize*8/200, yPos+charSize*46/200);
noStroke();
quad(xPos+charSize*12/200, yPos+charSize*57/200, xPos-charSize*1/200, yPos+charSize*57/200,xPos-charSize*5/200, yPos+charSize*48/200, xPos+charSize*17/200, yPos+charSize*48/200);
fill(255, 255, 255);
quad(xPos+charSize*22/200, yPos+charSize*67/200, xPos+charSize*41/200, yPos+charSize*42/200,xPos+charSize*20/200, yPos+charSize*47/200, xPos+charSize*15/200, yPos+charSize*58/200);
quad(xPos-charSize*10/200, yPos+charSize*65/200, xPos-charSize*25/200, yPos+charSize*45/200,xPos-charSize*9/200, yPos+charSize*48/200, xPos-charSize*3/200, yPos+charSize*58/200);
noFill();
strokeWeight(4*charSize/200);
stroke(0, 0, 0);
//Arm start
bezier(xPos+charSize*56/200, yPos+charSize*34/200, xPos+charSize*61/200, yPos+charSize*20/200, xPos+charSize*164/200, yPos+charSize*87/200, xPos+charSize*123/200, yPos+charSize*113/200);
bezier(xPos+charSize*123/200, yPos+charSize*113/200, xPos+charSize*113/200, yPos+charSize*122/200, xPos+charSize*116/200, yPos+charSize*120/200, xPos+charSize*108/200, yPos+charSize*123/200);
fill(252, 200, 179);
arc(xPos+charSize*99/200, yPos+charSize*120/200, charSize*15/200, charSize*18/200, 1, 202); //Finger :)
noFill();
line (xPos+charSize*88/200, yPos+charSize*115/200, xPos+charSize*125/200, yPos+charSize*78/200);
bezier(xPos+charSize*88/200, yPos+charSize*115/200, xPos+charSize*72/200, yPos+charSize*111/200, xPos+charSize*88/200, yPos+charSize*115/200, xPos+charSize*74/200, yPos+charSize*36/200);
line (xPos+charSize*81/200, yPos+charSize*113/200, xPos+charSize*86/200, yPos+charSize*142/200);
line (xPos+charSize*85/200, yPos+charSize*142/200, xPos-charSize*71/200, yPos+charSize*142/200);
bezier(xPos-charSize*74/200, yPos+charSize*142/200, xPos-charSize*70/200, yPos+charSize*111/200, xPos-charSize*64/200, yPos+charSize*115/200, xPos-charSize*67/200, yPos+charSize*40/200);
bezier(xPos-charSize*48/200, yPos+charSize*34/200, xPos-charSize*48/200, yPos+charSize*34/200, xPos-charSize*101/200, yPos+charSize*34/200, xPos-charSize*113/200, yPos+charSize*92/200);
line (xPos-charSize*113/200, yPos+charSize*92/200, xPos-charSize*72/200, yPos+charSize*116/200);
fill(252, 200, 179);
arc(xPos-charSize*92/200, yPos+charSize*106/200, charSize*5/20, charSize*5/20, 30, 208);
fill(84, 83, 88);
//ellipse(206, 318, 13, 13);
strokeWeight(3*charSize/200);
rect(xPos-charSize*1/200, yPos+charSize*112/200, charSize*13/200, charSize*13/200);//botton
strokeWeight(4*charSize/200);


//Text
fill(240, 138, 12);
textFont(0,charSize*1/20);
text("Mr.Moon", xPos+charSize*31/200, yPos+charSize*76/200);

//Pocket
strokeWeight(3*charSize/200);
fill(40, 55, 96);
rect(xPos-charSize*52/200, yPos+charSize*89/200, charSize*32/200, charSize*8/200);

};

var monkey = function(xPos, yPos, charSize)
{
    //Variables
    //xPos = 200
    //yPos = 200
    //charSize = 200
    //*charSize/200
    var xPos= xPos; //x Position
    var yPos= yPos; //y Position
    var charSize = charSize; //standardized size of character
    var font = createFont("fantasy");
    
    fill(0, 0, 0); //black
    ellipse( xPos+charSize*50/200, yPos-charSize*90/200, charSize*60/200, charSize*60/200);// right ear border
    ellipse( xPos-charSize*50/200, yPos-charSize*90/200, charSize*60/200, charSize*60/200);// left ear border
    
    fill(240, 217, 170); //beige
    ellipse( xPos+charSize*50/200, yPos-charSize*90/200, charSize*50/200, charSize*50/200); //right ear
    ellipse( xPos-charSize*50/200, yPos-charSize*90/200, charSize*50/200, charSize*50/200); //left ear
    
    fill (0, 0, 0); //black
    ellipse( xPos+charSize/100, yPos-charSize*75/200, charSize*115/200, charSize*100/200); //upper face border
    
    fill(240, 217, 170); //beige
    ellipse( xPos+charSize/100 , yPos-charSize*75/200, charSize*95/200, charSize*80/200); //upper face
    strokeWeight(7*charSize/400);
    ellipse( xPos+charSize/100, yPos-charSize*20/200, charSize*150/200, charSize*50/200); //lower face
    
    strokeWeight(0.5*charSize/200);
    fill(255, 0, 0);//red
    arc( xPos+charSize/100, yPos-charSize*20/200, charSize*125/200, charSize*15/200, 180, 360); //mouth (upper arc)
    arc( xPos+charSize/100, yPos-charSize*20/200, charSize*125/200, charSize*25/200, 0, 180); //mouth (lower arc)
    
    
    
    fill(0, 0 ,0); //black
    ellipse (xPos-charSize*7.5/200, yPos-charSize*55/200, charSize*5/200, charSize*5/200); // left nose   
    ellipse (xPos+charSize*7.5/200, yPos-charSize*55/200, charSize*5/200, charSize*5/200); // right nose
    
    ellipse ( xPos-charSize*17.5/200, yPos-charSize*77.5/200, charSize*12.5/200, charSize*17.5/200); // left eye
    ellipse ( xPos+charSize*17.5/200, yPos-charSize*77.5/200, charSize*12.5/200, charSize*17.5/200); // right eye

strokeWeight(2.5*charSize/200);
noFill();

//tail
//fill(255, 255, 255); //beige
noFill();
bezier(xPos+77*charSize/200, yPos+61*charSize/200, xPos+82*charSize/200, yPos+91*charSize/200, xPos+64*charSize/200, yPos+97*charSize/200, xPos+54*charSize/200, yPos+92*charSize/200);
bezier(xPos+68*charSize/200, yPos+57*charSize/200, xPos+66*charSize/200, yPos+7*charSize/200, xPos+102*charSize/200, yPos-11*charSize/200, xPos+111*charSize/200, yPos+18*charSize/200);
bezier(xPos+111*charSize/200, yPos+19*charSize/200, xPos+125*charSize/200, yPos+47*charSize/200, xPos+96*charSize/200, yPos+52*charSize/200, xPos+99*charSize/200, yPos+27*charSize/200);

noFill();// no color
bezier(xPos+43*charSize/200, yPos+72*charSize/200, xPos+79*charSize/200, yPos+113*charSize/200, xPos+65*charSize/200, yPos+42*charSize/200, xPos+68*charSize/200, yPos+55*charSize/200);
bezier(xPos+99*charSize/200, yPos+25*charSize/200, xPos+96*charSize/200, yPos+1*charSize/200, xPos+74*charSize/200, yPos+30*charSize/200, xPos+77*charSize/200, yPos+59*charSize/200);


//coat(right)
fill(69, 37, 8); //brown
bezier(xPos-7*charSize/200, yPos+7*charSize/200, xPos-8*charSize/200, yPos+41*charSize/200, xPos+1*charSize/200, yPos+73*charSize/200, xPos-36*charSize/200, yPos+69*charSize/200);

noFill();
bezier(xPos-23*charSize/200, yPos+6*charSize/200, xPos-23*charSize/200, yPos+12*charSize/200, xPos-32*charSize/200, yPos+27*charSize/200, xPos-36*charSize/200, yPos+22*charSize/200);
line(xPos-36*charSize/200,yPos+26*charSize/200,xPos-36*charSize/200,yPos+33*charSize/200);
line(xPos-36*charSize/200,yPos+33*charSize/200,xPos-32*charSize/200,yPos+32*charSize/200);
bezier(xPos-30*charSize/200, yPos+32*charSize/200, xPos-28*charSize/200, yPos+50*charSize/200, xPos-32*charSize/200, yPos+58*charSize/200, xPos-36*charSize/200, yPos+66*charSize/200);


//coat(left)
fill(69, 37, 8); //brown
bezier(xPos+10*charSize/200, yPos+5*charSize/200, xPos+13*charSize/200, yPos+47*charSize/200, xPos+11*charSize/200, yPos+71*charSize/200, xPos+49*charSize/200, yPos+67*charSize/200);

noFill();
bezier(xPos+31*charSize/200, yPos+4*charSize/200, xPos+32*charSize/200, yPos+11*charSize/200, xPos+36*charSize/200, yPos+16*charSize/200, xPos+46*charSize/200, yPos+20*charSize/200);
line(xPos+46*charSize/200,yPos+20*charSize/200,xPos+44*charSize/200,yPos+37*charSize/200);  
line(xPos+44*charSize/200,yPos+37*charSize/200,xPos+40*charSize/200,yPos+33*charSize/200);
bezier(xPos+41*charSize/200, yPos+33*charSize/200, xPos+39*charSize/200, yPos+44*charSize/200, xPos+38*charSize/200, yPos+54*charSize/200, xPos+47*charSize/200, yPos+66*charSize/200);


//body
fill(0, 0, 0); //black
bezier(xPos-32*charSize/200, yPos+71*charSize/200, xPos-36*charSize/200, yPos+99*charSize/200, xPos+47*charSize/200, yPos+99*charSize/200, xPos+43*charSize/200, yPos+69*charSize/200);
fill(240, 217, 170); //beige
bezier(xPos-13*charSize/200, yPos+63*charSize/200, xPos-15*charSize/200, yPos+89*charSize/200, xPos+25*charSize/200, yPos+88*charSize/200, xPos+23*charSize/200, yPos+64*charSize/200);

noFill();
bezier(xPos-6*charSize/200, yPos+23, xPos-1*charSize/200, yPos+34*charSize/200, xPos+6*charSize/200, yPos+34*charSize/200, xPos+11*charSize/200, yPos+22);


//right leg
fill(0, 0, 0); //color
bezier(xPos-31*charSize/200, yPos+80*charSize/200, xPos-56*charSize/200, yPos+113*charSize/200, xPos-17*charSize/200, yPos+109*charSize/200, xPos-10*charSize/200, yPos+128*charSize/200);

noFill();
bezier(xPos-18*charSize/200, yPos+90*charSize/200, xPos-37*charSize/200, yPos+113*charSize/200, xPos+14*charSize/200, yPos+112*charSize/200, xPos+5*charSize/200, yPos+131*charSize/200);

//left leg
noFill();
bezier(xPos+40*charSize/200, yPos+80*charSize/200, xPos+80*charSize/200, yPos+111*charSize/200, xPos+30*charSize/200, yPos+113*charSize/200, xPos+27*charSize/200, yPos+128*charSize/200);
bezier(xPos+36*charSize/200, yPos+88*charSize/200, xPos+59*charSize/200, yPos+109*charSize/200, xPos+8*charSize/200, yPos+107*charSize/200, xPos+14*charSize/200, yPos+131*charSize/200);



//feet 
fill(240, 217, 170); //beige
bezier(xPos-39*charSize/200, yPos+136*charSize/200, xPos-29*charSize/200, yPos+126*charSize/200, xPos-20*charSize/200, yPos+124*charSize/200, xPos+4*charSize/200, yPos+133*charSize/200);
bezier(xPos+15*charSize/200, yPos+132*charSize/200, xPos+29*charSize/200, yPos+125*charSize/200, xPos+45*charSize/200, yPos+123*charSize/200, xPos+61*charSize/200, yPos+132*charSize/200);


//left hand
fill(0, 0, 0); //color
bezier(xPos+87*charSize/200, yPos-29*charSize/200, xPos+81*charSize/200, yPos-9*charSize/200, xPos+59*charSize/200, yPos+11*charSize/200, xPos+41*charSize/200, yPos+17*charSize/200);

noFill();
bezier(xPos+76*charSize/200, yPos-37*charSize/200, xPos+66*charSize/200, yPos-8*charSize/200, xPos+54*charSize/200, yPos+8*charSize/200, xPos+33*charSize/200, yPos+7*charSize/200);


//right hand
fill(0, 0, 0); //color
bezier(xPos-33*charSize/200, yPos+41*charSize/200, xPos-55*charSize/200, yPos+46*charSize/200, xPos-65*charSize/200, yPos+43*charSize/200, xPos-82*charSize/200, yPos+29*charSize/200);

noFill();
bezier(xPos-36*charSize/200, yPos+24*charSize/200, xPos-54*charSize/200, yPos+31*charSize/200, xPos-64*charSize/200, yPos+28*charSize/200, xPos-76*charSize/200, yPos+14*charSize/200);




//COLOR FILL//
//left hand
fill(0, 0, 0);
strokeWeight(1*charSize/200);
ellipse(xPos+79*charSize/200,yPos-29*charSize/200,13*charSize/200,11*charSize/200);
ellipse(xPos+75*charSize/200,yPos-20*charSize/200,12*charSize/200,11*charSize/200);
ellipse(xPos+71*charSize/200,yPos-11*charSize/200,11*charSize/200,11*charSize/200);
ellipse(xPos+39*charSize/200,yPos+11*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos+48*charSize/200,yPos+9*charSize/200,9*charSize/200,9*charSize/200);
ellipse(xPos+54*charSize/200,yPos+6*charSize/200,9*charSize/200,11*charSize/200);
ellipse(xPos+66*charSize/200,yPos-4*charSize/200,9*charSize/200,11*charSize/200);
ellipse(xPos+59*charSize/200,yPos+1*charSize/200,9*charSize/200,8*charSize/200);

//right hand 
ellipse(xPos-37*charSize/200,yPos+33*charSize/200,16*charSize/200,14*charSize/200);
ellipse(xPos-47*charSize/200,yPos+33*charSize/200,16*charSize/200,12*charSize/200);
ellipse(xPos-62*charSize/200,yPos+32*charSize/200,16*charSize/200,12*charSize/200);
ellipse(xPos-73*charSize/200,yPos+26*charSize/200,15*charSize/200,14*charSize/200);

//right leg
ellipse(xPos-28*charSize/200,yPos+90*charSize/200,16*charSize/200,14*charSize/200);
ellipse(xPos-16*charSize/200,yPos+114*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos-10*charSize/200,yPos+119*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos-5*charSize/200,yPos+122*charSize/200,12*charSize/200,12*charSize/200);
ellipse(xPos+1*charSize/200,yPos+127*charSize/200,10*charSize/200,11*charSize/200);

//left leg
ellipse(xPos+39*charSize/200,yPos+85*charSize/200,10*charSize/200,9*charSize/200);
ellipse(xPos+45*charSize/200,yPos+91*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos+49*charSize/200,yPos+98*charSize/200,11*charSize/200,10*charSize/200);
ellipse(xPos+47*charSize/200,yPos+104*charSize/200,13*charSize/200,10*charSize/200);
ellipse(xPos+41*charSize/200,yPos+109*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos+34*charSize/200,yPos+113*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos+27*charSize/200,yPos+118*charSize/200,10*charSize/200,10*charSize/200);
ellipse(xPos+21*charSize/200,yPos+122*charSize/200,12*charSize/200,11*charSize/200);
ellipse(xPos+18*charSize/200,yPos+126*charSize/200,9*charSize/200,8*charSize/200);

//tail
ellipse(xPos+45*charSize/200,yPos+80*charSize/200,7*charSize/200,8*charSize/200);
ellipse(xPos+51*charSize/200,yPos+85*charSize/200,9*charSize/200,9*charSize/200);
ellipse(xPos+59*charSize/200,yPos+89*charSize/200,11*charSize/200,8*charSize/200);
ellipse(xPos+67*charSize/200,yPos+87*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+71*charSize/200,yPos+82*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+72*charSize/200,yPos+76*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+73*charSize/200,yPos+70*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+73*charSize/200,yPos+64*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+73*charSize/200,yPos+58*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+73*charSize/200,yPos+52*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+73*charSize/200,yPos+46*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+74*charSize/200,yPos+40*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+75*charSize/200,yPos+35*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+77*charSize/200,yPos+29*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+79*charSize/200,yPos+24*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+82*charSize/200,yPos+19*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+85*charSize/200,yPos+15*charSize/200,8*charSize/200,7*charSize/200);
ellipse(xPos+89*charSize/200,yPos+12*charSize/200,8*charSize/200,8*charSize/200);
ellipse(xPos+94*charSize/200,yPos+10*charSize/200,9*charSize/200,9*charSize/200);
ellipse(xPos+100*charSize/200,yPos+11*charSize/200,9*charSize/200,9*charSize/200);
ellipse(xPos+103*charSize/200,yPos+17*charSize/200,13*charSize/200,13*charSize/200);
ellipse(xPos+106*charSize/200,yPos+24*charSize/200,13*charSize/200,13*charSize/200);
ellipse(xPos+107*charSize/200,yPos+30*charSize/200,13*charSize/200,15*charSize/200);
ellipse(xPos+107*charSize/200,yPos+35*charSize/200,13*charSize/200,15*charSize/200);

//body
noStroke();
fill(240, 217, 170); //beige
ellipse(xPos-3*charSize/200,yPos+63*charSize/200,14*charSize/200,12*charSize/200);
ellipse(xPos+14*charSize/200, yPos+63*charSize/200,14*charSize/200,11*charSize/200);
rect(xPos-6*charSize/200,yPos+33*charSize/200,17*charSize/200,37*charSize/200);
triangle(xPos-12*charSize/200,yPos+63*charSize/200,xPos+1*charSize/200,yPos+36*charSize/200,xPos+2*charSize/200,yPos+72*charSize/200);
triangle(xPos+21*charSize/200,yPos+65*charSize/200,xPos+2*charSize/200,yPos+29*charSize/200,xPos+6*charSize/200,yPos+64*charSize/200);
triangle(xPos-1*charSize/200,yPos+42*charSize/200,xPos+9*charSize/200,yPos+27*charSize/200,xPos+17*charSize/200,yPos+64*charSize/200);
triangle(xPos-1*charSize/200,yPos+32*charSize/200,xPos-6*charSize/200,yPos+29*charSize/200,xPos+10*charSize/200,yPos+76*charSize/200);

fill(0, 0, 0); //black
triangle(xPos-33*charSize/200,yPos+72*charSize/200,xPos-13*charSize/200,yPos+64*charSize/200,xPos-12*charSize/200,yPos+70*charSize/200);
triangle(xPos+43*charSize/200,yPos+69*charSize/200,xPos+24*charSize/200,yPos+64*charSize/200,xPos+23*charSize/200,yPos+79*charSize/200);

rect(xPos-5*charSize/200,yPos+6*charSize/200,13*charSize/200,15*charSize/200);
ellipse(xPos+2*charSize/200,yPos+18*charSize/200,15*charSize/200,23*charSize/200);


//coat(right)
fill(69, 37, 8); //brown
rect(xPos-22*charSize/200,yPos+6*charSize/200,14*charSize/200,38*charSize/200);
ellipse(xPos-21*charSize/200,yPos+55*charSize/200,17*charSize/200,17*charSize/200);
ellipse(xPos-21*charSize/200,yPos+45*charSize/200,16*charSize/200,43*charSize/200);
ellipse(xPos-28*charSize/200,yPos+25*charSize/200,16*charSize/200,5*charSize/200);
triangle(xPos-20*charSize/200,yPos+6*charSize/200,xPos-12*charSize/200,yPos+35*charSize/200,xPos-30*charSize/200,yPos+23*charSize/200);
ellipse(xPos-27*charSize/200,yPos+32*charSize/200,5*charSize/200,5*charSize/200);
ellipse(xPos-28*charSize/200,yPos+29*charSize/200,8*charSize/200,5*charSize/200);

//coat(left)
rect(xPos+16*charSize/200,yPos+5*charSize/200,14*charSize/200,33*charSize/200);
triangle(xPos+26*charSize/200,yPos+5*charSize/200,xPos+11*charSize/200,yPos+6*charSize/200,xPos+30*charSize/200,yPos+58*charSize/200);
triangle(xPos+42*charSize/200,yPos+27*charSize/200,xPos+28*charSize/200,yPos+2*charSize/200,xPos+29*charSize/200,yPos+56*charSize/200);
triangle(xPos+31*charSize/200,yPos+43*charSize/200,xPos+40*charSize/200,yPos+26*charSize/200,xPos+39*charSize/200,yPos+56*charSize/200);
triangle(xPos+45*charSize/200,yPos+20*charSize/200,xPos+35*charSize/200,yPos+15*charSize/200,xPos+43*charSize/200,yPos+35*charSize/200);
ellipse(xPos+40*charSize/200,yPos+30*charSize/200,8*charSize/200,5*charSize/200);

//hands
fill(240, 217, 170); //beige
ellipse(xPos-87*charSize/200,yPos+15*charSize/200,30*charSize/200,30*charSize/200);
ellipse(xPos+85*charSize/200,yPos-41*charSize/200,30*charSize/200,30*charSize/200);

//feet
stroke(0, 0, 0);
strokeWeight(2.5*charSize/200);
line(xPos-40*charSize/200,yPos+137*charSize/200,xPos+4*charSize/200,yPos+134*charSize/200);
line(xPos+61*charSize/200,yPos+133*charSize/200,xPos+15*charSize/200,yPos+134*charSize/200);
noStroke();
    
};

var UFO = function(xPos,yPos,charSize)
{
    
    stroke(0,0,0);
    fill(189, 185, 189);
    strokeWeight(charSize*3/300);
    arc(xPos+charSize*35/300,yPos+charSize*180/300,charSize*100/300,charSize*100/300,0,210);//1
    arc(xPos+charSize*165/300,yPos+charSize*180/300,charSize*100/300,charSize*100/300,0,210);//2
    fill(224, 221, 221);
    arc(xPos+charSize*100/300,yPos+charSize*195/300,charSize*110/300,charSize*100/300,0,210);//439


    strokeWeight(charSize*3/300);
    fill(191, 52, 52);
    arc(xPos+charSize*100/300,yPos+charSize*145/300,charSize*320/300,charSize*135/300,0,360); //body1
    arc(xPos+charSize*100/300,yPos+charSize*136/300,charSize*320/300,charSize*111/300,0,360); //body2(upper)



    line(xPos+charSize*100/300,yPos+charSize*-50/300,xPos+charSize*100/300,yPos+charSize*22/300);//string


    fill(191, 52, 52);
    arc(xPos+charSize*100/300,yPos+charSize*-50/300,charSize*30/300,charSize*30/300,0,360);//ball


    fill(204, 116, 49);
    arc(xPos+charSize*-5/300,yPos+charSize*155/300,charSize*35/300,charSize*15/300,0,360); //button
    fill(219, 212, 72);
    arc(xPos+charSize*-30/300,yPos+charSize*138/300,charSize*32/300,charSize*15/300,0,360); //button


    strokeWeight(charSize*3/300);
    fill(168, 215, 230);
    arc(xPos+charSize*100/300,yPos+charSize*100/300,charSize*183/300,charSize*150/300,191,383); // window


    fill(168, 215, 230); //bottom window
    beginShape();
    curveVertex(xPos+charSize*177/300,yPos+charSize*72/300); 
    curveVertex(xPos+charSize*191/300,yPos+charSize*90/300); 
    curveVertex(xPos+charSize*194/300,yPos+charSize*126/300);
    curveVertex(xPos+charSize*164/300,yPos+charSize*140/300);
    curveVertex(xPos+charSize*134/300,yPos+charSize*144/300);
    curveVertex(xPos+charSize*100/300,yPos+charSize*144/300);
    curveVertex(xPos+charSize*52/300,yPos+charSize*141/300);
    curveVertex(xPos+charSize*20/300,yPos+charSize*136/300);
    curveVertex(xPos+charSize*2/300,yPos+charSize*125/300);


    curveVertex(xPos+charSize*10/300, yPos+charSize*86/300); //upper
    curveVertex(xPos+charSize*39/300, yPos+charSize*40/300);
endShape();



    fill(191, 52, 52);
    arc(xPos+charSize*100/300,yPos+charSize*27/300,charSize*100/300,charSize*40/300,30,151);//bottom roof
    fill(191, 52, 52);
    arc(xPos+charSize*100/300,yPos+charSize*44/300,charSize*103/300,charSize*37/300,210,332);//upper roof
    
};
var UFO_beam = function(A1_x, A1_y, A2_x, A2_y, A3_x, A3_y, A4_x, A4_y, alpa)
{
    fill(255, 255, 0, alpa);
    noStroke();
    quad(A1_x, A1_y, A2_x, A2_y, A3_x, A3_y, A4_x, A4_y);
};

var Comment = function(xPos, yPos, _comment)
{
    var box_xPos = xPos+38;
    var box_yPos = yPos-124;
    var text_size = _comment.length;
    noStroke();
    
    fill(255, 255, 255);
    if(text_size > 15) 
    {
        ellipse(box_xPos, box_yPos, text_size * 10, text_size * 2);
    }
    else if(text_size <= 15) 
    {
        ellipse(box_xPos, box_yPos, 120, 40);
    }
    triangle(box_xPos, box_yPos, box_xPos-30, box_yPos, box_xPos-40, box_yPos+35);
    fill(0, 0, 0);
    textSize(12);
    text(_comment, box_xPos-text_size * 3.5, box_yPos+7);
};


// ########################################################
// ################### Assign Variables ###################
// ########################################################



{
var scene = -1;

// background variables
var cloud1 = 40;
var cloud2 = 430;
var cloud3 = 265;

// papago's variables
var papago_sinAngle = 0;
var papago_eye_h_size = 15;
var papago_feather_degree = 100;
var counter = 0;
var eye_flag = true;
var feat_flag = false;
var feat_state_flag = true;

// kim's variables
var kim_legMove = 0;
var kim_LEGMOVEPEAK = 13;
var kim_RIGHTLEG = true;
var kim_LEFTLEG = false;
var kim_legMoveFlag = true;
var kim_charSize = 80;
var kim_xPos = 700;
var kim_yPos = 0;
var kim_show = true;

// moon's variables
var moon_xPos = -100;
var moon_yPos = 0;
var moon_left = 0;
var moon_right = 0;
var moon_legflag = 1;
var moon_speed = 0.6;

// jjangu's variables
var jjangu_legmove = 0;
var jjangu_legmovepeak = 13;
var jjangu_rightleg = true;
var jjangu_leftleg = false;
var jjangu_legmoveflag = false;
var jjangu_xPos = -200;
var jjangu_yPos = 0;


// ryan's variables
var ryan_legMove = 0;
var ryan_LEGMOVEPEAK = 14;
var ryan_RIGHTLEG = true;
var ryan_LEFTLEG = false;
var ryan_legMoveFlag = true;
var ryan_xPos = 800;
var ryan_yPos = 0;
var ryan_legSpeed = 0.9;
var ryan_mouthMove = 5;
var ryan_mouthFlag = false;
var ryan_mouth = false;
var ryan_sweat = false;

var ryan_scene_count = 0;



// monkey's variables
var monkey_xPos = 435;
var monkey_yPos = 194;
var monkey_YPOS = monkey_yPos;
var monkey_charSize = 50;
var monkey_jumpFlag = true;
var monkey_show = true;

// UFO's variables
var UFO_xPos = -120;
var UFO_yPos = 30;
var UFO_YPOS = UFO_yPos;
var UFO_charSize = 110;
var UFO_flag = false;
var UFO_move = false;
var UFO_STOP_POS = 365;
var UFO_quad_yPos = 110;
var UFO_ALPA = 60;
var A3 = [375, 110];    // top left
var A2 = A3;    // bottom left

var A4 = [430, 110];    // top right
var A1 = A4;    // bottom right

var A2_POS = [330, 580];
var A1_POS = [475, 580];

// star's variales
var Star_flag = false;
var Star_charSize = 100;

// Scene const variables.



}

// #####################################################
// ################### Infinite Loop ###################
// #####################################################
draw = function() {
    // #####################################################
    // ################### backgrounding ###################
    // #####################################################
//cloud move
{   
    Jsa_Background(cloud1, cloud2, cloud3);
    
    if(cloud1 > 700) { cloud1 = -200; }
    if(cloud2 > 700) { cloud2 = -200; }
    if(cloud3 > 700) { cloud3 = -200; }
    
    if(scene === 5) { }
    else
    {
        cloud1 += 1 * 0.4;
        cloud2 += 1 * 0.56;
        cloud3 += 1 * 0.85;
    }
}  
    // ##################################################
    // ##################### Scene ######################
    // ##################################################
// scene #0 : Whole charactor move to center position.
// scene #1 : Ryan start to talk about his politics opinion.
// scene #2 : Suddenly UFO comes up from the sky.
// scene #3 : kim and monkey kidnap by UFO Beam.
//              kim say about his expired vias.
// scene #4 : UFO disapper.
//              Ryan change his politics opinion to democracy,
//              but everyone doubt him.
// scene #5 : 
if(scene === -1)
{
    if(counter > 500)
    {
        scene = 0;
    }
}
if(kim_xPos < 400)
{
    scene = 1;
}   
if(ryan_scene_count > 3)
{
    scene = 2;
    ryan_scene_count = 0;
}
if(UFO_quad_yPos >= 580)
{
    scene = 3;
}
if(UFO_quad_yPos < 110)
{
    scene = 4;
}
if(ryan_xPos <= 300 && ryan_scene_count === 1)
{
    scene = 5;
}


    // ##################################################
    // ################### Processing ###################
    // ##################################################
    
if(counter++ > 4000) { counter = 0; }

    //==================== PAPAGO ====================
{
    
        if(papago_sinAngle >= 800) {
            papago_sinAngle = 0;
            //papago xPos is more than 800, than reset to zero
        }
        else {
            if(scene === 5)
            {
                if ( papago_sinAngle >= 100) { }
                else {
                    papago_sinAngle += 1;
                }
            }
            else{
                papago_sinAngle += 1.5;
                // papago flying speed
                // angle up -> papago get faster
            }
        }
        if ( scene === 5 && papago_sinAngle >= 100 ){ }
        else {
            if(counter % 100 === 0) {
                eye_flag = true;
            }
            if(eye_flag === true) {
                if(papago_eye_h_size > 2) {
                    papago_eye_h_size--;
                }
                if(papago_eye_h_size === 2) {
                    eye_flag = false;
                }
            }
            if(eye_flag === false) {
                if(papago_eye_h_size < 16) {
                    papago_eye_h_size++;
                }
            }
            if(feat_state_flag === true) {
                if(papago_feather_degree <= 101) {
                    feat_flag = 1;
                }
                if(papago_feather_degree >= 145) {
                    feat_flag = 2;
                }
            }
            if(feat_flag === 1) {
                papago_feather_degree += 3;
            }
            if(feat_flag === 2) {
                papago_feather_degree -= 3;
            }
        }
    
    
}

    // ==================== KIM ====================
{
    if(scene === 0)
    {
        if(kim_legMove > kim_LEGMOVEPEAK)
        {
            kim_legMoveFlag = kim_RIGHTLEG;
        }
        else if(kim_legMove < -kim_LEGMOVEPEAK)
        {
            kim_legMoveFlag = kim_LEFTLEG;
        }
        
        if(kim_legMoveFlag === kim_LEFTLEG)
        {
            kim_legMove++;
        }
        else 
        {
            kim_legMove--;
        }
        kim_yPos = abs( sin(kim_xPos*11.2) *4 + 490);
        kim_xPos--;
    }
    else if(scene === 1)
    {   
        kim_xPos = 400;
        kim_legMove = 0;
    }
    else if(scene === 3)
    {
        if(kim_yPos > 110)
        {
            kim_yPos-=2.3;
            kim_charSize-= 0.3;
        }
        else if(kim_yPos <= 110)
        {
            kim_show = false;
        }
        
    }
}
    
    // ==================== Jjangu ====================
{
    
    if(scene === 0)
    {
        if(jjangu_legmove > jjangu_legmovepeak)
        {
            jjangu_legmoveflag = jjangu_rightleg;
        }
        else if(jjangu_legmove < -jjangu_legmovepeak)
        {
            jjangu_legmoveflag = jjangu_leftleg;
        }
        if (jjangu_legmoveflag === jjangu_leftleg)
        {
            jjangu_legmove++;
        }
        else
        {
            jjangu_legmove--;
        }
        jjangu_yPos = abs( sin(kim_xPos*11.2) *4 + 488);
        jjangu_xPos++;
    }
    else if( scene === 1)
    {
        jjangu_xPos = 100;
        jjangu_legmove = 0;
    }
    
}

    // ==================== ryan ====================
{
    if( scene === 0)
    {
        if(ryan_legMove > ryan_LEGMOVEPEAK)
        {
            ryan_legMoveFlag = ryan_RIGHTLEG;
        }
        else if(ryan_legMove < -ryan_LEGMOVEPEAK)
        {
            ryan_legMoveFlag = ryan_LEFTLEG;
        }
        
        if(ryan_legMoveFlag === ryan_LEFTLEG)
        {
            ryan_legMove+=ryan_legSpeed;
        }
        else 
        {
            ryan_legMove-=ryan_legSpeed;
        } 
        ryan_yPos = abs( sin(ryan_xPos*9.4) * 4 + 525);
        ryan_xPos--;
    }
    else if( scene === 1)
    {
        ryan_xPos = 500;
        ryan_legMove = 0;
        Comment(ryan_xPos, ryan_yPos, "Go to Hell MOON!!");
        ryan_mouth = true;
        if(counter % 50 === 0)
        {
            ryan_mouthFlag = true;
            ryan_scene_count++;
        }
        if( ryan_mouthFlag === true)
        {
            if(ryan_mouthMove > 4)
            {
                ryan_mouthMove-=1.5;
            }
            if(ryan_mouthMove <= 4 && counter % 10 === 0)
            {
                ryan_mouthFlag = false;
            }
        }
        else if( ryan_mouthFlag === false)
        {
            if(ryan_mouthMove < 15)
            {
                ryan_mouthMove+=1.5;
            }
        }
    }
    else if( scene === 2)
    {
        ryan_mouth = false;
    }
    else if(scene === 3)
    {
        ryan_sweat = true;
        ryan_mouth = true;
        Comment(ryan_xPos, ryan_yPos, "Where are you going??");
        if(counter % 50 === 0)
        {
            ryan_mouthFlag = true;
        }
        if( ryan_mouthFlag === true)
        {
            if(ryan_mouthMove > 4)
            {
                ryan_mouthMove-=1.5;
            }
            if(ryan_mouthMove <= 4 && counter % 10 === 0)
            {
                ryan_mouthFlag = false;
            }
        }
        else if( ryan_mouthFlag === false)
        {
            if(ryan_mouthMove < 15)
            {
                ryan_mouthMove+=1.5;
            }
        }
    }
    else if( scene === 4)
    {
        ryan_sweat = true;
        ryan_mouth = true;
        if( ryan_xPos > 300)
        {
            // charactor moving
            if(ryan_legMove > ryan_LEGMOVEPEAK)
            {
                ryan_legMoveFlag = ryan_RIGHTLEG;
            }
            else if(ryan_legMove < -ryan_LEGMOVEPEAK)
            {
                ryan_legMoveFlag = ryan_LEFTLEG;
            }
            
            if(ryan_legMoveFlag === ryan_LEFTLEG)
            {
                ryan_legMove+=ryan_legSpeed;
            }
            else 
            {
                ryan_legMove-=ryan_legSpeed;
            } 
            // mouth moving
            if(counter % 50 === 0)
            {
                ryan_mouthFlag = true;
                ryan_scene_count++;
            }
            if( ryan_mouthFlag === true)
            {
                if(ryan_mouthMove > 4)
                {
                    ryan_mouthMove-=0.7;
                }
                if(ryan_mouthMove <= 4 && counter % 10 === 0)
                {
                    ryan_mouthFlag = false;
                }
            }
            else if( ryan_mouthFlag === false)
            {
                if(ryan_mouthMove < 15)
                {
                    ryan_mouthMove+=0.7;
                }
            }
            ryan_yPos = abs( sin(ryan_xPos*9.4) * 4 + 525);
            ryan_xPos-= 0.3;
        }
        if( ryan_xPos < 400 )
        {
            Comment(ryan_xPos, ryan_yPos, "I Love South Korea!!");
        }
        if( ryan_xPos <= 320)
        {
            Comment(ryan_xPos, ryan_yPos, "I Love you Mr.Moon!!");
            if(counter >= 2800)
            {
                ryan_scene_count = 1;
            }
        }
        
        
    }

}

    // ==================== moon ====================
{
    if(scene === 0)
    {
        if (moon_legflag === 1)
        {
            moon_left -= moon_speed;
            if (moon_left < -11) 
            {
                moon_legflag = 2;
            }
        }
        if (moon_legflag === 2)
        {
            moon_left += moon_speed;
            moon_right -= moon_speed;
            if (moon_left > 0) 
            {
                moon_legflag = 3;
            }
        }
        if (moon_legflag === 3)
        {
            moon_right += moon_speed;
            if(moon_right > 0)
            {
                moon_legflag = 1;
            }
        }
        moon_yPos = abs( sin(moon_xPos*11.2) *4 + 490);
        moon_xPos++;
    }
    else if( scene === 1)
    {
        moon_left = 0;
        moon_right = 0;
    }
}

    // ==================== monkey ====================
{
    if(scene === -1 || scene === 0 || scene === 1 || scene === 2)
    {
        if(monkey_yPos > monkey_YPOS+10)
        {
            monkey_jumpFlag = false;
        }
        else if(monkey_yPos < monkey_YPOS)
        {
            monkey_jumpFlag = true;
        }
        
        if(monkey_jumpFlag === true)
        {
            monkey_yPos++;
        }
        else
        {
            monkey_yPos--;
        }
    }
    else if(scene === 3)
    {
        if( monkey_yPos > 110)
        {
            monkey_yPos--;
            monkey_xPos -= 0.2;
        }
        else if(monkey_yPos <= 110)
        {
            monkey_show = false;
        }
    }
    
}
    if(monkey_show)
    {
        monkey(monkey_xPos, monkey_yPos, monkey_charSize);
    }
    if(kim_show)
    {
        kim(kim_xPos, kim_yPos, kim_charSize, kim_legMove);
    }
    
    // ==================== UFO ====================
{
    if(scene === 2)
    {
        if(UFO_xPos < UFO_STOP_POS)
        {   
            UFO_xPos = UFO_xPos+2.2;
            UFO_yPos = abs( sin(UFO_xPos*3) *11 + UFO_YPOS);
        }
        else if (UFO_xPos >= UFO_STOP_POS)
        {
            if(UFO_quad_yPos < 580)
            {
                
                A2[0] = (4010 - UFO_quad_yPos) / 10.4;
                A2[1] = UFO_quad_yPos;
                A1[0] = (UFO_quad_yPos + 4362) / 10.4;
                A1[1] = UFO_quad_yPos;
                A3 = [375, 110];
                A4 = [430, 110];
                UFO_ALPA += 0.35;
                
                UFO_beam(A1[0], A1[1], A2[0], A2[1], A3[0], A3[1], A4[0], A4[1], UFO_ALPA);
                
                UFO_quad_yPos+=2;
            }
            else {
                UFO_beam(A1_POS[0], A1_POS[1], A2_POS[0], A2_POS[1], A3[0], A3[1], A4[0], A4[1], UFO_ALPA);
            }
        }
    }
    else if( scene === 3)
    {
        
        if(UFO_quad_yPos >= 110)
        {
            A2[0] = (4010 - UFO_quad_yPos) / 10.4;
            A2[1] = UFO_quad_yPos;
            A1[0] = (UFO_quad_yPos + 4362) / 10.4;
            A1[1] = UFO_quad_yPos;
            A3 = [375, 110];
            A4 = [430, 110];
            UFO_ALPA -= 0.35;
            
            UFO_beam(A1[0], A1[1], A2[0], A2[1], A3[0], A3[1], A4[0], A4[1], UFO_ALPA);
            
            UFO_quad_yPos-=2;
            Comment(kim_xPos, kim_yPos, "My visa has expired;;");
            //kim comment
        }
    }
    else if( scene === 4 )
    {
        UFO_xPos = UFO_xPos+2.0;
        UFO_yPos = UFO_yPos-1.5;
        UFO_charSize = UFO_charSize - 2.0;
    }
}
    
    // ###############################################
    // ################### Drawing ###################
    // ###############################################

    
    papago(papago_sinAngle , (sin(papago_sinAngle) * 50) + 100, 31, papago_eye_h_size, papago_feather_degree);
    jjangu(jjangu_xPos,jjangu_yPos,100,jjangu_legmove);
    moon(moon_xPos, moon_yPos, 85, moon_left, moon_right);
    ryan(ryan_xPos, ryan_yPos, 140, ryan_legMove, ryan_mouthMove, ryan_mouth, ryan_sweat);
    UFO(UFO_xPos,UFO_yPos,UFO_charSize);

};





/*
    //abs( (sin(Angle * period) * height + x_Position )
*/

/*
    stroke(255,0,0);
    strokeWeight(5);
    point(A1[0], A1[1]);
    point(A2[0], A2[1]);
    point(A3[0], A3[1]);
    point(A4[0], A4[1]);
*/




