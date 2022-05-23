/*
Bucheon University
Software Engineering 2019
1933033 William 김희찬
1933014 Charming kyu 박민규
*/
var back_ground = function()
{
    //background(255, 255, 255);
    
    
    
    //line(400, 200, 550, 380);
    //line(370, 200, 520, 380);
    
    //enemy stop line
    //line(350, 200, 500, 380);
    // x = (15/18)*y
    
    //200 ~ 380
};

var GeneralFunction = function() {};
GeneralFunction.prototype.CheckOnRect = function(xPos, yPos, x, y, w, h)
{
    if( x < xPos && xPos < x+w &&
        y < yPos && yPos < y+h)
    {
        return true;
    }
    return false;
};

GeneralFunction.prototype.Init = function()
{
    var f = createFont("fantasy");
    textFont(f);
};
GeneralFunction.prototype.Message = function(message)
{
    noStroke();
    fill(255, 255, 255);
    rect(459, 43, 93, 63);
    fill(0, 0, 0);
    textSize(15);
    text(message, 465, 61);
};
var gf = new GeneralFunction();

gf.Init();

var StickMan = function(xPos, yPos)
{
    this.type = "StickMan";
    this.xPos = xPos;
    this.yPos = yPos;
    this.charSize = 40;
    this.health = 20;
    this.HEALTH = this.health;
    this.give_money = 100;
    this.attack_state = false;
    this.die_state = false;
    this.damage = 2;
    this.attack_speed = 20;
    this.ATTACK_SPEED = this.attack_speed;
    this.state_info = [this.attack_state, this.damage, this.give_money];
    this.frame = 1;
    this.frame_counter = 0;
    this.frame_speed = 1;
    
    this.move_speed = 2;

};
StickMan.prototype.frame1 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1.5*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-30*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+29*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame2 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+16*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+86*this.charSize/160, this.xPos+22*this.charSize/160, this.yPos+85*this.charSize/160);
    
    //right leg
    line(this.xPos-2*this.charSize/160, this.yPos+30*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+58*this.charSize/160);
    line(this.xPos+3*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-21*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-21*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-13*this.charSize/160, this.yPos+85*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-15*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-19*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+7*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame3 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+10*this.charSize/160, this.yPos+86*this.charSize/160);
    line(this.xPos+10*this.charSize/160, this.yPos+86*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+86*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+56*this.charSize/160);
    line(this.xPos+3*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-16*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos-8*this.charSize/160, this.yPos+84*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);
};
StickMan.prototype.frame4 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-0.1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-0.1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+89*this.charSize/160);
    line(this.xPos+8*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos+14*this.charSize/160, this.yPos+88*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+13*this.charSize/160, this.yPos+52*this.charSize/160);
    line(this.xPos+10*this.charSize/160, this.yPos+56*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-14*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
/*    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);*/
};
StickMan.prototype.frame5 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-0.1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-4*this.charSize/160, this.yPos+29*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+1*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-1*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos+0*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos+5*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+16*this.charSize/160, this.yPos+45*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+45*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-3*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos+5*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-1*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-3*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+11*this.charSize/160);
    
    //right arm
/*    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);*/
};
StickMan.prototype.frame6 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-4*this.charSize/160, this.yPos+29*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-2*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-8*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos-8*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+0.1*this.charSize/160, this.yPos+26*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+48*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+49*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+83*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-7*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-7*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+14*this.charSize/160);
    
    //right arm
    line(this.xPos-0*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+10*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+12*this.charSize/160);
};
StickMan.prototype.frame7 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-2*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-5*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos-18*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos-12*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+0.1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+48*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+49*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+23*this.charSize/160, this.yPos+81*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+83*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-17*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-18*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-24*this.charSize/160, this.yPos+14*this.charSize/160);
    
    //right arm
    line(this.xPos-0.1*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+14*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+9*this.charSize/160);
};
StickMan.prototype.frame_attack1 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1.5*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos+2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-30*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+29*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame_attack2 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1.5*this.charSize/160, this.yPos-47*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos+2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-35*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-36*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-30*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+29*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame_attack3 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos+2-1.5*this.charSize/160, this.yPos-47*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos+2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-43*this.charSize/160, this.yPos-21*this.charSize/160);
    line(this.xPos-43*this.charSize/160, this.yPos-17*this.charSize/160, this.xPos-22*this.charSize/160, this.yPos+3*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+29*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame_attack4 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos+1-1.5*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos+2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-13*this.charSize/160, this.yPos-21*this.charSize/160);
    line(this.xPos-19*this.charSize/160, this.yPos-14*this.charSize/160, this.xPos+27*this.charSize/160, this.yPos+-10*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+21*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame_attack5 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1.5*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos+2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+28*this.charSize/160, this.yPos-14*this.charSize/160);
    line(this.xPos+33*this.charSize/160, this.yPos-14*this.charSize/160, this.xPos+55*this.charSize/160, this.yPos+-12*this.charSize/160);
    
    //right arm
    line(this.xPos-0*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+-18*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-22*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+-25*this.charSize/160, this.yPos+15*this.charSize/160);
};
StickMan.prototype.frame_die1 = function() {
    translate(this.xPos-46, this.yPos-76);
    scale(0.25);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(188, 251, 30, 30);
    
    //body
    line(184, 256, 178, 326);
    
    //left leg
    line(179, 331, 186, 359);
    line(186, 359, 187, 389);
    line(187,389, 194,388);
    
    //right leg
    line(181, 325, 193, 352);
    line(193,352, 166, 380);
    line(166,380,177,382);
    
    //left arm
    line(178, 267, 171, 290);
    line(171, 290, 187, 315);
    
    resetMatrix();
    //right arm
    //line(178, 267, 182, 290);
    //line(182, 290, 184, 314);    
};
StickMan.prototype.frame_die2 = function() {
    translate(this.xPos-46, this.yPos-76);
    scale(0.25);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(237, 277, 30, 30);
    
    //body
    line(222, 289, 178, 326);
    
    //left leg
    line(179, 331, 191, 349);
    line(191, 350, 195, 389);
    line(195,389, 207,393);
    
    //right leg
    line(181, 325, 204, 352);
    line(205,352, 194, 380);
    line(194,380,208,382);
    
    //left arm
    line(201, 307, 205, 330);
    line(205, 330, 225, 344);
    line(208, 300, 221, 312);
    line(221, 312, 236, 331);
    
    
    resetMatrix();
    
    //right arm
    //line(178, 267, 182, 290);
    //line(182, 290, 184, 314);    
};
StickMan.prototype.frame_die3 = function() {
    translate(this.xPos-46, this.yPos-76);
    scale(0.25);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(286, 346, 30, 30);
    rotate(42);
    translate(208, -209);
    //body
    line(222, 289, 178, 326);
    
    //left leg
    line(179, 331, 191, 349);
    line(191, 350, 169, 371);
    line(169, 371, 172, 374);
    
    //right leg
    line(181, 325, 204, 352);
    line(205,352, 179, 380);
    line(179, 380,182,383);
    
    //left arm
    line(201, 307, 205, 330);
    line(205, 330, 225, 344);
    line(208, 300, 221, 312);
    line(221, 312, 236, 331);
    resetMatrix();
    //right arm
    //line(178, 267, 182, 290);
    //line(182, 290, 184, 314);    
};
StickMan.prototype.frame_die4 = function() {
    translate(this.xPos-46, this.yPos-76);
    scale(0.25);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(313, 372, 30, 30);
    //body
    line(294, 371, 203, 371);
    
    //left leg
    line(202, 371, 174, 381);
    line( 174, 381, 130, 375);
    //line(169, 371, 172, 374);
    
    //right leg
    line(202, 371, 173, 357);
    line(173, 357, 140, 364);
    //line(179, 380,182,383);
    
    //left arm
    line(270, 371, 289, 390);
    line(289, 390, 330, 395);
    line(272, 368, 253, 351);
    line(253, 351, 229, 343);
    resetMatrix();
    
    //right arm
    //line(178, 267, 182, 290);
    //line(182, 290, 184, 314);    
};

StickMan.prototype.Draw = function()
{
    if(this.health <= 0)
    {
        if(this.frame === 1)
        { this.frame_die1(); }
        else if(this.frame === 2)
        { this.frame_die2(); }
        else if(this.frame === 3)
        { this.frame_die3(); }
        else if(this.frame === 4)
        { this.frame_die4(); }
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame === 1)
            { this.frame1(); }
            else if(this.frame === 2)
            { this.frame2(); }
            else if(this.frame === 3)
            { this.frame3(); }
            else if(this.frame === 4)
            { this.frame4(); }
            else if(this.frame === 5)
            { this.frame5(); }
            else if(this.frame === 6)
            { this.frame6(); }
            else if(this.frame === 7)
            { this.frame7(); }
        }
        else
        {
            if(this.frame === 1)
            { this.frame_attack1(); }
            else if(this.frame === 2)
            { this.frame_attack2(); }
            else if(this.frame === 3)
            { this.frame_attack3(); }
            else if(this.frame === 4)
            { this.frame_attack4(); }
            else if(this.frame === 5)
            { this.frame_attack5(); }
        }
    }
};

StickMan.prototype.Process = function()
{
    if(this.xPos > this.yPos*(15/18)+180)
    {
        this.attack_state = true;
        this.state_info[0] = this.attack_state;
    }
    else 
    {
        if(this.health <= 0)
        {
            this.xPos += 0;
        }
        else
        {
            this.xPos += this.move_speed;
        }
    }
    this.frame_counter ++;
    if(this.health <= 0)
    {
        var DIE_SPEED = 5;
            if(this.frame_counter < this.frame_speed * 1*DIE_SPEED)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2*DIE_SPEED)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3*DIE_SPEED)
            { this.frame = 3; }
            else if(this.frame_counter < this.frame_speed * 4*DIE_SPEED)
            { this.frame = 4; }
            
            if(this.frame_counter >= this.frame_speed * 5*DIE_SPEED)
            { this.frame_counter = 0;
                this.die_state = true;}
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame_counter < this.frame_speed * 1)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3)
            { this.frame = 3; }
            else if(this.frame_counter < this.frame_speed * 4)
            { this.frame = 4; }
            else if(this.frame_counter < this.frame_speed * 5)
            { this.frame = 5; }
            else if(this.frame_counter < this.frame_speed * 6)
            { this.frame = 6; }
            else if(this.frame_counter < this.frame_speed * 7)
            { this.frame = 7; }
            if(this.frame_counter === this.frame_speed * 8)
            { this.frame_counter = 0; }
        }
        else
        {
            var ATTACK_SPEED = 3;
            if(this.frame_counter < 
                this.frame_speed * 1*ATTACK_SPEED)
            { this.frame = 1; }
            else if(this.frame_counter < 
                this.frame_speed * 2*ATTACK_SPEED)
            { this.frame = 2; }
            else if(this.frame_counter < 
                this.frame_speed * 3*ATTACK_SPEED)
            { this.frame = 3; }
            else if(this.frame_counter < 
                this.frame_speed * 4*ATTACK_SPEED)
            { this.frame = 4; }
            else if(this.frame_counter < 
                this.frame_speed * 5*ATTACK_SPEED)
            { this.frame = 5; }
            if(this.frame_counter === this.frame_speed * 6*ATTACK_SPEED)
            { this.frame_counter = 0; }
        }
    }
    return this.state_info;
};
StickMan.prototype.getHealth = function()
{
    var health_bar = 13;
    var health_bar_actuall = ((health_bar/this.HEALTH)*this.health)-0.8;
    noStroke();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(0.8);
    rect(this.xPos-8, this.yPos-24, health_bar, 2);
    fill(15, 189, 26);
    if(((health_bar/this.HEALTH)*this.health)-0.8 >= 0) 
    {
    rect(this.xPos-8, this.yPos-24, ((health_bar/this.HEALTH)*this.health)-0.8, 1.5);
    }
    else if ( ((health_bar/this.HEALTH)*this.health)-0.8 < 0 ) 
    {
        rect(this.xPos-8, this.yPos-24, 0, 1.5);
    }
    return this.health;
};
StickMan.prototype.DoAttack = function()
{
    this.attack_speed++;
    if(this.attack_speed > this.ATTACK_SPEED)
    {
        this.attack_speed = 0;
        return true;
    }
    return false;
};


var SwordMan = function(xPos, yPos)
{
    this.type = "SwordMan";
    this.xPos = xPos;
    this.yPos = yPos;
    this.scaleSize = 0.25;
    
    this.health = 35;
    this.HEALTH = this.health;
    this.give_money = 250;
    this.attack_state = false;
    this.die_state = false;
    this.damage = 10;
    this.attack_speed = 80;
    // attack_speed to attack delay value done - attack speed up
    this.ATTACK_SPEED = this.attack_speed;
    this.state_info = [this.attack_state, this.damage, this.give_money];
    this.frame = 1;
    this.frame_counter = 0;
    this.frame_speed = 2;
    
    this.move_speed = 2.2;
    
    this.frame_attack_speed = 2;
};

SwordMan.prototype.frame1 = function() {  
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(178.5, 244, 30, 30);
    
    //body
    line(178, 256, 178, 326);
    
    //left leg
    line(179, 331, 191, 359);
    line(191, 359, 197, 382);
    line(197, 382, 206, 382);
    
    //right leg
    line(177, 334, 169, 359);
    line(169, 359, 153, 382);
    line(153, 382, 162, 382);
    
    //left arm
    line(178, 267, 160, 290);
    line(160, 290, 150, 315);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 148, 313);


    strokeWeight(12);
    //right arm
    line(178, 267, 192, 290);
    line(192, 290, 209, 315);
    resetMatrix();
    };
SwordMan.prototype.frame2 = function() { 
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(179, 244, 30, 30);
    
    //body
    line(178, 256, 178, 326);
    
    //left leg
    line(179, 331, 191, 359);
    line(191, 359, 197, 386);
    line(197, 386, 202, 385);
    
    //right leg
    line(178, 333, 184, 359);
    line(183, 359, 160, 382);
    line(160, 382, 167, 385);
    
    //left arm
    line(178, 267, 165, 290);
    line(165, 290, 161, 315);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
    var xPos = 8;
    var yPos = 8;
    rotate(-2);
    strokeWeight(4);
    noFill();
    ellipse(127+xPos, 306+yPos, 10, 10);
    line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
    line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
    line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
    line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
    line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
    line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
    strokeWeight(6);
    line(132+xPos, 308+yPos, 153+xPos, 315+yPos);
    popMatrix();
    
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    strokeWeight(12);
    
    //right arm
    line(178, 267, 187, 290);
    line(187, 290, 198, 314);
    popMatrix();
   
    };
SwordMan.prototype.frame3 = function() {
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179.5, 244, 30, 30);
        
        //body
        line(178, 256, 178, 326);
        
        //left leg
        line(179, 331, 186, 359);
        line(186, 359, 190, 386);
        line(190, 386, 195, 386);
        
        //right leg
        line(181, 325, 191, 356);
        line(183, 359, 165, 380);
        line(165,380,171,384);
        
        //left arm
        line(178, 267, 171, 290);
        line(171, 290, 177, 315);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        
        var xPos = -284;
        var yPos = 23;
        rotate(-53);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 157+xPos, 314+yPos);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
    
        strokeWeight(12);
        
        //right arm
        line(178, 267, 182, 290);
        line(182, 290, 184, 314);
        popMatrix();
        };
SwordMan.prototype.frame4 = function() {   
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(180, 244, 30, 30);
        
        //body
        line(180, 256, 178, 326);
        
        //left leg
        line(179, 331, 186, 359);
        line(186, 359, 187, 389);
        line(187,389, 194,388);
        
        //right leg
        line(181, 325, 193, 352);
        line(193,352, 166, 380);
        line(166,380,177,382);
        
        //left arm
        line(178, 267, 171, 290);
        line(171, 290, 184, 315);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -356;
        var yPos = -11;
        rotate(-65);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 156+xPos, 313+yPos);
        
        popMatrix();
    };
SwordMan.prototype.frame5 = function() {
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179.5, 244, 30, 30);
        
        //body
        line(180, 256, 176, 326);
        
        //left leg
        line(176, 331, 182, 359);
        line(182, 359, 179, 390);
        line(179, 390,184, 390);
        
        //right leg
        line(178, 325, 196, 345);
        line(196,345, 177, 380);
        line(178,380,184,382);
        
        //left arm
        line(180, 267, 180, 290);
        line(182,296, 197,311);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -379;
        var yPos = -26;
        rotate(-71);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 152+xPos, 315+yPos);
        popMatrix();
           
    };
SwordMan.prototype.frame6 = function() {  
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179, 244, 30, 30);
        
        //body
        line(181, 256, 176, 326);
        
        //left leg
        line(176, 331, 177, 359);
        line(177, 359, 172, 390);
        line(172, 390,178, 390);
        
        //right leg
        line(178, 325, 195, 349);
        line(195,349, 187, 383);
        line(189,383,194,383);
        
        //left arm
        line(180, 267, 190, 290);
        line(190,290, 205,312);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -340;
        var yPos = 7;
        rotate(-64);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 150+xPos, 313+yPos);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
        strokeWeight(12);
        
        //right arm
        line(179, 267, 173, 290);
        line(173,290, 169, 314); 
        popMatrix();
    };
SwordMan.prototype.frame7 = function() {
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(178.5, 244, 30, 30);
        
        //body
        line(181, 256, 176, 326);
        
        //left leg
        line(176, 331, 171, 359);
        line(171, 359, 161, 389);
        line(161, 390,168, 390);
        
        //right leg
        line(178, 322, 195, 349);
        line(195,349, 198, 383);
        line(198,383,203,381);
        
        //left arm
        line(180, 267, 206, 309);
        //line(190,290, 205,312);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -335;
        var yPos = 5;
        rotate(-64);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 146+xPos, 312+yPos);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
        strokeWeight(12);
        
        //right arm
        line(179, 267, 163, 290);
        line(163,290, 156, 314);  
        popMatrix();
    };
SwordMan.prototype.frame8 = function() {
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(178.5, 244, 30, 30);
    
    //body
    line(178, 256, 178, 326);
    
    //left leg
    line(179, 331, 191, 359);
    line(191, 359, 197, 382);
    line(197, 382, 206, 382);
    
    //right leg
    line(177, 334, 169, 359);
    line(169, 359, 153, 382);
    line(153, 382, 162, 382);
    
    //left arm
    line(178, 267, 160, 290);
    line(160, 290, 150, 315);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        var xPos = -339;
        var yPos = 13;
        rotate(-64);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 146+xPos, 312+yPos);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
        strokeWeight(12);
    //right arm
    line(178, 267, 192, 290);
    line(192, 290, 209, 315);
    popMatrix();

    };
SwordMan.prototype.frame9 = function() { 
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(179, 244, 30, 30);
    
    //body
    line(178, 256, 178, 326);
    
    //left leg
    line(179, 331, 191, 359);
    line(191, 359, 197, 386);
    line(197, 386, 202, 385);
    
    //right leg
    line(178, 333, 184, 359);
    line(183, 359, 160, 382);
    line(160, 382, 167, 385);
    
    //left arm
    line(178, 267, 165, 290);
    line(165, 290, 161, 315);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
    var xPos = -332;
    var yPos = 9;
    rotate(-62);
    strokeWeight(4);
    noFill();
    ellipse(127+xPos, 306+yPos, 10, 10);
    line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
    line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
    line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
    line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
    line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
    line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
    strokeWeight(6);
    line(132+xPos, 308+yPos, 153+xPos, 315+yPos);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);

    strokeWeight(12);
    
    //right arm
    line(178, 267, 187, 290);
    line(187, 290, 198, 314);
    popMatrix();
   
    };
SwordMan.prototype.frame10 = function() {  
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179.5, 244, 30, 30);
        
        //body
        line(178, 256, 178, 326);
        
        //left leg
        line(179, 331, 186, 359);
        line(186, 359, 190, 386);
        line(190, 386, 195, 386);
        
        //right leg
        line(181, 325, 191, 356);
        line(183, 359, 165, 380);
        line(165,380,171,384);
        
        //left arm
        line(178, 267, 171, 290);
        line(171, 290, 177, 315);
        popMatrix();
        
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -284;
        var yPos = 23;
        rotate(-53);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 157+xPos, 314+yPos);
        popMatrix();
        
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        strokeWeight(12);
        
        //right arm
        line(178, 267, 182, 290);
        line(182, 290, 184, 314);
        popMatrix();
        };
SwordMan.prototype.frame11 = function() {   
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(180, 244, 30, 30);
        
        //body
        line(180, 256, 178, 326);
        
        //left leg
        line(179, 331, 186, 359);
        line(186, 359, 187, 389);
        line(187,389, 194,388);
        
        //right leg
        line(181, 325, 193, 352);
        line(193,352, 166, 380);
        line(166,380,177,382);
        
        //left arm
        line(178, 267, 171, 290);
        line(171, 290, 184, 315);
        
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -356;
        var yPos = -11;
        rotate(-65);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 156+xPos, 313+yPos);
        popMatrix();
        
        popMatrix();
    };
SwordMan.prototype.frame12 = function() {   
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179.5, 244, 30, 30);
        
        //body
        line(180, 256, 176, 326);
        
        //left leg
        line(176, 331, 182, 359);
        line(182, 359, 179, 390);
        line(179, 390,184, 390);
        
        //right leg
        line(178, 325, 196, 345);
        line(196,345, 177, 380);
        line(178,380,184,382);
        
        //left arm
        line(180, 267, 180, 290);
        line(182,296, 197,311);
        popMatrix();
        
        pushMatrix();
        
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -100;
        var yPos = 43;
        rotate(-22);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 152+xPos, 315+yPos);
        popMatrix();
    
    };
SwordMan.prototype.frame13 = function() {  
    pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179, 244, 30, 30);
        
        //body
        line(181, 256, 176, 326);
        
        //left leg
        line(176, 331, 177, 359);
        line(177, 359, 172, 390);
        line(172, 390,178, 390);
        
        //right leg
        line(178, 325, 195, 349);
        line(195,349, 187, 383);
        line(189,383,194,383);
        
        //left arm
        line(180, 267, 190, 290);
        line(190,290, 205,312);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        
        var xPos = -29;
        var yPos = 20;
        rotate(-9);
        strokeWeight(4);
        noFill();
        ellipse(127+xPos, 306+yPos, 10, 10);
        line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
        line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
        line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
        line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
        line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
        line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
        strokeWeight(6);
        line(132+xPos, 308+yPos, 150+xPos, 313+yPos);
        popMatrix();
        
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
        strokeWeight(12);
        
        //right arm
        line(179, 267, 173, 290);
        line(173,290, 169, 314);  
        popMatrix();
    };
SwordMan.prototype.frame_attack1 = function() { 
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(178.5, 244, 30, 30);
    
    //body
    line(178, 256, 178, 326);
    
    //left leg
    line(179, 331, 191, 359);
    line(191, 359, 197, 382);
    line(197, 382, 206, 382);
    
    //right leg
    line(177, 334, 169, 359);
    line(169, 359, 153, 382);
    line(153, 382, 162, 382);
    
    //left arm
    line(178, 267, 155, 290);
    line(155, 290, 149, 308);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 148, 313);


    strokeWeight(12);
    //right arm
    line(178, 267, 192, 290);
    line(192, 290, 209, 315);
    resetMatrix();

    };
SwordMan.prototype.frame_attack2 = function() {
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(179, 244, 30, 30);
    
    //body
    line(178, 256, 178, 326);
    
    //left leg
    line(179, 331, 191, 359);
    line(191, 359, 197, 382);
    line(197, 382, 206, 382);
    
    //right leg
    line(177, 334, 169, 359);
    line(169, 359, 153, 382);
    line(153, 382, 162, 382);
    
    //left arm
    line(178, 267, 168, 290);
    line(168, 290, 181, 308);
    popMatrix();
    
    pushMatrix();
    
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    translate(-21,27);
    rotate(-11);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 148, 313);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    strokeWeight(12);
    
    //right arm
    line(178, 267, 187, 290);
    line(187, 290, 198, 314);
    popMatrix();
    
   
    };
SwordMan.prototype.frame_attack3 = function() { 
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
        scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179.5, 244, 30, 30);
        
        //body
        line(178, 256, 178, 326);
        
    //left leg
    line(179, 331, 198, 352);
    line(200, 355, 200, 378);
    line(200, 383, 208, 383);
    
    //right leg
    line(177, 334, 169, 359);
    line(169, 359, 153, 382);
    line(153, 382, 162, 382);
        
    //left arm
    line(178, 267, 186, 290);
    line(178, 290, 208, 305);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    translate(-21,44);
    rotate(-16);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 148, 313);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    strokeWeight(12);
        
        //right arm
        line(178, 267, 182, 290);
        line(182, 290, 184, 314);
        popMatrix();
        };
SwordMan.prototype.frame_attack4 = function() {
        pushMatrix();
        translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(179, 244, 30, 30);
        
        //body
        line(181, 256, 176, 326);
        
    //left leg
    line(179, 331, 198, 352);
    line(200, 355, 200, 378);
    line(200, 383, 208, 383);
    
    //right leg
    line(177, 334, 169, 359);
    line(169, 359, 153, 382);
    line(153, 382, 162, 382);
        
    //left arm
    line(178, 267, 195, 290);
    line(195, 290, 216, 302);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
    translate(-14,42);
    rotate(-16);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 148, 313);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    strokeWeight(12);
        
        //right arm
        line(179, 267, 173, 290);
        line(173,290, 169, 314);  
        popMatrix();
    };
SwordMan.prototype.frame_attack5 = function() { 
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(178.5, 244, 30, 30);
        
        //body
        line(181, 256, 176, 326);
        
    //left leg
    line(179, 331, 198, 352);
    line(200, 355, 200, 378);
    line(200, 383, 208, 383);
    
    //right leg
    line(177, 334, 161, 354);
    line(160, 356, 147, 382);
    line(147, 382, 157, 382);
        
    //left arm
    line(178, 267, 201, 290);
    line(201, 290, 217, 300);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    translate(-15,44);
    rotate(-17);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 148, 313);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    strokeWeight(12);
        
        
        //right arm
        line(179, 267, 163, 290);
        line(163,290, 156, 314);  
        popMatrix();
    };
SwordMan.prototype.frame_attack6 = function() { 
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
        fill(0, 0, 0);
        strokeWeight(12);
        stroke(0, 0, 0);
        ellipse(178.5, 244, 30, 30);
        
        //body
        line(181, 256, 176, 326);

    //left leg
    line(179, 331, 198, 352);
    line(200, 355, 200, 378);
    line(200, 383, 208, 383);
    
    //right leg
    line(177, 334, 161, 354);
    line(160, 356, 147, 382);
    line(147, 382, 157, 382);
        
    //left arm
    line(178, 267, 207, 290);
    line(207, 290, 222, 300);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    translate(-3,44);
    rotate(-17);
    strokeWeight(4);
    noFill();
    ellipse(127, 306, 10, 10);
    line(167, 305, 159, 312);
    line(160, 332, 153, 312);
    line(163, 312, 240, 338);
    line(159, 325, 237, 352);
    line(240, 338, 251, 349);
    line(237, 352, 249, 351);
    
    strokeWeight(6);
    line(132, 308, 157, 313);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    strokeWeight(12);
        
        
        //right arm
        line(179, 267, 163, 290);
        line(163,290, 156, 314); 
        popMatrix();
    };
SwordMan.prototype.frame_die1 = function() {
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(188, 251, 30, 30);
    
    //body
    line(184, 256, 178, 326);
    
    //left leg
    line(179, 331, 186, 359);
    line(186, 359, 187, 389);
    line(187,389, 194,388);
    
    //right leg
    line(181, 325, 193, 352);
    line(193,352, 166, 380);
    line(166,380,177,382);
    
    //left arm
    line(178, 267, 171, 290);
    line(171, 290, 187, 315);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    var xPos = -304;
    var yPos = 13;
    rotate(-56);
    strokeWeight(4);
    noFill();
    ellipse(127+xPos, 306+yPos, 10, 10);
    line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
    line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
    line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
    line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
    line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
    line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
    strokeWeight(6);
    line(132+xPos, 308+yPos, 153+xPos, 315+yPos);
    popMatrix();
    
};
SwordMan.prototype.frame_die2 = function() {
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(237, 277, 30, 30);
    
    //body
    line(222, 289, 178, 326);
    
    //left leg
    line(179, 331, 191, 349);
    line(191, 350, 195, 389);
    line(195,389, 207,393);
    
    //right leg
    line(181, 325, 204, 352);
    line(205,352, 194, 380);
    line(194,380,208,382);
    
    //left arm
    line(201, 307, 205, 330);
    line(205, 330, 225, 344);
    line(208, 300, 221, 312);
    line(221, 312, 236, 331);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    var xPos = -13;
    var yPos = 103;
    rotate(-19);
    strokeWeight(4);
    noFill();
    ellipse(127+xPos, 306+yPos, 10, 10);
    line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
    line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
    line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
    line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
    line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
    line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
    strokeWeight(6);
    line(132+xPos, 308+yPos, 153+xPos, 315+yPos);
    popMatrix();

};
SwordMan.prototype.frame_die3 = function() {
    stroke(0, 0, 0);
    strokeWeight(12);
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    
    
    ellipse(286, 346, 30, 30);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    rotate(42);
    translate(208, -209);
    //body
    line(222, 289, 178, 326);
    
    //left leg
    line(179, 331, 191, 349);
    line(191, 350, 169, 371);
    line(169, 371, 172, 374);
    
    //right leg
    line(181, 325, 204, 352);
    line(205,352, 179, 380);
    line(179, 380,182,383);
    
    //left arm
    line(201, 307, 205, 330);
    line(205, 330, 225, 344);
    line(208, 300, 221, 312);
    line(221, 312, 236, 331);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    var xPos = 4;
    var yPos = 143;
    rotate(-19);
    strokeWeight(4);
    noFill();
    ellipse(127+xPos, 306+yPos, 10, 10);
    line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
    line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
    line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
    line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
    line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
    line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
    strokeWeight(6);
    line(132+xPos, 308+yPos, 153+xPos, 315+yPos);
    popMatrix();
    strokeWeight(12);
   
};
SwordMan.prototype.frame_die4 = function() {
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    fill(0, 0, 0);
    strokeWeight(12);
    stroke(0, 0, 0);
    ellipse(313, 372, 30, 30);
    //body
    line(294, 371, 203, 371);
    
    //left leg
    line(202, 371, 174, 381);
    line( 174, 381, 130, 375);
    //line(169, 371, 172, 374);
    
    //right leg
    line(202, 371, 173, 357);
    line(173, 357, 140, 364);
    //line(179, 380,182,383);
    
    //left arm
    line(270, 371, 289, 390);
    line(289, 390, 330, 395);
    line(272, 368, 253, 351);
    line(253, 351, 229, 343);
    popMatrix();
    
    pushMatrix();
    translate(this.xPos-45, this.yPos-72);
    scale(this.scaleSize);
    
    var xPos = 4;
    var yPos = 143;
    rotate(-19);
    strokeWeight(4);
    noFill();
    ellipse(127+xPos, 306+yPos, 10, 10);
    line(167+xPos, 305+yPos, 159+xPos, 312+yPos);
    line(160+xPos, 332+yPos, 153+xPos, 312+yPos);
    line(163+xPos, 312+yPos, 240+xPos, 338+yPos);
    line(159+xPos, 325+yPos, 237+xPos, 352+yPos);
    line(240+xPos, 338+yPos, 251+xPos, 349+yPos);
    line(237+xPos, 352+yPos, 249+xPos, 351+yPos);
    strokeWeight(6);
    line(132+xPos, 308+yPos, 153+xPos, 315+yPos);
    popMatrix();
 
};

SwordMan.prototype.Draw = function()
{
    if(this.health <= 0)
    {
        if(this.frame === 1)
        { this.frame_die1(); }
        else if(this.frame === 2)
        { this.frame_die2(); }
        else if(this.frame === 3)
        { this.frame_die3(); }
        else if(this.frame === 4)
        { this.frame_die4(); }
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame === 1)
            { this.frame1(); }
            else if(this.frame === 2)
            { this.frame2(); }
            else if(this.frame === 3)
            { this.frame3(); }
            else if(this.frame === 4)
            { this.frame4(); }
            else if(this.frame === 5)
            { this.frame5(); }
            else if(this.frame === 6)
            { this.frame6(); }
            else if(this.frame === 7)
            { this.frame7(); }
            else if(this.frame === 8)
            { this.frame8(); }
            else if(this.frame === 9)
            { this.frame9(); }
            else if(this.frame === 10)
            { this.frame10(); }
            else if(this.frame === 11)
            { this.frame11(); }
            else if(this.frame === 12)
            { this.frame12(); }
            else if(this.frame === 13)
            { this.frame13(); }
        }
        else
        {
            if(this.frame === 1)
            { 
                this.frame_attack1(); 
            }
            else if(this.frame === 2)
            { 
                this.frame_attack2(); 
            }
            else if(this.frame === 3)
            { this.frame_attack3(); }
            else if(this.frame === 4)
            { this.frame_attack4(); }
            else if(this.frame === 5)
            { this.frame_attack5(); }
            else if(this.frame === 6)
            { this.frame_attack6(); }
        }
    }
};

SwordMan.prototype.Process = function()
{
    if(this.xPos > this.yPos*(15/18)+180)
    {
        this.attack_state = true;
        this.state_info[0] = this.attack_state;
    }
    else 
    {
        if(this.health <= 0)
        {
            this.xPos += 0;
        }
        else
        {
            this.xPos += this.move_speed;
        }
    }
    this.frame_counter ++;
    if(this.health <= 0)
    {
        var DIE_SPEED = 2;
            if(this.frame_counter < this.frame_speed * 1*DIE_SPEED)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2*DIE_SPEED)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3*DIE_SPEED)
            { this.frame = 3; }
            else if(this.frame_counter < this.frame_speed * 4*DIE_SPEED)
            { this.frame = 4; }
            
            if(this.frame_counter >= this.frame_speed * 5*DIE_SPEED)
            { this.frame_counter = 0;
                this.die_state = true;}
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame_counter < this.frame_speed * 1)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3)
            { this.frame = 3; }
            else if(this.frame_counter < this.frame_speed * 4)
            { this.frame = 4; }
            else if(this.frame_counter < this.frame_speed * 5)
            { this.frame = 5; }
            else if(this.frame_counter < this.frame_speed * 6)
            { this.frame = 6; }
            else if(this.frame_counter < this.frame_speed * 7)
            { this.frame = 7; }
            else if(this.frame_counter < this.frame_speed * 8)
            { this.frame = 8; }
            else if(this.frame_counter < this.frame_speed * 9)
            { this.frame = 9; }
            else if(this.frame_counter < this.frame_speed * 10)
            { this.frame = 10; }
            else if(this.frame_counter < this.frame_speed * 11)
            { this.frame = 11; }
            else if(this.frame_counter < this.frame_speed * 12)
            { this.frame = 12; }
            else if(this.frame_counter < this.frame_speed * 13)
            { this.frame = 13; 
                
            }
            if(this.frame_counter >= this.frame_speed * 13 + 1)
            {
                this.frame_counter = 0;
            }
            
        }
        else
        {
            if(this.frame_counter < this.frame_speed * 1 *this.frame_attack_speed)
            { 
                this.frame = 1;
            }
            else if(this.frame_counter < this.frame_speed * 2*this.frame_attack_speed)
            { 
                this.frame = 2;
            }
            else if(this.frame_counter < this.frame_speed * 3*this.frame_attack_speed)
            { 
                this.frame = 3;
            }
            else if(this.frame_counter < this.frame_speed * 4*this.frame_attack_speed)
            { 
                this.frame = 4;
            }
            else if(this.frame_counter < this.frame_speed * 5*this.frame_attack_speed)
            { 
                this.frame = 5;
            }
            else if(this.frame_counter < this.frame_speed * 6*this.frame_attack_speed)
            { 
                this.frame = 6;
            }
            if(this.frame_counter >= this.frame_speed * 7*this.frame_attack_speed)
            { 
                this.frame_counter = 0; 
            }
        }
    }
    return this.state_info;
};
SwordMan.prototype.getHealth = function()
{
    var health_bar = 13;
    var health_bar_actuall = ((health_bar/this.HEALTH)*this.health)-0.8;
    noStroke();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(0.8);
    rect(this.xPos-8, this.yPos-24, health_bar, 2);
    fill(15, 189, 26);
    if(((health_bar/this.HEALTH)*this.health)-0.8 >= 0) 
    {
    rect(this.xPos-8, this.yPos-24, ((health_bar/this.HEALTH)*this.health)-0.8, 1.5);
    }
    else if ( ((health_bar/this.HEALTH)*this.health)-0.8 < 0 ) 
    {
        rect(this.xPos-8, this.yPos-24, 0, 1.5);
    }
    return this.health;
};
SwordMan.prototype.DoAttack = function()
{
    this.attack_speed++;
    if(this.attack_speed > this.ATTACK_SPEED)
    {
        this.attack_speed = 0;
        return true;
    }
    return false;
};



var BoomMan = function(xPos, yPos)
{
    this.type = "BoomMan";
    this.xPos = xPos;
    this.yPos = yPos;
    this.charSize = 40;
    
    this.health = 15;
    this.HEALTH = this.health;
    this.give_money = 120;
    this.attack_state = false;
    this.die_state = false;
    this.damage = 50;
    this.attack_speed = 20;
    // attack_speed to attack delay value done - attack speed up
    this.ATTACK_SPEED = this.attack_speed;
    this.state_info = [this.attack_state, this.damage, this.give_money];
    this.frame = 1;
    this.frame_counter = 0;
    this.frame_speed = 2;
    
    this.move_speed = 3.5;
    
    this.frame_attack_speed = 2;
};

BoomMan.prototype.frame1 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1.5*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-30*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+29*this.charSize/160, this.yPos+15*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-25,this.yPos-36);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
    
};
BoomMan.prototype.frame2 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+16*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+86*this.charSize/160, this.xPos+22*this.charSize/160, this.yPos+85*this.charSize/160);
    
    //right leg
    line(this.xPos-2*this.charSize/160, this.yPos+30*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+58*this.charSize/160);
    line(this.xPos+3*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-21*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-21*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-13*this.charSize/160, this.yPos+85*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-15*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-19*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+7*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+15*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-29,this.yPos-35);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame3 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+10*this.charSize/160, this.yPos+86*this.charSize/160);
    line(this.xPos+10*this.charSize/160, this.yPos+86*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+86*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+56*this.charSize/160);
    line(this.xPos+3*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-16*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos-8*this.charSize/160, this.yPos+84*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-35,this.yPos-28);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame4 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-0.1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-0.1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+89*this.charSize/160);
    line(this.xPos+8*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos+14*this.charSize/160, this.yPos+88*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+13*this.charSize/160, this.yPos+52*this.charSize/160);
    line(this.xPos+10*this.charSize/160, this.yPos+56*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-14*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
/*    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);*/
    
    pushMatrix();
    translate(this.xPos-39,this.yPos-32);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame5 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-0.1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-4*this.charSize/160, this.yPos+29*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+1*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-1*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos+0*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos+5*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+16*this.charSize/160, this.yPos+45*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+45*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-3*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos+5*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-1*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-3*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+11*this.charSize/160);
    
    //right arm
/*    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);*/
    
    pushMatrix();
    translate(this.xPos-41,this.yPos-35);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame6 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-4*this.charSize/160, this.yPos+29*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-2*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-8*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos-8*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+0.1*this.charSize/160, this.yPos+26*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+48*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+49*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+83*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-7*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-7*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+14*this.charSize/160);
    
    //right arm
    line(this.xPos-0*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+10*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+12*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-44,this.yPos-36);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame7 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-2*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-5*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos-18*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos-12*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+0.1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+48*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+49*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+23*this.charSize/160, this.yPos+81*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+83*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-17*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-18*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-24*this.charSize/160, this.yPos+14*this.charSize/160);
    
    //right arm
    line(this.xPos-0.1*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+14*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+9*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-45,this.yPos-36);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame8 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1.5*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //right leg
    line(this.xPos-3*this.charSize/160, this.yPos+34*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-27*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-18*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-20*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-30*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+12*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+29*this.charSize/160, this.yPos+15*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-46,this.yPos-34);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame9 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
    line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+11*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+16*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+86*this.charSize/160, this.xPos+22*this.charSize/160, this.yPos+85*this.charSize/160);
    
    //right leg
    line(this.xPos-2*this.charSize/160, this.yPos+30*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+58*this.charSize/160);
    line(this.xPos+3*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-21*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos-21*this.charSize/160, this.yPos+82*this.charSize/160, this.xPos-13*this.charSize/160, this.yPos+85*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-15*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-19*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+7*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+15*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-43,this.yPos-32);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame10 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-2*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+10*this.charSize/160, this.yPos+86*this.charSize/160);
    line(this.xPos+10*this.charSize/160, this.yPos+86*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+86*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+11*this.charSize/160, this.yPos+56*this.charSize/160);
    line(this.xPos+3*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-16*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos-8*this.charSize/160, this.yPos+84*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-41,this.yPos-32);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame11 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-0.1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos-0.1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-1*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+6*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+89*this.charSize/160);
    line(this.xPos+8*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos+14*this.charSize/160, this.yPos+88*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+13*this.charSize/160, this.yPos+52*this.charSize/160);
    line(this.xPos+10*this.charSize/160, this.yPos+56*this.charSize/160, this.xPos-15*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-14*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+15*this.charSize/160);
    
    //right arm
/*    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);*/
    
    pushMatrix();
    translate(this.xPos-39,this.yPos-31);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame12 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-0.1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-4*this.charSize/160, this.yPos+29*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos+1*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-1*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos+0*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos+5*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+16*this.charSize/160, this.yPos+45*this.charSize/160);
    line(this.xPos+17*this.charSize/160, this.yPos+45*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos+79*this.charSize/160);
    line(this.xPos-3*this.charSize/160, this.yPos+80*this.charSize/160, this.xPos+5*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-1*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-3*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-3*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+17*this.charSize/160, this.yPos+11*this.charSize/160);
    
    //right arm
/*    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+2*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+4*this.charSize/160, this.yPos+14*this.charSize/160);*/
    
    pushMatrix();
    translate(this.xPos-38,this.yPos-31);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame13 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-1*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-4*this.charSize/160, this.yPos+29*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-2*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-8*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos-8*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos-2*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+0.1*this.charSize/160, this.yPos+26*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+48*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+49*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+83*this.charSize/160, this.xPos+7*this.charSize/160, this.yPos+82*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-7*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-7*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-11*this.charSize/160, this.yPos+14*this.charSize/160);
    
    //right arm
    line(this.xPos-0*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+10*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+9*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+12*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-32,this.yPos-31);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};
BoomMan.prototype.frame14 = function() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(12*this.charSize/160);
    ellipse(this.xPos-2*this.charSize/160, this.yPos-56*this.charSize/160, 30*this.charSize/160, 30*this.charSize/160);
    
    //body
    line(this.xPos+1*this.charSize/160, this.yPos-44*this.charSize/160, this.xPos-4*this.charSize/160, this.yPos+26*this.charSize/160);
    
    //left leg
   line(this.xPos-5*this.charSize/160, this.yPos+31*this.charSize/160, this.xPos-9*this.charSize/160, this.yPos+59*this.charSize/160);
    line(this.xPos-9*this.charSize/160, this.yPos+59*this.charSize/160, this.xPos-20*this.charSize/160, this.yPos+90*this.charSize/160);
    line(this.xPos-18*this.charSize/160, this.yPos+90*this.charSize/160, this.xPos-12*this.charSize/160, this.yPos+90*this.charSize/160);
    
    //right leg
    line(this.xPos+0.1*this.charSize/160, this.yPos+25*this.charSize/160, this.xPos+15*this.charSize/160, this.yPos+48*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos+49*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+82*this.charSize/160);
    line(this.xPos+23*this.charSize/160, this.yPos+81*this.charSize/160, this.xPos+18*this.charSize/160, this.yPos+83*this.charSize/160);
    
    //left arm
    line(this.xPos-2*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos-17*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos-18*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos-24*this.charSize/160, this.yPos+14*this.charSize/160);
    
    //right arm
    line(this.xPos-0.1*this.charSize/160, this.yPos-33*this.charSize/160, this.xPos+14*this.charSize/160, this.yPos-10*this.charSize/160);
    line(this.xPos+15*this.charSize/160, this.yPos-10*this.charSize/160, this.xPos+26*this.charSize/160, this.yPos+9*this.charSize/160);
    
    pushMatrix();
    translate(this.xPos-29,this.yPos-35);
    scale(0.2);
    noStroke();
    fill(0, 0, 0);
    ellipse(185,190,84,89);
    fill(49,45,47);
    ellipse(185,190,74,79);
    fill(0, 0, 0);
    ellipse(185,190,65,65);
    fill(49,45,47);
    ellipse(190,185,62,62);
    fill(0, 0, 0);
    ellipse(185,140,35,15);
    ellipse(185,143,35,21);
    ellipse(185,147,35,21);
    fill(49,45,47);
    ellipse(185,140,27,9);
    fill(204,169,127);
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(178,104,13,36,6);
    line(190,114,179,117);
    line(190,123,179,126);
    line(190,132,179,135);
    noStroke();
    fill(245, 71, 12);
    arc(186, 105, 38, 38, 0, 180);
    arc(169, 96, 25, 25, 47, 103);
    arc(185, 96, 38, 25, 58, 123);
    arc(198, 96, 38, 25, 69, 123);
    fill(240,170,62);
    arc(186, 106, 30, 30, 0, 180);
    arc(170, 101, 18, 18, 30, 77);
    arc(185, 101, 30, 17, 58, 123);
    arc(198, 100, 18, 20, 69, 123);
    popMatrix();
};

//boom! start
BoomMan.prototype.frame_die1 = function() {
    point(this.xPos+1,this.yPos); //243.109.64
    fill(255,224,1);
    stroke(243,109,64);
    strokeWeight(3);
    ellipse(this.xPos,this.yPos,10,10);
    
};
BoomMan.prototype.frame_die2 = function() {
    fill(255,224,1);
    stroke(243,109,64);
    strokeWeight(3);
    ellipse(this.xPos,this.yPos,14,14);
};
BoomMan.prototype.frame_die3 = function() {
    fill(255,54,0);
    noStroke();
    ellipse(this.xPos,this.yPos,30,30);
    fill(255,224,1);
    stroke(243,109,64);
    strokeWeight(4);
    ellipse(this.xPos,this.yPos,17,18);
};

BoomMan.prototype.Draw = function()
{
    if(this.health <= 0)
    {
        if(this.frame === 1)
        { this.frame_die1(); }
        else if(this.frame === 2)
        { this.frame_die2(); }
        else if(this.frame === 3)
        { this.frame_die3(); }
    }
  
        if(this.attack_state === false)
        {
            if(this.frame === 1)
            { this.frame1(); }
            else if(this.frame === 2)
            { this.frame2(); }
            else if(this.frame === 3)
            { this.frame3(); }
            else if(this.frame === 4)
            { this.frame4(); }
            else if(this.frame === 5)
            { this.frame5(); }
            else if(this.frame === 6)
            { this.frame6(); }
            else if(this.frame === 7)
            { this.frame7(); }
            else if(this.frame === 8)
            { this.frame8(); }
            else if(this.frame === 9)
            { this.frame9(); }
            else if(this.frame === 10)
            { this.frame10(); }
            else if(this.frame === 11)
            { this.frame11(); }
            else if(this.frame === 12)
            { this.frame12(); }
            else if(this.frame === 13)
            { this.frame13(); }
            else if(this.frame === 14)
            { this.frame14(); }
        }
        else
        {
            if(this.frame === 1)
            { this.frame_die1(); }
            else if(this.frame === 2)
            { this.frame_die2(); }
            else if(this.frame === 3)
            { this.frame_die3(); }
        }
    
};
BoomMan.prototype.Process = function()
{
    if(this.xPos > this.yPos*(15/18)+180)
    {
        this.attack_state = true;
        this.health = 0;
        this.die_state = true;
        this.state_info[2] = 0;
        this.state_info[0] = this.attack_state;
    }
    else 
    {
        if(this.health <= 0)
        {
            this.xPos += 0;
        }
        else
        {
            this.xPos += this.move_speed;
        }
    }
    this.frame_counter ++;
    if(this.health <= 0)
    {
        var DIE_SPEED = 2;
            if(this.frame_counter < this.frame_speed * 1*DIE_SPEED)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2*DIE_SPEED)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3*DIE_SPEED)
            { this.frame = 3; }
            
            if(this.frame_counter >= this.frame_speed * 3*DIE_SPEED)
            { 
                this.die_state = true;
            }
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame_counter < this.frame_speed * 1)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3)
            { this.frame = 3; }
            else if(this.frame_counter < this.frame_speed * 4)
            { this.frame = 4; }
            else if(this.frame_counter < this.frame_speed * 5)
            { this.frame = 5; }
            else if(this.frame_counter < this.frame_speed * 6)
            { this.frame = 6; }
            else if(this.frame_counter < this.frame_speed * 7)
            { this.frame = 7; }
            else if(this.frame_counter < this.frame_speed * 8)
            { this.frame = 8; }
            else if(this.frame_counter < this.frame_speed * 9)
            { this.frame = 9; }
            else if(this.frame_counter < this.frame_speed * 10)
            { this.frame = 10; }
            else if(this.frame_counter < this.frame_speed * 11)
            { this.frame = 11; }
            else if(this.frame_counter < this.frame_speed * 12)
            { this.frame = 12; }
            else if(this.frame_counter < this.frame_speed * 13)
            { this.frame = 13; }
            else if(this.frame_counter < this.frame_speed * 14)
            { this.frame = 14; }
            if(this.frame_counter >= this.frame_speed * 14 + 1)
            {
                this.frame_counter = 0;
            }
        }
        else
        {
            var DIE_SPEED = 2;
            if(this.frame_counter < this.frame_speed * 1*DIE_SPEED)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2*DIE_SPEED)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3*DIE_SPEED)
            { this.frame = 3; }
            
            if(this.frame_counter >= this.frame_speed * 3*DIE_SPEED)
            { 
                this.die_state = true;
            }
        }
    }
    return this.state_info;
};
BoomMan.prototype.getHealth = function()
{
    var health_bar = 13;
    var health_bar_actuall = ((health_bar/this.HEALTH)*this.health)-0.8;
    noStroke();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(0.8);
    rect(this.xPos-8, this.yPos-24, health_bar, 2);
    fill(15, 189, 26);
    if(((health_bar/this.HEALTH)*this.health)-0.8 >= 0) 
    {
    rect(this.xPos-8, this.yPos-24, ((health_bar/this.HEALTH)*this.health)-0.8, 1.5);
    }
    else if ( ((health_bar/this.HEALTH)*this.health)-0.8 < 0 ) 
    {
        rect(this.xPos-8, this.yPos-24, 0, 1.5);
    }
    return this.health;
};
BoomMan.prototype.DoAttack = function()
{
    return true;
};


var Tank = function(xPos, yPos)
{
    this.type = "Tank";
    this.xPos = xPos;
    this.yPos = yPos;
    this.scaleSize = 0.25;
    
    this.health = 200;
    this.HEALTH = this.health;
    this.give_money = 800;
    this.attack_state = false;
    this.die_state = false;
    this.damage = 25;
    this.attack_speed = 0;
    // attack_speed to attack delay value done - attack speed up
    this.ATTACK_SPEED = 140;
    this.state_info = [this.attack_state, this.damage, this.give_money];
    this.frame = 1;
    this.frame_counter = 0;
    this.frame_speed = 2;
    
    this.move_speed = 0.9;
    
    this.frame_attack_speed = 2;
    this.first_attack = false;
    this.first_attack_flag = true;
};

Tank.prototype.frame1 = function() {
    //tank start
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    translate(0,0); //action Y value!!  4 > 0 > 4 > 0
    fill(107,112,89);
    stroke(0, 0, 0);
    strokeWeight(3);
    rect(348, 173, 8, 6);
    rect(353, 172, 8, 8);
    rect(225, 172, 120, 8);
    quad(200,160, 204,189, 212,189, 216,158);
    fill(60,60,60);
    quad(213,166, 209,184, 225,182, 225,169);
    quad(194,160, 199,189, 203,189, 203,158);
    fill(107,112,89);
    beginShape();
    vertex(192, 155);
    vertex(197, 192);
    vertex(104, 192);
    vertex(89, 178);
    vertex(88, 175);
    vertex(88, 156);
    vertex(192, 155);
    endShape();
    fill(60,60,60);
    quad(124, 150,112, 156,159, 156,151, 150);
    fill(107,112,89);
    quad(132, 140,124,150,151,150,145, 140);
    fill(60,60,60);
    quad(101, 199,18, 206,15, 212,155, 199);
    fill(107,112,89);
    rect(99,192,132,7);
    beginShape();
    vertex(155,200);
    vertex(235,200);
    vertex(266,229);
    vertex(9,229);
    vertex(15,213);
    endShape();
    stroke(60,60,60);
    fill(60,60,60);
    //moving done
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    strokeWeight(2);
    fill(255,255,255);
    ellipse(179, 167, 28, 28);
    fill(0,0,0);
    ellipse(186, 168, 10, 10);
    fill(60,60,60);
    arc(179, 166, 24, 24, -165, 17);
    strokeWeight(3);
    rect(8,230,278,3);
    quad(20, 234,2, 241,11, 246,38, 234);
    fill(25,23,20);
    rect(19,237,269,8,5);
    fill(37,37,37);
    rect(17,248,271,8);
    rect(27,257,261,8,4);
    rect(36,263,245,8,4);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(5);
    beginShape();
    vertex(18, 255);
    vertex(16, 247);
    vertex(38, 236);
    vertex(249, 236);
    vertex(283, 238);
    vertex(291, 248);
    vertex(291, 260);
    vertex(263, 283);
    vertex(54, 283);
    vertex(18, 255);
    endShape();
    fill(81,83,67);
    strokeWeight(4);
    stroke(0, 0, 0);
    ellipse(276, 250, 25, 25);
    ellipse(33, 250, 25, 25);
    ellipse(64, 271, 25, 25);
    ellipse(110, 271, 25, 25);
    ellipse(137, 271, 25, 25);
    ellipse(183, 271, 25, 25);
    ellipse(210, 271, 25, 25);
    ellipse(254, 271, 25, 25);
    fill(106,109,88);
    strokeWeight(1);
    ellipse(33, 250, 10, 10);
    ellipse(64, 271, 10, 10);
    ellipse(110, 271, 10, 10);
    ellipse(137, 271, 10, 10);
    ellipse(183, 271, 10, 10);
    ellipse(210, 271, 10, 10);
    ellipse(254, 271, 10, 10);
    ellipse(276, 250, 10, 10);
    popMatrix();
};
Tank.prototype.frame2 = function() {
    //tank start
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    translate(0,3); //action Y value!!  4 > 0 > 4 > 0
    fill(107,112,89);
    stroke(0, 0, 0);
    strokeWeight(3);
    rect(348, 173, 8, 6);
    rect(353, 172, 8, 8);
    rect(225, 172, 120, 8);
    quad(200,160, 204,189, 212,189, 216,158);
    fill(60,60,60);
    quad(213,166, 209,184, 225,182, 225,169);
    quad(194,160, 199,189, 203,189, 203,158);
    fill(107,112,89);
    beginShape();
    vertex(192, 155);
    vertex(197, 192);
    vertex(104, 192);
    vertex(89, 178);
    vertex(88, 175);
    vertex(88, 156);
    vertex(192, 155);
    endShape();
    fill(60,60,60);
    quad(124, 150,112, 156,159, 156,151, 150);
    fill(107,112,89);
    quad(132, 140,124,150,151,150,145, 140);
    fill(60,60,60);
    quad(101, 199,18, 206,15, 212,155, 199);
    fill(107,112,89);
    rect(99,192,132,7);
    beginShape();
    vertex(155,200);
    vertex(235,200);
    vertex(266,229);
    vertex(9,229);
    vertex(15,213);
    endShape();
    stroke(60,60,60);
    fill(60,60,60);
    //moving done
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    strokeWeight(2);
    fill(255,255,255);
    ellipse(179, 167, 28, 28);
    fill(0,0,0);
    ellipse(186, 168, 10, 10);
    fill(60,60,60);
    arc(179, 166, 24, 24, -165, 17);
    strokeWeight(3);
    rect(8,230,278,3);
    quad(20, 234,2, 241,11, 246,38, 234);
    fill(25,23,20);
    rect(19,237,269,8,5);
    fill(37,37,37);
    rect(17,248,271,8);
    rect(27,257,261,8,4);
    rect(36,263,245,8,4);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(5);
    beginShape();
    vertex(18, 255);
    vertex(16, 247);
    vertex(38, 236);
    vertex(249, 236);
    vertex(283, 238);
    vertex(291, 248);
    vertex(291, 260);
    vertex(263, 283);
    vertex(54, 283);
    vertex(18, 255);
    endShape();
    fill(81,83,67);
    strokeWeight(4);
    stroke(0, 0, 0);
    ellipse(276, 250, 25, 25);
    ellipse(33, 250, 25, 25);
    ellipse(64, 271, 25, 25);
    ellipse(110, 271, 25, 25);
    ellipse(137, 271, 25, 25);
    ellipse(183, 271, 25, 25);
    ellipse(210, 271, 25, 25);
    ellipse(254, 271, 25, 25);
    fill(106,109,88);
    strokeWeight(1);
    ellipse(33, 250, 10, 10);
    ellipse(64, 271, 10, 10);
    ellipse(110, 271, 10, 10);
    ellipse(137, 271, 10, 10);
    ellipse(183, 271, 10, 10);
    ellipse(210, 271, 10, 10);
    ellipse(254, 271, 10, 10);
    ellipse(276, 250, 10, 10);
    popMatrix();
};
Tank.prototype.frame3 = function() {
    //tank start
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    translate(0,6); //action Y value!!  4 > 0 > 4 > 0
    fill(107,112,89);
    stroke(0, 0, 0);
    strokeWeight(3);
    rect(348, 173, 8, 6);
    rect(353, 172, 8, 8);
    rect(225, 172, 120, 8);
    quad(200,160, 204,189, 212,189, 216,158);
    fill(60,60,60);
    quad(213,166, 209,184, 225,182, 225,169);
    quad(194,160, 199,189, 203,189, 203,158);
    fill(107,112,89);
    beginShape();
    vertex(192, 155);
    vertex(197, 192);
    vertex(104, 192);
    vertex(89, 178);
    vertex(88, 175);
    vertex(88, 156);
    vertex(192, 155);
    endShape();
    fill(60,60,60);
    quad(124, 150,112, 156,159, 156,151, 150);
    fill(107,112,89);
    quad(132, 140,124,150,151,150,145, 140);
    fill(60,60,60);
    quad(101, 199,18, 206,15, 212,155, 199);
    fill(107,112,89);
    rect(99,192,132,7);
    beginShape();
    vertex(155,200);
    vertex(235,200);
    vertex(266,229);
    vertex(9,229);
    vertex(15,213);
    endShape();
    stroke(60,60,60);
    fill(60,60,60);
    //moving done
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    strokeWeight(2);
    fill(255,255,255);
    ellipse(179, 167, 28, 28);
    fill(0,0,0);
    ellipse(186, 168, 10, 10);
    fill(60,60,60);
    arc(179, 166, 24, 24, -165, 17);
    strokeWeight(3);
    rect(8,230,278,3);
    quad(20, 234,2, 241,11, 246,38, 234);
    fill(25,23,20);
    rect(19,237,269,8,5);
    fill(37,37,37);
    rect(17,248,271,8);
    rect(27,257,261,8,4);
    rect(36,263,245,8,4);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(5);
    beginShape();
    vertex(18, 255);
    vertex(16, 247);
    vertex(38, 236);
    vertex(249, 236);
    vertex(283, 238);
    vertex(291, 248);
    vertex(291, 260);
    vertex(263, 283);
    vertex(54, 283);
    vertex(18, 255);
    endShape();
    fill(81,83,67);
    strokeWeight(4);
    stroke(0, 0, 0);
    ellipse(276, 250, 25, 25);
    ellipse(33, 250, 25, 25);
    ellipse(64, 271, 25, 25);
    ellipse(110, 271, 25, 25);
    ellipse(137, 271, 25, 25);
    ellipse(183, 271, 25, 25);
    ellipse(210, 271, 25, 25);
    ellipse(254, 271, 25, 25);
    fill(106,109,88);
    strokeWeight(1);
    ellipse(33, 250, 10, 10);
    ellipse(64, 271, 10, 10);
    ellipse(110, 271, 10, 10);
    ellipse(137, 271, 10, 10);
    ellipse(183, 271, 10, 10);
    ellipse(210, 271, 10, 10);
    ellipse(254, 271, 10, 10);
    ellipse(276, 250, 10, 10);
    popMatrix();
};
Tank.prototype.frame4 = function() {
    //tank start
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    translate(0,4); //action Y value!!  4 > 0 > 4 > 0
    fill(107,112,89);
    stroke(0, 0, 0);
    strokeWeight(3);
    rect(348, 173, 8, 6);
    rect(353, 172, 8, 8);
    rect(225, 172, 120, 8);
    quad(200,160, 204,189, 212,189, 216,158);
    fill(60,60,60);
    quad(213,166, 209,184, 225,182, 225,169);
    quad(194,160, 199,189, 203,189, 203,158);
    fill(107,112,89);
    beginShape();
    vertex(192, 155);
    vertex(197, 192);
    vertex(104, 192);
    vertex(89, 178);
    vertex(88, 175);
    vertex(88, 156);
    vertex(192, 155);
    endShape();
    fill(60,60,60);
    quad(124, 150,112, 156,159, 156,151, 150);
    fill(107,112,89);
    quad(132, 140,124,150,151,150,145, 140);
    fill(60,60,60);
    quad(101, 199,18, 206,15, 212,155, 199);
    fill(107,112,89);
    rect(99,192,132,7);
    beginShape();
    vertex(155,200);
    vertex(235,200);
    vertex(266,229);
    vertex(9,229);
    vertex(15,213);
    endShape();
    stroke(60,60,60);
    fill(60,60,60);
    //moving done
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    strokeWeight(2);
    fill(255,255,255);
    ellipse(179, 167, 28, 28);
    fill(0,0,0);
    ellipse(186, 168, 10, 10);
    fill(60,60,60);
    arc(179, 166, 24, 24, -165, 17);
    strokeWeight(3);
    rect(8,230,278,3);
    quad(20, 234,2, 241,11, 246,38, 234);
    fill(25,23,20);
    rect(19,237,269,8,5);
    fill(37,37,37);
    rect(17,248,271,8);
    rect(27,257,261,8,4);
    rect(36,263,245,8,4);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(5);
    beginShape();
    vertex(18, 255);
    vertex(16, 247);
    vertex(38, 236);
    vertex(249, 236);
    vertex(283, 238);
    vertex(291, 248);
    vertex(291, 260);
    vertex(263, 283);
    vertex(54, 283);
    vertex(18, 255);
    endShape();
    fill(81,83,67);
    strokeWeight(4);
    stroke(0, 0, 0);
    ellipse(276, 250, 25, 25);
    ellipse(33, 250, 25, 25);
    ellipse(64, 271, 25, 25);
    ellipse(110, 271, 25, 25);
    ellipse(137, 271, 25, 25);
    ellipse(183, 271, 25, 25);
    ellipse(210, 271, 25, 25);
    ellipse(254, 271, 25, 25);
    fill(106,109,88);
    strokeWeight(1);
    ellipse(33, 250, 10, 10);
    ellipse(64, 271, 10, 10);
    ellipse(110, 271, 10, 10);
    ellipse(137, 271, 10, 10);
    ellipse(183, 271, 10, 10);
    ellipse(210, 271, 10, 10);
    ellipse(254, 271, 10, 10);
    ellipse(276, 250, 10, 10);
    popMatrix();
};
Tank.prototype.frame5 = function() {
    //tank start
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    translate(0,2); //action Y value!!  4 > 0 > 4 > 0
    fill(107,112,89);
    stroke(0, 0, 0);
    strokeWeight(3);
    rect(348, 173, 8, 6);
    rect(353, 172, 8, 8);
    rect(225, 172, 120, 8);
    quad(200,160, 204,189, 212,189, 216,158);
    fill(60,60,60);
    quad(213,166, 209,184, 225,182, 225,169);
    quad(194,160, 199,189, 203,189, 203,158);
    fill(107,112,89);
    beginShape();
    vertex(192, 155);
    vertex(197, 192);
    vertex(104, 192);
    vertex(89, 178);
    vertex(88, 175);
    vertex(88, 156);
    vertex(192, 155);
    endShape();
    fill(60,60,60);
    quad(124, 150,112, 156,159, 156,151, 150);
    fill(107,112,89);
    quad(132, 140,124,150,151,150,145, 140);
    fill(60,60,60);
    quad(101, 199,18, 206,15, 212,155, 199);
    fill(107,112,89);
    rect(99,192,132,7);
    beginShape();
    vertex(155,200);
    vertex(235,200);
    vertex(266,229);
    vertex(9,229);
    vertex(15,213);
    endShape();
    stroke(60,60,60);
    fill(60,60,60);
    //moving done
    popMatrix();
    pushMatrix();
    translate(this.xPos-60,this.yPos-75);
    scale(0.35);
    strokeWeight(2);
    fill(255,255,255);
    ellipse(179, 167, 28, 28);
    fill(0,0,0);
    ellipse(186, 168, 10, 10);
    fill(60,60,60);
    arc(179, 166, 24, 24, -165, 17);
    strokeWeight(3);
    rect(8,230,278,3);
    quad(20, 234,2, 241,11, 246,38, 234);
    fill(25,23,20);
    rect(19,237,269,8,5);
    fill(37,37,37);
    rect(17,248,271,8);
    rect(27,257,261,8,4);
    rect(36,263,245,8,4);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(5);
    beginShape();
    vertex(18, 255);
    vertex(16, 247);
    vertex(38, 236);
    vertex(249, 236);
    vertex(283, 238);
    vertex(291, 248);
    vertex(291, 260);
    vertex(263, 283);
    vertex(54, 283);
    vertex(18, 255);
    endShape();
    fill(81,83,67);
    strokeWeight(4);
    stroke(0, 0, 0);
    ellipse(276, 250, 25, 25);
    ellipse(33, 250, 25, 25);
    ellipse(64, 271, 25, 25);
    ellipse(110, 271, 25, 25);
    ellipse(137, 271, 25, 25);
    ellipse(183, 271, 25, 25);
    ellipse(210, 271, 25, 25);
    ellipse(254, 271, 25, 25);
    fill(106,109,88);
    strokeWeight(1);
    ellipse(33, 250, 10, 10);
    ellipse(64, 271, 10, 10);
    ellipse(110, 271, 10, 10);
    ellipse(137, 271, 10, 10);
    ellipse(183, 271, 10, 10);
    ellipse(210, 271, 10, 10);
    ellipse(254, 271, 10, 10);
    ellipse(276, 250, 10, 10);
    popMatrix();
};
Tank.prototype.frame_die1 = function() {
    //boom start
    pushMatrix();
    translate(this.xPos-89,this.yPos-108);
    scale(0.5);
      fill(255, 28, 28);
      stroke(0, 0, 0);
    strokeWeight(3);
    beginShape();
    vertex(190, 130);
    vertex(212, 161);
    vertex(258, 139);
    vertex(226, 178);
    vertex(301, 150);
    vertex(244,198);
    vertex(317,217);
    vertex(244,224);
    vertex(288,278);
    vertex(213,242);
    vertex(233,294);
    vertex(192,270);
    vertex(176,292);
    vertex(162,263);
    vertex(148,282);
    vertex(150,254);
    vertex(124,278);
    vertex(124,253);
    vertex(73,282);
    vertex(99,243);
    vertex(54,228);
    vertex(104,215);
    vertex(48,176);
    vertex(113,189);
    vertex(92,157);
    vertex(131,178);
    vertex(125,137);
    vertex(167,169);
    vertex(190, 130);
    endShape();
    
    fill(255, 255, 0);
    noStroke();
    beginShape();
    vertex(235,155);
    vertex(218,183);
    vertex(270,168);
    vertex(237,199);
    vertex(273,213);
    vertex(234,217);
    vertex(252,249);
    vertex(206,231);
    vertex(216,273);
    vertex(187,258);
    vertex(176,278);
    vertex(164,253);
    vertex(154,264);
    vertex(157,244);
    vertex(133,260);
    vertex(131,242);
    vertex(96,259);
    vertex(111,239);
    vertex(76,230);
    vertex(133,217);
    vertex(76,188);
    vertex(125,198);
    vertex(107,170);
    vertex(137,184);
    vertex(134,152);
    vertex(176,179);
    vertex(193,152);
    vertex(209,172);
    endShape();
    popMatrix();
};
Tank.prototype.frame_die2 = function() {
    //boom start
    pushMatrix();
    translate(this.xPos-106,this.yPos-128);
    scale(0.6);
      fill(255, 28, 28);
      stroke(0, 0, 0);
    strokeWeight(3);
    beginShape();
    vertex(190, 130);
    vertex(212, 161);
    vertex(258, 139);
    vertex(226, 178);
    vertex(301, 150);
    vertex(244,198);
    vertex(317,217);
    vertex(244,224);
    vertex(288,278);
    vertex(213,242);
    vertex(233,294);
    vertex(192,270);
    vertex(176,292);
    vertex(162,263);
    vertex(148,282);
    vertex(150,254);
    vertex(124,278);
    vertex(124,253);
    vertex(73,282);
    vertex(99,243);
    vertex(54,228);
    vertex(104,215);
    vertex(48,176);
    vertex(113,189);
    vertex(92,157);
    vertex(131,178);
    vertex(125,137);
    vertex(167,169);
    vertex(190, 130);
    endShape();
    
    fill(255, 255, 0);
    noStroke();
    beginShape();
    vertex(235,155);
    vertex(218,183);
    vertex(270,168);
    vertex(237,199);
    vertex(273,213);
    vertex(234,217);
    vertex(252,249);
    vertex(206,231);
    vertex(216,273);
    vertex(187,258);
    vertex(176,278);
    vertex(164,253);
    vertex(154,264);
    vertex(157,244);
    vertex(133,260);
    vertex(131,242);
    vertex(96,259);
    vertex(111,239);
    vertex(76,230);
    vertex(133,217);
    vertex(76,188);
    vertex(125,198);
    vertex(107,170);
    vertex(137,184);
    vertex(134,152);
    vertex(176,179);
    vertex(193,152);
    vertex(209,172);
    endShape();
    popMatrix();
};
Tank.prototype.frame_die3 = function() {
    //boom start
    pushMatrix();
    translate(this.xPos-126,this.yPos-148);
    scale(0.7);
      fill(255, 28, 28);
      stroke(0, 0, 0);
    strokeWeight(3);
    beginShape();
    vertex(190, 130);
    vertex(212, 161);
    vertex(258, 139);
    vertex(226, 178);
    vertex(301, 150);
    vertex(244,198);
    vertex(317,217);
    vertex(244,224);
    vertex(288,278);
    vertex(213,242);
    vertex(233,294);
    vertex(192,270);
    vertex(176,292);
    vertex(162,263);
    vertex(148,282);
    vertex(150,254);
    vertex(124,278);
    vertex(124,253);
    vertex(73,282);
    vertex(99,243);
    vertex(54,228);
    vertex(104,215);
    vertex(48,176);
    vertex(113,189);
    vertex(92,157);
    vertex(131,178);
    vertex(125,137);
    vertex(167,169);
    vertex(190, 130);
    endShape();
    
    fill(255, 255, 0);
    noStroke();
    beginShape();
    vertex(235,155);
    vertex(218,183);
    vertex(270,168);
    vertex(237,199);
    vertex(273,213);
    vertex(234,217);
    vertex(252,249);
    vertex(206,231);
    vertex(216,273);
    vertex(187,258);
    vertex(176,278);
    vertex(164,253);
    vertex(154,264);
    vertex(157,244);
    vertex(133,260);
    vertex(131,242);
    vertex(96,259);
    vertex(111,239);
    vertex(76,230);
    vertex(133,217);
    vertex(76,188);
    vertex(125,198);
    vertex(107,170);
    vertex(137,184);
    vertex(134,152);
    vertex(176,179);
    vertex(193,152);
    vertex(209,172);
    endShape();
    popMatrix();
};
Tank.prototype.frame_attack1 = function() {
    
    var x = this.xPos+67;
    var y = this.yPos-13;
    point(x, y); //243.109.64
    fill(255,224,1);
    stroke(243,109,64);
    strokeWeight(3);
    ellipse(x, y,10,10);
    this.frame1();
};
Tank.prototype.frame_attack2 = function() {
    fill(255,224,1);
    stroke(243,109,64);
    strokeWeight(3);
    ellipse(this.xPos+67,this.yPos-13,14,14);
    this.frame1();
};
Tank.prototype.frame_attack3 = function() {
    var x = this.xPos+67;
    var y = this.yPos-13;
    fill(255,54,0);
    noStroke();
    ellipse(x, y,30,30);
    fill(255,224,1);
    stroke(243,109,64);
    strokeWeight(4);
    ellipse(x, y,17,18);
    this.frame1();
};
Tank.prototype.frame_attack4 = function() {
    this.frame1();
};

Tank.prototype.Draw = function()
{
    
    if(this.health <= 0)
    {
        if(this.frame === 1)
        { this.frame_die1(); }
        else if(this.frame === 2)
        { this.frame_die2(); }
        else if(this.frame === 3)
        { this.frame_die3(); }
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame === 1)
            { this.frame1(); }
            else if(this.frame === 2)
            { this.frame2(); }
            else if(this.frame === 3)
            { this.frame3(); }
            else if(this.frame === 4)
            { this.frame4(); }
            else if(this.frame === 5)
            { this.frame5(); }
        }
        else
        {
            if(this.frame === 1)
            { 
                this.frame_attack1(); 
            }
            else if(this.frame === 2)
            { 
                this.frame_attack2(); 
            }
            else if(this.frame === 3)
            { this.frame_attack3(); }
            else if(this.frame === 4)
            { this.frame_attack4(); }
        }
    }
};
Tank.prototype.Process = function()
{
    if(this.xPos >= this.yPos*(15/18) + 37)
    {
        this.attack_state = true;
        if(this.first_attack_flag === true)
        {
            this.first_attack = true;
            this.first_attack_flag = false;
        }
        this.state_info[0] = this.attack_state;
    }
    else 
    {
        if(this.health <= 0)
        {
            this.xPos += 0;
        }
        else
        {
            this.xPos += this.move_speed;
        }
    }
    this.frame_counter ++;
    if(this.health <= 0)
    {
        var DIE_SPEED = 2;
            if(this.frame_counter < this.frame_speed * 1*DIE_SPEED)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2*DIE_SPEED)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3*DIE_SPEED)
            { this.frame = 3; }
            
            if(this.frame_counter >= this.frame_speed * 4*DIE_SPEED)
            { this.frame_counter = 0;
                this.die_state = true;}
    }
    else
    {
        if(this.attack_state === false)
        {
            if(this.frame_counter < this.frame_speed * 1)
            { this.frame = 1; }
            else if(this.frame_counter < this.frame_speed * 2)
            { this.frame = 2; }
            else if(this.frame_counter < this.frame_speed * 3)
            { this.frame = 3; }
            else if(this.frame_counter < this.frame_speed * 4)
            { this.frame = 4; }
            else if(this.frame_counter < this.frame_speed * 5)
            { this.frame = 5; }
            if(this.frame_counter >= this.frame_speed * 5 + 1)
            {
                this.frame_counter = 0;
            }
            
        }
        else
        {
            if(this.frame_counter < this.frame_speed * 1 *this.frame_attack_speed)
            { 
                this.frame = 1;
            }
            else if(this.frame_counter < this.frame_speed * 2*this.frame_attack_speed)
            { 
                this.frame = 2;
            }
            else if(this.frame_counter < this.frame_speed * 3*this.frame_attack_speed)
            { 
                this.frame = 3;
            }
            else if(this.frame_counter < this.frame_speed * 4*this.frame_attack_speed)
            { 
                this.frame = 4;
            }
            if(this.frame_counter >= this.ATTACK_SPEED )
            { 
                this.frame_counter = 0; 
            }
        }
    }
    return this.state_info;
};
Tank.prototype.getHealth = function()
{
    var health_bar = 25;
    var health_bar_actuall = ((health_bar/this.HEALTH)*this.health)-0.8;
    noStroke();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(0.8);
    rect(this.xPos-25, this.yPos-30, health_bar, 2);
    fill(15, 189, 26);
    if(((health_bar/this.HEALTH)*this.health)-0.8 >= 0) 
    {
    rect(this.xPos-25, this.yPos-30, ((health_bar/this.HEALTH)*this.health)-0.8, 1.5);
    }
    else if ( ((health_bar/this.HEALTH)*this.health)-0.8 < 0 ) 
    {
        rect(this.xPos-8, this.yPos-24, 0, 1.5);
    }
    return this.health;
};
Tank.prototype.DoAttack = function()
{
    this.attack_speed++;
    if(this.attack_speed > this.ATTACK_SPEED)
    {
        this.attack_speed = 0;
        return true;
    }
    return false;
};



var EnemyHandler = function()
{
    this.enemy_handler = [];
    this.enemy_gen_time = 0;
    this.ENEMY_GEN_TIME = 100;
    this.enemy_gen_value = 10;
    this.enemy_counter = 0;
    
    this.enemy_all_dead = false;
    this.gen_type = 0;
    
    this.tank_gen_value = 0 ;
};

EnemyHandler.prototype.Generate = function(_round)
{
    this._ENEMY_GEN_TIME = this.ENEMY_GEN_TIME - (_round * 5);
    if(this._ENEMY_GEN_TIME <= 5)
    {
        this._ENEMY_GEN_TIME = 5;
    }
    this._enemy_gen_value = this.enemy_gen_value + (_round * 5);
    
    if(_round < 2)
    {
        this.gen_type = parseInt(random(0, 1), false);
    }
    else if(_round < 4)
    {
        this.gen_type = parseInt(random(0, 2), false);
    }
    else if(_round < 6)
    {
        this.gen_type = parseInt(random(0, 3), false);
    }
    else if(_round >= 6)
    {
        if(parseInt(random(0, 10), false) > 5 )
        {
            if(this.tank_gen_value > 0)
            {
                this.tank_gen_value--;
                this.gen_type = 3;
            }
            else
            {
                this.gen_type = parseInt(random(0, 3), false);
            }
        }
        else
        {
            this.gen_type = parseInt(random(0, 3), false);
        }
    }
    else if(_round >= 100)
    {
        if(parseInt(random(0, 10), false) === 5 )
        {
            if(this.tank_gen_value > 0)
            {
                this.tank_gen_value--;
                this.gen_type = 3;
            }
            else
            {
                this.gen_type = parseInt(random(0, 3), false);
            }
        }
        else
        {
            this.gen_type = parseInt(random(0, 3), false);
        }
    }
    
    if(this.enemy_counter > this._enemy_gen_value)
    {
        return;
    }
    this.enemy_gen_time++;
    if(this.enemy_gen_time > this._ENEMY_GEN_TIME)
    {
        if(this.gen_type === 0)
        {
            this.enemy_handler[this.enemy_counter] = new StickMan(-10, random(200,340));
        }
        else if(this.gen_type === 1)
        {
            this.enemy_handler[this.enemy_counter] = new SwordMan(-10, random(200,340));
        }
        else if(this.gen_type === 2)
        {
            this.enemy_handler[this.enemy_counter] = new BoomMan(-10, random(200,340));
        }
        else if(this.gen_type === 3)
        {
            this.enemy_handler[this.enemy_counter] = new Tank(-10, random(200,340));
        }
        else
        {
            this.enemy_handler[this.enemy_counter] = new StickMan(-10, random(200,340));
        }
        
        this.enemy_counter++;
        this.enemy_gen_time = 0;
        this.enemy_all_dead = false;
    }
};
EnemyHandler.prototype.Attack = function(BaseHandler, PlayerHandler)
{
    for(var i = 0; i < this.enemy_handler.length; i++)
    {
        if(this.enemy_handler[i] !== null)
        {
            // enemy attack base
            // state_info[0] = true : enemy in front of fance
            // state_info[0] = false : enemy toward to fance
            // state_info[1] : attack damage
            // state_info[2] : give_money
            
            this.enemy_handler[i].Draw();
            var state_info = this.enemy_handler[i].Process();
            if(this.enemy_handler[i].type === "Tank" && this.enemy_handler[i].first_attack === true)
            {
                BaseHandler.setHealth(state_info[1]);
                this.enemy_handler[i].first_attack = false;
            }
            if(state_info[0] === true &&
                this.enemy_handler[i].DoAttack() === true)
            {
                BaseHandler.setHealth(state_info[1]);
            } 
            if(this.enemy_handler[i].getHealth() <= 0)
            {
                if(this.enemy_handler[i].die_state === true)
                {
                    PlayerHandler.setMoney(state_info[2]);
                    this.enemy_handler[i] = null;
                }
            }
        }
    }
};
EnemyHandler.prototype.GetShot = function(attackX, attackY, dmg)
{
    for(var i = 0; i < this.enemy_handler.length; i++)
    {
        if(this.enemy_handler[i] !== null)
        {
            if(this.enemy_handler[i].type === "StickMan")
            {
                if(gf.CheckOnRect(attackX, attackY, this.enemy_handler[i].xPos -5, this.enemy_handler[i].yPos-14, 10, 28) )
                {
                    this.enemy_handler[i].health -= dmg;
                }
            }
            if(this.enemy_handler[i].type === "SwordMan")
            {
                if(gf.CheckOnRect(attackX, attackY, this.enemy_handler[i].xPos -5, this.enemy_handler[i].yPos-14, 10, 28) )
                {
                    this.enemy_handler[i].health -= dmg;
                }
            }
            if(this.enemy_handler[i].type === "BoomMan")
            {
                if(gf.CheckOnRect(attackX, attackY, this.enemy_handler[i].xPos -6, this.enemy_handler[i].yPos-13, 11, 26) )
                {
                    this.enemy_handler[i].health -= dmg;
                }
            }
            if(this.enemy_handler[i].type === "Tank")
            {
                if(gf.CheckOnRect(attackX, attackY, this.enemy_handler[i].xPos - 20, this.enemy_handler[i].yPos-20, 30, 30) )
                {
                    this.enemy_handler[i].health -= dmg;
                }
            }
        }
    }
};
EnemyHandler.prototype.InitEnemyHandler = function()
{
    this.enemy_handler = [];
    this.enemy_counter = 0;
};


var Player = function()
{
    this.money = 50000;
    this.earn_money = 0;
    this.aim_size = 12;
    this.gun_type = 0;
    this.gun_avail = false;
    this.gun_time = 0;
    this.gun_shot_times = [12, 12, 2, 20];
    // Upgrade : Shooting time
    
    this.gun_dmg = [5, 4, 3, 0.16];
    // Upgrade : damage
    
    this.gun_load_bar = 0;
    this.gun_load = [7, 10, 25, 3];
    // Upgrade : load capacity
    
    this.gun_loaded = this.gun_load[this.gun_type];
    this.gun_get_load = true;
    
    
    this.gun_reload_time = 0;
    this.gun_reload_times = [10, 20, 1.2, 60];
    // Upgrade : reload time
    
    this.gun_reload_times_adder = [2, 2, 1, 1];
    // reload_time += x;
    
    this.shotgun_density = 20;
    this.shotgun_range = 20;
    
    this.rpg_range = 140;
};
Player.prototype.setMoney = function(_money)
{
    this.money += _money;
    this.earn_money += _money;
};
Player.prototype.getMoney = function()
{
    return this.money;
};
Player.prototype.DrawMoney = function()
{
    var moneyX = 368;
    if(this.money > 9) { moneyX -= 7; }
    if(this.money > 99) { moneyX -= 7; }
    if(this.money > 999) { moneyX -= 7; }
    if(this.money > 9999) { moneyX -= 7; }
    if(this.money > 99999) { moneyX -= 7; }
    if(this.money > 999999) { moneyX -= 7; }
    if(this.money > 9999999) { moneyX -= 7; }
    if(this.money > 99999999) { moneyX -= 7; }
    fill(0,0, 0);
    textSize(14);
    text(this.money+" $", moneyX, 25);
};
Player.prototype.DrawMissFired = function(xPos, yPos)
{
    translate(xPos-128, yPos-139);
    scale(0.70);
    noStroke();
    fill(59, 58, 59,70);
    ellipse(182, 197, 5, 5);
    ellipse(181, 191, 5, 10);
    ellipse(184, 191, 5, 10);
    //ellipse(183, 195, 5, 10);
    ellipse(186, 185, 5, 10);
    ellipse(179, 185, 5, 10);
    ellipse(183, 184, 5, 10);
    ellipse(179, 180, 10, 10);
    ellipse(186, 180, 10, 10);
    ellipse(184, 180, 10, 10);
    resetMatrix();
};
Player.prototype.DrawRpgFired = function(xPos, yPos)
{
    //boom start
    pushMatrix();
    translate(xPos-89,yPos-108);
    scale(0.5);
      fill(255, 28, 28);
      stroke(0, 0, 0);
    strokeWeight(3);
    beginShape();
    vertex(190, 130);
    vertex(212, 161);
    vertex(258, 139);
    vertex(226, 178);
    vertex(301, 150);
    vertex(244,198);
    vertex(317,217);
    vertex(244,224);
    vertex(288,278);
    vertex(213,242);
    vertex(233,294);
    vertex(192,270);
    vertex(176,292);
    vertex(162,263);
    vertex(148,282);
    vertex(150,254);
    vertex(124,278);
    vertex(124,253);
    vertex(73,282);
    vertex(99,243);
    vertex(54,228);
    vertex(104,215);
    vertex(48,176);
    vertex(113,189);
    vertex(92,157);
    vertex(131,178);
    vertex(125,137);
    vertex(167,169);
    vertex(190, 130);
    endShape();
    
    fill(255, 255, 0);
    noStroke();
    beginShape();
    vertex(235,155);
    vertex(218,183);
    vertex(270,168);
    vertex(237,199);
    vertex(273,213);
    vertex(234,217);
    vertex(252,249);
    vertex(206,231);
    vertex(216,273);
    vertex(187,258);
    vertex(176,278);
    vertex(164,253);
    vertex(154,264);
    vertex(157,244);
    vertex(133,260);
    vertex(131,242);
    vertex(96,259);
    vertex(111,239);
    vertex(76,230);
    vertex(133,217);
    vertex(76,188);
    vertex(125,198);
    vertex(107,170);
    vertex(137,184);
    vertex(134,152);
    vertex(176,179);
    vertex(193,152);
    vertex(209,172);
    endShape();
    popMatrix();
};
Player.prototype.Shooting = function(EnemyHandler)
{
    this.DrawAim(false);
    
    
    if(this.gun_loaded <= 0)
    {
        this.gun_get_load = false;
    } // if gun has no bullet
    if(this.gun_get_load === false)
    {
        if(this.gun_reload_time > this.gun_reload_times[this.gun_type])
        {
            this.gun_loaded++;
            this.gun_reload_time = 0;
        }
        this.gun_reload_time+=this.gun_reload_times_adder[this.gun_type];
    } // than reload
    if(this.gun_loaded >= this.gun_load[this.gun_type])
    {
        this.gun_get_load = true;
    } // if bullet is full stop reload
    
    if(this.gun_loaded > 0 && this.gun_get_load === true)
    {
        if(this.gun_time >= this.gun_shot_times[this.gun_type])
        {
            this.gun_avail = true;
        }
        if( this.gun_avail && (mouseIsPressed && mouseButton === LEFT) )
        {
            this.DrawAim(true);
            if(this.gun_type === 0 || this.gun_type === 2)
            {
                EnemyHandler.GetShot(mouseX, mouseY, this.gun_dmg[this.gun_type]);
                this.DrawMissFired(mouseX, mouseY);
            }
            else if(this.gun_type === 1)
            {
                for(var i = 0; i < this.shotgun_density; i++)
                {
                    var x = parseInt(random(mouseX-this.shotgun_range, mouseX+this.shotgun_range), false);
                    var y = parseInt(random(mouseY-this.shotgun_range, mouseY+this.shotgun_range), false);
                    EnemyHandler.GetShot(x, y, this.gun_dmg[this.gun_type]);        this.DrawMissFired(x, y);
                }
            }
            else if(this.gun_type === 3)
            {
                var x = mouseX - this.rpg_range / 2;
                var y = mouseY - this.rpg_range / 2;
                for(var i = 0; i < this.rpg_range + 1; i++)
                {
                    for(var l = 0; l < this.rpg_range + 1; l++)
                    {
                        EnemyHandler.GetShot(x+l, y+i, this.gun_dmg[this.gun_type]);
                    }
                }
                //rect(x, y, this.rpg_range, this.rpg_range);
                this.DrawRpgFired(mouseX, mouseY);
            }
            
            this.gun_loaded--;
            this.gun_avail = false;
            this.gun_time = 0;
        }
        this.gun_time++;
    }
    this.DrawLoaded();
    
    
};
Player.prototype.DrawAim = function(click)
{
    if(click === true)
    {
        this.aim_size = 15;
    }
    else
    {
        this.aim_size = 12;
    }
    stroke(0, 0, 0);
    strokeWeight(1);
    noFill();
    ellipse(mouseX, mouseY, this.aim_size, this.aim_size);
    line(mouseX, mouseY-(this.aim_size/2), mouseX, mouseY+(this.aim_size/2));
    line(mouseX-(this.aim_size/2), mouseY, mouseX+(this.aim_size/2), mouseY);
};
Player.prototype.DrawLoaded = function()
{
    var loaded_bar = 130;
    noFill();
    stroke(0, 0, 0);
    strokeWeight(0.8);
    rect(10, 10, 130, 20);
    fill(68, 153, 199);
    if(this.gun_get_load === false)
    {
        
        if(this.gun_load_bar <= (this.gun_loaded/this.gun_load[this.gun_type])*loaded_bar)
        {
            this.gun_load_bar += 1.7;
            rect(10, 10, this.gun_load_bar, 20);
        }
        else
        {
            rect(10, 10, this.gun_load_bar, 20);
        }
    }
    else
    {
        this.gun_load_bar = 0;
        rect(10, 10, (this.gun_loaded/this.gun_load[this.gun_type])*loaded_bar, 20);
    }
    
    
    fill(0, 0, 0);
    textSize(15);
    text(this.gun_loaded+" / "+this.gun_load[this.gun_type], 60, 25);
};
Player.prototype.setLoaded = function()
{
    this.gun_loaded = this.gun_load[this.gun_type];
};



var Base = function()
{
    this.health = 100;
    this.HEALTH = this.health;
    
    this.fance_counter = 0;
    
    this.gunman_counter = 0;
    this.gunman_time = 0;
    this.gunman_damage = 5;
    
    this.repairman_counter = 0;
    this.repair_time = 0;
    this.REPAIR_TIME = 200;
    this.repair_time_counter = 0;
    
    this.gunman_shot_delay = 0;
    this.gunman_shooting_counter = 0;
    this.gunman_shot_counter = 0;
    this.GUNMAN_SHOT_COUNTER = 180;
    //GUNMAN_SHOT_COUNTER = GUNMAN__TIME
    this.gunman_window = 0;
    this.gunman_windows = [new PVector(440, 174), new PVector(480, 220), new PVector(525, 273)];
};
Base.prototype.Draw = function()
{
    this.DrawBase();
    for(var i = 0; i < this.fance_counter; i++)
    {
        this.DrawFance(-10, i * -2);
        if(i % 4 === 0)
        {
            this.DrawWire(-10, i* -2);
        }
    }
    this.DrawHealth();
};
Base.prototype.DrawBase = function()
{
    //Base.prototype.DrawBase = function()

    noStroke();
    fill(214, 228, 230);
    rect(0,0,600,300);
    fill(196,94,10);
    ellipse(34,255,540,300);
    ellipse(203,325,250,400);
    ellipse(344,217,340,200);
    ellipse(565,205,440,300);
    
    fill(172,85,5);
    ellipse(34,265,540,300);
    ellipse(203,335,250,400);
    ellipse(344,227,340,200);
    ellipse(565,215,440,300);
    
    fill(128,61,44);
    ellipse(34,275,540,300);
    ellipse(203,345,250,400);
    ellipse(344,237,340,200);
    ellipse(565,225,440,300);
    
    ellipse(54,270,540,300);
    ellipse(223,340,250,400);
    ellipse(364,232,340,200);
    ellipse(585,220,440,300);
    
    //fill(145,175,0);
    
    fill(102,64,53);
    
    ellipse(54,276,540,300);
    ellipse(223,346,250,400);
    ellipse(364,238,340,200);
    ellipse(585,226,440,300);
    
    ellipse(56,281,540,300);
    ellipse(225,351,250,400);
    ellipse(366,243,340,200);
    ellipse(587,231,440,300);
    
    
    //fill(92, 89, 75);
    fill(163, 148, 136);
    rect(0,200,600,207);
    stroke(222, 183, 104);
    strokeWeight(1);
    //line(0, 200, 420, 200);
    //line(0, 380, 600, 380);
    noStroke();

    // loop of base
    fill(235, 187, 132);
    quad(540, 120, 670, 256, 550, 256, 420, 120);
    
    // front of base
    fill(204, 148, 84);
    quad(420, 200, 550, 360, 550, 240, 420, 100);
    // front loop of base
    fill(227, 178, 123);
    quad(432, 100, 562, 240, 550, 240, 420, 100);
    
    //side of base
    fill(184, 136, 81);
    rect(550, 240, 12, 120);
    rect(562, 255, 42, 105);
    
    // shadow of base
    fill(107, 79, 46);
    quad(630, 360, 630, 390, 595, 390, 550, 360);
    
    //shoting site
    fill(92, 61, 26);
    quad(448, 169, 433, 150, 433, 180, 448, 200);
    quad(488, 216, 473, 197, 473, 227, 488, 247);
    quad(532, 266, 517, 247, 517, 277, 532, 297);
    /*stroke(255, 0, 0);
    strokeWeight(5);
    point(440, 175);
    point(480, 222);
    point(524, 271);*/
    
    
    fill(255, 255, 255, 180);
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(450, 40, 100, 40);
    fill(0, 0, 0);
    textSize(15);
    text("GunMan : "+this.gunman_counter, 455, 55);
    text("RepairMan : "+this.repairman_counter, 455, 75);
};
Base.prototype.DrawFance = function(xPos, yPos)
{
    stroke(217, 213, 213);
    strokeWeight(2);
    fill(171, 142, 113);
    quad(373+xPos, 219+yPos, 364+xPos, 220+yPos, 345+xPos, 200+yPos, 355+xPos, 200+yPos);
    
    quad(488+xPos, 358+yPos, 478+xPos, 358+yPos, 495+xPos, 380+yPos, 505+xPos, 380+yPos);
};
Base.prototype.DrawWire = function(xPos, yPos)
{
    stroke(217, 213, 213);
    strokeWeight(1);
    line(350+xPos, 200+yPos, 500+xPos, 380+yPos);
};
Base.prototype.DrawHealth = function()
{
    var health_bar = 200;
    noFill();
    stroke(0, 0, 0);
    strokeWeight(0.8);
    rect(390, 10, health_bar, 20);
    fill(15, 189, 26);
    rect(390, 10, (this.health/this.HEALTH)*health_bar, 20);
    fill(0, 0, 0);
    textSize(15);
    text(this.health+" / "+this.HEALTH, 473, 25);
};
Base.prototype.getHealth = function()
{
    return this.health;
};
Base.prototype.setHealth = function(dmg)
{
    if(this.health > 0 )
    {
        this.health -= dmg;
    }
};
Base.prototype.RegenBase = function(heal)
{
    if(this.health < this.HEALTH)
    {
        if(this.health + heal > this.HEALTH)
        {
            this.health = this.HEALTH;
        }
        else
        {
            this.health += heal;
        }
    }
};
Base.prototype.GunManAction = function(EnemyHandler)
{
    for(var i = 0; i < EnemyHandler.enemy_handler.length; i++)
    {
        if(EnemyHandler.enemy_handler[i] !== null && this.gunman_counter > 0)
        {
            var targetX = EnemyHandler.enemy_handler[i].xPos;
            var targetY = EnemyHandler.enemy_handler[i].yPos;
            EnemyHandler.GetShot(targetX, targetY, this.gunman_damage);
            break;
        }
    }
};
Base.prototype.DrawGunManFire = function(xPos, yPos)
{
    translate(xPos-35,yPos-20);
    scale(0.09);
    stroke(228, 230, 168);
    fill(228, 230, 168);
    beginShape();
    vertex(40,114);
    vertex(324,169);
    vertex(324,260);
    vertex(40,324);
    vertex(192,219);
    endShape();
    beginShape();
    vertex(214,180);
    vertex(214,272);
    vertex(-6,212);
    endShape();
    ellipse(294,215,202,96);
    fill(255, 255, 255);
    ellipse(294,215,202,70);
    resetMatrix();
};
Base.prototype.DrawGunMan = function(EnemyHandler)
{
    this.gunman_shot_counter++;
    if(this.gunman_shot_counter > this.GUNMAN_SHOT_COUNTER && this.gunman_counter !== 0)
    {
        this.gunman_shot_delay++;
        if(this.gunman_shot_delay > 5)
        {
            this.gunman_shooting_counter ++;
            this.gunman_window = parseInt(random(0, 3), false);
            this.DrawGunManFire(this.gunman_windows[this.gunman_window].x, this.gunman_windows[this.gunman_window].y);
            this.GunManAction(EnemyHandler);
        
            this.gunman_shot_delay = 0;
        }
        
        if(this.gunman_shooting_counter >= this.gunman_counter)
        {
            this.gunman_shooting_counter = 0;
            this.gunman_shot_counter = 0;
        }
    }
};
Base.prototype.RepairManAction = function()
{
    this.repair_time_counter++;
    
    if(this.repair_time_counter > this.REPAIR_TIME)
    {
        this.RegenBase(this.repairman_counter);
        this.repair_time_counter = 0;
    }
};
//*** attack speed matrix ***
/*
    0   1   2   3   4   5
0   10  9   8   7   6   5   (-=1)
1   20  18  16  14  12  10  (-=2)
2   1.2 0.9 0.6 0.3         (-=0.3)
3   60  56  52  48  44  40  (-=4)
*/
//***************************

var Store = function(PlayerHandler)
{
    this.x1 = 205;
    this.y1 = 195;
    this.y2 = 195;
    this.x3 = 205;
    
    this.x_1 = 305;
    this.y_1 = 295;
    this.y_2 = 295;
    this.x_3 = 305;
    this.money = 1;
    this.show_flag = 0;
    this.choice_effect = 1;  
    // if this valus is "1", House button is bigger
    
    this.select_gun_type = 0;
    this.gun_have = [1,0,0,0];
    this.gun_price = [0,2000,5000,20000];
    
    //first setting values
    this.gunman_price = 200;
    this.repairman_price = 500;
    this.upgradewall_price = 800;
    this.repairhouse_price = 300;
    
    
    
    
    
    //now level
    this.ammo0_level = 0;
    this.damage0_level = 0;
    this.reload0_level = 0;
    
    this.ammo1_level = 0;
    this.damage1_level = 0;
    this.reload1_level = 0;
    
    this.ammo2_level = 0;
    this.damage2_level = 0;
    this.reload2_level = 0;
    
    this.ammo3_level = 0;
    this.damage3_level = 0;
    this.reload3_level = 0;


    //max level
    this.ammo0_maxlevel = 7;
    this.damage0_maxlevel = 4;
    this.reload0_maxlevel = 5;
    
    this.ammo1_maxlevel = 7;
    this.damage1_maxlevel = 4;
    this.reload1_maxlevel = 5;
    
    this.ammo2_maxlevel = 7;
    this.damage2_maxlevel = 4;
    this.reload2_maxlevel = 3;
    
    this.ammo3_maxlevel = 7;
    this.damage3_maxlevel = 4;
    this.reload3_maxlevel = 5;
    
    //price
    this.ammo0_price = 100; 
    this.damage0_price = 200;
    this.reload0_price = 100;
    
    this.ammo1_price = 500;
    this.damage1_price = 1000;
    this.reload1_price = 700;
    
    this.ammo2_price = 450;
    this.damage2_price = 500;
    this.reload2_price = 700;
    
    this.ammo3_price = 1400;
    this.damage3_price = 2500;
    this.reload3_price = 1800;
    
    this.ammo0_price_upper = 20;
    this.damage0_price_upper = 40;
    this.reload0_price_upper = 20;
    
    this.ammo1_price_upper = 300;
    this.damage1_price_upper = 240;
    this.reload1_price_upper = 200;
    
    this.ammo2_price_upper = 320;
    this.damage2_price_upper = 310;
    this.reload2_price_upper = 450;
    
    this.ammo3_price_upper = 2000;
    this.damage3_price_upper = 2000;
    this.reload3_price_upper = 2000;
    
    
    this.ammo0_value_upper = 1;
    this.damage0_value_upper = 4;
    this.reload0_value_upper = 1;   //-1
    
    this.ammo1_value_upper = 1;
    this.damage1_value_upper = 2;
    this.reload1_value_upper = 2;   //-2
    
    this.ammo2_value_upper = 5;
    this.damage2_value_upper = 0.8;
    this.reload2_value_upper = 0.3; //-0.3
    
    this.ammo3_value_upper = 1;
    this.damage3_value_upper = 0.02;
    this.reload3_value_upper = 4;    // -4;
    
    this.ammo0_value = 7; //
    this.damage0_value = 5; //
    this.reload0_value = 10; //biger = slow 
    
    this.ammo1_value = 5;
    this.damage1_value = 4;
    this.reload1_value = 20;
    
    this.ammo2_value = 25;
    this.damage2_value = 3;
    this.reload2_value = 1.2;
    
    this.ammo3_value = 1;
    this.damage3_value = 0.16;
    this.reload3_value = 60;
    
    
    this.count = 0;
    
    this.ammo_choice = 0;
    this.damage_choice = 0;
    this.reload_choice = 0;
    
    this.gunman_value = 0;
    this.gunman_price = 200;
    this.gunman_upper = 50;
    
    this.repairman_value = 0;
    this.repairman_price = 500;
    this.repairman_upper = 300;
    
    this.upgradewall_value = 0;
    this.upgradewall_price = [800,2000,5000,12500,31250," FULL"];
    this.upgradewall_hp = [100,200,300,400,500,600];
    
    this.repairhouse_value = 0;
    
    this.return_value = [false, PlayerHandler.money, 
            0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //[0] : cloased flag
    //[1] : money
    //[2] : select_gun_type
    //[3] : ammo_value
    //[4] : damage_value
    //[5] : reload_value
    //[6] : gunman_value
    //[7] : repairman_value
    //[8] : upgradewall_value
    //[9] : repairhouse_value
    //[10] : tower_have // true or false
    //[11] : tower_damage
    //[12] : tower_firerate // rate 100 to 1 (1 is faster speed)
    
    //add
    this.tower_have = 0;
    this.tower_damage = 1;
    this.tower_damage_upper = 1; //max 4
    this.tower_firerate = 52;
    this.tower_firerate_upper = 8; //max 4
    this.tower_damage_price = 5000;
    this.tower_firerate_price = 7000;
    this.tower_damage_level = 0;
    this.tower_firerate_level = 0;
    //add
    
    
    
    this.a_v = 0;
    this.d_v = 0;
    this.r_v = 0;
};
Store.prototype.InitStore = function()
{
    this.x1 = 205;
    this.y1 = 195;
    this.y2 = 195;
    this.x3 = 205;
    this.show_flag = 0;
};
Store.prototype.Pistol = function(xPos, yPos, scale_size)
{
        //pistol
    translate(xPos , yPos);
    scale(scale_size);
    strokeWeight(2);
    fill(43,43,43);
    stroke(43,43,43);
    rect(174,95,63,8,4);
    rect(195,96,42,7);
    fill(54,54,54);
    pushMatrix();
    rotate(10);
    rect(191,68,21,35,6);
    //resetMatrix();
    popMatrix();
    fill(82,76,82);
    stroke(82, 76, 82);
    rect(176,104,60,5);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    line(178,97,178,102);
    line(182,97,182,102);
    line(186,97,186,102);
    line(190,97,190,102);
    triangle(200,111,201,111,200,112);
    strokeWeight(3);
    line(209,110,208,116);
    line(208,116,197,116);
    resetMatrix();
};
Store.prototype.Rifle = function(xPos, yPos, scale_size)
{
    //rifle
    translate(xPos , yPos);
    scale(scale_size);
    stroke(58,62,65);
    noFill();
    strokeWeight(4);
    rect(236,192,23,20,6);
    strokeWeight(1);
    fill(58,62,65);
    triangle(244,197,248,197,244,207);
    rect(488,174,17,6);
    rect(219,194,17,38,4);
    ellipse(234,227,10,10);
    fill(64,74,80);
    stroke(64,74,80); 
    rect(455,177,55,6);
    fill(33,36,43);
    stroke(33,36,43); 
    rect(412,166,43,17);
    fill(33,36,43);
    stroke(33,36,43); 
    noStroke();
    fill(118,63,60);
    rect(338,166,74,18);
    fill(129,70,62);
    triangle(338,183,414,184,338,190);
    fill(38,45,51);
    rect(205,166,74,18,6);
    rect(265,166,74,18);
    rect(303,161,35,18);
    triangle(211,166,198,184,230,183);
    fill(42,49,57);
    rect(198,183,140,14);
    quad(275, 195, 316, 266, 344, 266, 303, 195);
    fill(129,70,62);
    quad(198, 184, 85, 164, 86, 207, 198, 197);
    
    resetMatrix();
};
Store.prototype.ShotGun = function(xPos, yPos, scale_size)
{
    //shotgun
    translate(xPos , yPos);
    scale(scale_size);
    
    noFill();
    stroke(0, 0, 0);
    strokeWeight(4);
    rect(161,210,24,17,5);
    noStroke();
    fill(58,58,60);
    rect(144,192,73,23,100);
    fill(0, 0, 0);
    rect(332,192,29,10);
    rect(210,192,132,10);
    rect(210,201,70,10);
    rect(175,193,20,5);
    rect(263,197,70,10,100);
    fill(139,91,58);
    rect(226,204,70,13,100);
    fill(0, 0, 0);
    triangle(167,215,174,214,167,225);
    stroke(0, 0, 0);
    strokeWeight(2);
    line(231,215,231,207);
    line(235,215,235,207);
    line(240,215,240,207);
    line(245,215,245,207);
    line(250,215,250,207);
    line(255,215,255,207);
    line(260,215,260,207);
    line(265,215,265,207);
    line(270,215,270,207);
    line(275,215,275,207);
    line(280,215,280,207);
    line(285,215,285,207);
    line(290,215,290,207);
    noStroke();
    fill(140,94,60);
    rect(35,192,138,20,5);
    triangle(35,209,162,210,35,233);
    
    resetMatrix();
};
Store.prototype.RPG = function(xPos, yPos, scale_size)
{
    //rpg
    translate(xPos , yPos);
    scale(scale_size);
    stroke(58,62,65);
    noStroke();
    fill(147,154,100);
    rect(20,206,313,26);
    fill(168,172,113);
    rect(25,212,302,10);
    fill(190,200,128);
    rect(135,209,164,4);
    fill(97,97,97);
    rect(327,202,9,34);
    rect(17,202,9,34);
    fill(83,83,83);
    rect(89,240,22,6);
    rect(34,229,88,11);
    fill(120,120,120);
    quad(34, 235, 34, 240, 122, 240, 122, 235);
    quad(34, 238, 34, 240, 79, 251, 83, 235);
    quad(96, 238, 96, 267, 114, 263, 114, 238);
    rect(68,213,42,14);
    fill(83,83,83);
    rect(29,204,10,7);
    rect(31,198,6,7);
    triangle(31, 191, 31, 199, 37, 199);
    stroke(97,97,97);
    line(52,243,52,239);
    line(60,245,60,239);
    line(68,247,68,239);
    fill(83,83,83);
    rect(99,242,11,18);
    rect(73,216,31,9);
    strokeWeight(4);
    line(82,232,82,224);
    line(93,232,93,224);
    strokeWeight(3);
    line(308,208,308,229);
    fill(120,120,120);
    line(80,249,96,249);
    
    resetMatrix();
};
Store.prototype.Tower = function(xPos, yPos)
{
    pushMatrix();
    scale(0.4);
    translate(xPos, yPos);
    
    noStroke();
    fill(162,162,162);
    //stroke(255, 38, 255);
    //strokeWeight(2);
    beginShape();
    vertex(150,206);
    vertex(210,289);
    vertex(330,286);
    vertex(266,205);
    endShape();
    fill(0, 0, 0);
    rect(210,190,40,40);
    fill(30, 30, 30);
    rect(210,190,31,40);
    fill(50, 50, 50);
    rect(210,190,19,40);
    fill(70, 70, 70);
    rect(210,190,9,40);
    fill(179,179,179);
    beginShape();
    vertex(175,112);
    vertex(246,111);
    vertex(280,148);
    vertex(203,148);
    endShape();
    fill(128,128,128);
    beginShape();
    vertex(175,112);
    vertex(203,148);
    vertex(192,190);
    vertex(163,151);
    endShape();
    fill(98,98,98);
    beginShape();
    vertex(203,148);
    vertex(192,190);
    vertex(278,190);
    vertex(278,148);
    endShape();
    fill(77,77,77);
    beginShape();
    vertex(210,289);
    vertex(330,286);
    vertex(330,374);
    vertex(171,370);
    vertex(171,320);
    endShape();
    
    fill(61,61,61);
    stroke(61,61,61);
    strokeWeight(5);
    line(327,307,230,307);
    line(230,307,196,331);
    line(196,331,196,365);
    stroke(100,100,100);
    line(327,312,230,312);
    line(230,313,201,336);
    line(201,336,201,367);
    
    noStroke();
    fill(128,128,128);
    beginShape();
    vertex(210,289);
    vertex(171,320);
    vertex(110,235);
    vertex(150,206);
    endShape();
    
    fill(98,98,98);
    beginShape();
    vertex(171,320);
    vertex(171,370);
    vertex(110,281);
    vertex(110,235);
    endShape();
    
    fill(168,19,19);
    beginShape();
    vertex(324,278);
    vertex(310,261);
    vertex(190,262);
    vertex(204,281);
    endShape();
    
    fill(134,19,19);
    beginShape();
    vertex(190,262);
    vertex(204,281);
    vertex(164,311);
    vertex(150,293);
    endShape();

    fill(101,18,18);
    beginShape();
    vertex(164,311);
    vertex(150,293);
    vertex(150,339);
    vertex(164,358);
    endShape();
    
    fill(29,29,29);
    beginShape();
    vertex(187,141);
    vertex(195,149);
    vertex(189,169);
    vertex(181,160);
    endShape();
    stroke(255, 0, 0);
    
    popMatrix();
    // ********************
    /*
    strokeWeight(5);
    stroke(255, 0, 0);
    point(this.xPos, this.yPos);
    stroke(17, 0, 255);
    point(this.beamX, this.beamY);
    */
};
Store.prototype.DrawStore = function(_money, _gun_type)
{
    //store top
    //init value
    this.money = _money;
    this.select_gun_type = _gun_type;
    this.repairhouse_value = 0;
    
    noStroke();
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(255, 255, 255);
    fill(0, 0, 0, 70);
    
    if(this.show_flag === 0)
    {
    quad(this.x1,this.y1,this.x1,this.y2,this.x3,this.y2,this.x3,this.y1);

    if(this.x1 > 10) {
    this.x1-=7; }
    if(this.y1 > 40){
    this.y1-=6; }
    if(this.x3 < 400){
    this.x3+=7; }
    if(this.y2 < 350){
    this.y2+=6; }
    
    }


    
    if(this.y2 > 350){this.show_flag = 1;}
    
    if(this.show_flag === 1)
    {

        
        rect(7,38,395,314,10);
        rect(418,85,173,267,10);
        
        var gun_name;
        var ammo_level;
        var damage_level;
        var reload_level;
        var ammo_maxlevel;
        var damage_maxlevel;
        var reload_maxlevel;
        var ammo_price;
        var damage_price;
        var reload_price;
        var ammo_value;
        var damage_value;
        var reload_value;
        
        //이전값 불러오는 곳
        if(this.select_gun_type === 0) 
        {
            gun_name = "Pistol";
            ammo_level = this.ammo0_level;
            damage_level = this.damage0_level;
            reload_level = this.reload0_level;
            ammo_maxlevel = this.ammo0_maxlevel;
            damage_maxlevel = this.damage0_maxlevel;
            reload_maxlevel = this.reload0_maxlevel;
            ammo_price = this.ammo0_price;
            damage_price = this.damage0_price;
            reload_price = this.reload0_price;
            ammo_value = this.ammo0_value;
            damage_value = this.damage0_value;
            reload_value = this.reload0_value;
            fill(4, 0, 255);
            text("Select",228,146);
        }
        if(this.select_gun_type === 1) 
        {
            gun_name = "Shotgun";
            ammo_level = this.ammo1_level;
            damage_level = this.damage1_level;
            reload_level = this.reload1_level;
            ammo_maxlevel = this.ammo1_maxlevel;
            damage_maxlevel = this.damage1_maxlevel;
            reload_maxlevel = this.reload1_maxlevel;
            ammo_price = this.ammo1_price;
            damage_price = this.damage1_price;
            reload_price = this.reload1_price;
            ammo_value = this.ammo1_value;
            damage_value = this.damage1_value;
            reload_value = this.reload1_value;
            //add
            fill(4, 0, 255);
            text("Select",228,213);
            //add
        }
        if(this.select_gun_type === 2) 
        {
            gun_name = "Rifle";
            ammo_level = this.ammo2_level;
            damage_level = this.damage2_level;
            reload_level = this.reload2_level;
            ammo_maxlevel = this.ammo2_maxlevel;
            damage_maxlevel = this.damage2_maxlevel;
            reload_maxlevel = this.reload2_maxlevel;
            ammo_price = this.ammo2_price;
            damage_price = this.damage2_price;
            reload_price = this.reload2_price;
            ammo_value = this.ammo2_value;
            damage_value = this.damage2_value;
            reload_value = this.reload2_value;
            //add
            fill(4, 0, 255);
            text("Select",228,280);
            //add
        }
        if(this.select_gun_type === 3) 
        {
            gun_name = "RPG";
            ammo_level = this.ammo3_level;
            damage_level = this.damage3_level;
            reload_level = this.reload3_level;
            ammo_maxlevel = this.ammo3_maxlevel;
            damage_maxlevel = this.damage3_maxlevel;
            reload_maxlevel = this.reload3_maxlevel;
            ammo_price = this.ammo3_price;
            damage_price = this.damage3_price;
            reload_price = this.reload3_price;
            ammo_value = this.ammo3_value;
            damage_value = this.damage3_value;
            reload_value = this.reload3_value;
            //add
            fill(4, 0, 255);
            text("Select",228,348);
            //add
        }
        
        textSize(25);
        fill(0, 0, 0);
        text(gun_name,428,112);
        textSize(15);
        text("Ammo",428,160);
        text("Damage",428,225);
        text("Reload",428,289);
        fill(112, 106, 106);
        rect(426-this.ammo_choice,166-this.ammo_choice,151+this.ammo_choice*2,20+this.ammo_choice*2);
        rect(426-this.damage_choice,231-this.damage_choice,151+this.damage_choice*2,20+this.damage_choice*2);
        rect(426-this.reload_choice,295-this.reload_choice,151+this.reload_choice*2,20+this.reload_choice*2);
        
        fill(255, 255, 255);
        rect(426,166,(150/ammo_maxlevel)*ammo_level,20);
        rect(426,231,(150/damage_maxlevel)*damage_level,20);
        rect(426,295,(150/reload_maxlevel)*reload_level,20);
        fill(0, 0, 0);
        
        
        //here
        text("$"+ammo_price,528,160);
        text("$"+damage_price,528,225);
        text("$"+reload_price,528,289);
        
        //add
        fill(0, 0, 0);
        if(this.gun_have[1] === 1){}
        else
        {
        if(this.money < this.gun_price[1]){fill(255, 0, 0);}
        text("$"+this.gun_price[1],182,211);
        }
        if(this.gun_have[2] === 1){}
        else{
        if(this.money < this.gun_price[2]){fill(255, 0, 0);}
        text("$"+this.gun_price[2],182,280);
        }
        if(this.gun_have[3] === 1){}
        else{
        if(this.money < this.gun_price[3]){fill(255, 0, 0);}
        text("$"+this.gun_price[3],182,347);}
        
        if(this.tower_have === 0)
        {
        fill(122, 122, 122);
        stroke(0, 0, 0);
        rect(298,274,79,32,8);
        fill(255, 0, 0);
        textSize(20);
        if(this.money >= 8000){fill(0,0,0);}
        text("$8000",311,298);
        
        
        if(gf.CheckOnRect(mouseX, mouseY, 298,274,79,32))
        {
        fill(122, 122, 122);
        stroke(0, 0, 0);
        rect(297,273,81,34,8);
        fill(0, 0, 0);
        textSize(21);
        
        text("$8000",311,298);
        if(mouseIsPressed)
        {
        fill(122, 122, 122);
        stroke(0, 0, 0);
        rect(298,274,79,32,8);
        fill(255, 0, 0);
        textSize(20);
        text("$8000",311,298); 
        if(this.money >= 8000) 
            {
            this.money -= 8000;
            this.tower_have = 1;
            }
        }
        }
        }
        
        if(this.tower_have === 1)
        {
            
            stroke(0, 0, 0);
            fill(0, 0, 0);
            if(this.tower_damage_level === 4)
            {}
            else{
            text("$"+this.tower_damage_price,351,260);
            }
            text("Damage",277,259);
            
            fill(97, 97, 97);
            rect(285,264,100,22);
            fill(255, 255, 255);
            rect(285,264,25*this.tower_damage_level,22); 
            fill(97,97,97);
            if(gf.CheckOnRect(mouseX, mouseY, 285,264,100,22))
            {
                rect(284,263,102,24);
                fill(255, 255, 255);
                rect(285,264,25*this.tower_damage_level,22);
                fill(97,97,97);
                if(mouseIsPressed)
                {
                rect(285,264,100,22);
                fill(255, 255, 255);
                rect(285,264,25*this.tower_damage_level,22); 
                fill(97,97,97);
            if(this.money >= this.tower_damage_price && this.count > 10 && this.tower_damage_level < 4)
            {
                this.money -= this.tower_damage_price;
                this.tower_damage_price += 2000; //upper
                this.tower_damage += this.tower_damage_upper;
                this.tower_damage_level ++;
                this.count = 0;
            }
                }
            }
            fill(0, 0, 0);
            text(this.tower_damage,332,281);
            if(this.tower_firerate_level === 4)
            {}
            else{
            text("$"+this.tower_firerate_price,353,314);
            }
            text("Fire rate",277,313);
            fill(97, 97, 97);
            stroke(0, 0, 0);
            rect(285,319,100,22);
            fill(255, 255, 255);
            rect(285,319,25*this.tower_firerate_level,22);
            fill(97,97,97);
            if(gf.CheckOnRect(mouseX, mouseY, 285,319,100,22))
            {
                rect(284,318,102,24);
                fill(255, 255, 255);
                rect(285,319,25*this.tower_firerate_level,22);
                fill(97,97,97);
                if(mouseIsPressed)
                {
                rect(285,319,100,22);
                fill(255, 255, 255);
                rect(285,319,25*this.tower_firerate_level,22);
                fill(97,97,97);
            if(this.money >= this.tower_firerate_price && this.count > 3 && this.tower_firerate_level < 4)
            {
                this.money -= this.tower_firerate_price;
                this.tower_firerate_price += 3000; //upper
                this.tower_firerate -= this.tower_firerate_upper;
                this.count = 0;
                this.tower_firerate_level ++;
            }
                }
            }
            fill(0, 0, 0);
            text(this.tower_firerate,329,336);
        }
        
        textSize(15);
        //add
        //here!!
        fill(0, 0, 0);
        text(ammo_value,497,182);
        text(damage_value,497,247);
        text(reload_value,497,312);
        
        
        noStroke();
        fill(0, 0, 0);
        textSize(30);
        text("House",35,73);
        text("Guns",176,73);
        text("Tower",301,73);
        this.Tower(620, 210);
        stroke(0, 0, 0);
        line(9,85,400,85);
        line(140,39,140,350);
        line(270,39,270,350);
        line(9,85+66.25,268,85+66.25);
        line(9,85+132.5,269,85+132.5);
        line(9,85+198.75,268,85+198.75);
        
        //menu
        textSize(15);
        text("Gun man",14,103);
        text("$"+this.gunman_price,14,146);
        noFill();
        fill(0, 0, 0, 50);
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 106, 60, 39) && this.count > 3)
        {
            
            if(mouseIsPressed) 
            { 
                this.count = 0; 
                if(this.money >= this.gunman_price)
                {
                    this.money -= this.gunman_price;
                    this.gunman_value += 1;
                    this.gunman_price += this.gunman_upper;
                }
                
                
            }

        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 106, 60, 39))
        {
            if(mouseIsPressed) { }
            else
            {
                rect(72-this.choice_effect,106-this.choice_effect,60+this.choice_effect*2,39+this.choice_effect*2,5);
            }
            
        }
        rect(72,106,60,39,5);
        noFill();
        fill(0, 0, 0);
        
        
        textSize(15);
        text("Repair Man",14,170);
        text("$"+this.repairman_price,14,213);
        noFill();
        fill(0, 0, 0, 50);
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 173, 60, 39) && this.count > 3)
        {
            if(mouseIsPressed) 
            { 
                this.count = 0; 
                if(this.money >= this.repairman_price)
                {
                    this.money -= this.repairman_price;
                    this.repairman_value += 1;
                    this.repairman_price += this.repairman_upper;
                }
                
                
            }
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 173, 60, 39))
        {
            if(mouseIsPressed) { }
            else
            {
                rect(72-this.choice_effect,173-this.choice_effect,60+this.choice_effect*2,39+this.choice_effect*2,5);
            }
            
        }
        rect(72,173,60,39,5);
        noFill();
        fill(0, 0, 0);
        
        
        textSize(15);
        text("Upgrade Wall",14,236);
        text("$"+this.upgradewall_price[this.upgradewall_value],14,279);
        noFill();
        fill(0, 0, 0, 50);
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 307, 60, 39) && this.count > 3)
        {
            if(mouseIsPressed) 
            { 
                this.count = 0; 
                if(this.money >= this.repairhouse_price)
                {
                    this.money -= this.repairhouse_price;
                    this.repairhouse_value= 50;
		        }
            }
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 239, 60, 39) && this.count > 3 && this.upgradewall_value < 6)
        {
            if(mouseIsPressed) 
            { 
                this.count = 0; 
                if(this.money >= this.upgradewall_price[this.upgradewall_value])
                {
                    this.money -= this.upgradewall_price[this.upgradewall_value];
                    this.upgradewall_value += 1;
                }
            }
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 72, 239, 60, 39))
        {
            if(mouseIsPressed) { }
            else
            {
                rect(72-this.choice_effect,239-this.choice_effect,60+this.choice_effect*2,39+this.choice_effect*2,5);
            }
            
        }
        rect(72,239,60,39,5);
        noFill();
        fill(0, 0, 0);
        
        
        textSize(15);
        text("Repair House",14,304);
        text("$"+this.repairhouse_price,14,346);
        noFill();
        fill(0, 0, 0, 50);
        if(gf.CheckOnRect(mouseX, mouseY, 72, 307, 60, 39))
        {
            if(mouseIsPressed) { }
            else
            {
                rect(72-this.choice_effect,307-this.choice_effect,60+this.choice_effect*2,39+this.choice_effect*2,5);
            }
            
        }
        rect(72,307,60,39,5);
        
        this.count++;
        if(gf.CheckOnRect(mouseX, mouseY, 426, 166, 151, 20) && this.count > 3)
        {
            
        if(mouseIsPressed)
        { 
        this.count = 0;
        this.ammo_choice = 0;
        if(this.money>=ammo_price) 
        {
        if(this.select_gun_type ===0 )
        {
        if(this.ammo0_level < this.ammo0_maxlevel){
        this.money -= this.ammo0_price;
        this.ammo0_price += this.ammo0_price_upper;
        this.ammo0_level += 1;
        this.ammo0_value += this.ammo0_value_upper;
        }
        }
                    
        if(this.select_gun_type ===1)
        {
        if(this.ammo1_level < this.ammo1_maxlevel){
        this.money -= this.ammo1_price;
        this.ammo1_price += this.ammo1_price_upper;
        this.ammo1_level += 1;
        this.ammo1_value += this.ammo1_value_upper;
        }
        }
        if(this.select_gun_type ===2)
        {
        if(this.ammo2_level < this.ammo2_maxlevel){
        this.money -= this.ammo2_price;
        this.ammo2_price += this.ammo2_price_upper;
        this.ammo2_level += 1;
        this.ammo2_value += this.ammo2_value_upper;
        }
        }
        if(this.select_gun_type ===3)
        {
        if(this.ammo3_level < this.ammo3_maxlevel){
        this.money -= this.ammo3_price;
        this.ammo3_price += this.ammo3_price_upper;
        this.ammo3_level += 1;
        this.ammo3_value += this.ammo3_value_upper;
        }
        }
        }
        }
        }

        if(gf.CheckOnRect(mouseX, mouseY, 426, 166, 151, 20))
        {
            this.ammo_choice = 1;
            if(mouseIsPressed)
            { 
                this.ammo_choice = 0;
            }
            
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 426, 231, 151, 20) && this.count > 3)
        {
            
            if(mouseIsPressed)
            { 
                
                this.count = 0;
                this.damage_choice = 0;
                if(this.money>=damage_price) {
                    if(this.select_gun_type ===0)
                    {if(this.damage0_level < this.damage0_maxlevel){
                        this.money -= this.damage0_price;
                        this.damage0_price += this.damage0_price_upper;
                        this.damage0_level += 1;
                        this.damage0_value += this.damage0_value_upper;
                    }
                    }
                    
                    if(this.select_gun_type ===1)
                    {if(this.damage1_level < this.damage1_maxlevel){
                        this.money -= this.damage1_price;
                        this.damage1_price += this.damage1_price_upper;
                        this.damage1_level += 1;
                        this.damage1_value += this.damage1_value_upper;
                    }
                    
                    }
                    if(this.select_gun_type ===2)
                    {if(this.damage2_level < this.damage2_maxlevel){
                        this.money -= this.damage2_price;
                        this.damage2_price += this.damage2_price_upper;
                        this.damage2_level += 1;
                        this.damage2_value += this.damage2_value_upper;
                    }
                    }
                    if(this.select_gun_type ===3)
                    {if(this.damage3_level < this.damage3_maxlevel){
                        this.money -= this.damage3_price;
                        this.damage3_price += this.damage3_price_upper;
                        this.damage3_level += 1;
                        this.damage3_value += this.damage3_value_upper;
                    }
                        
                    }
                    
                }
                
            }
            
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 426, 231, 151, 20))
        {
            this.damage_choice = 1;
            if(mouseIsPressed)
            { 
                this.damage_choice = 0;
            }
            
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 426, 295, 151, 20) && this.count > 3)
        {
            
            if(mouseIsPressed)
            { 
                
                this.count = 0;
                this.reload_choice = 0;
                if(this.money>=reload_price) {
                    if(this.select_gun_type ===0)
                    {if(this.reload0_level < this.reload0_maxlevel){
                        this.money -= this.reload0_price;
                        this.reload0_price += this.reload0_price_upper;
                        this.reload0_level += 1;
                        this.reload0_value -= this.reload0_value_upper;
                    }
                    }
                    
                    if(this.select_gun_type ===1)
                    {if(this.reload1_level < this.reload1_maxlevel){
                        this.money -= this.reload1_price;
                        this.reload1_price += this.reload1_price_upper;
                        this.reload1_level += 1;
                        this.reload1_value -= this.reload1_value_upper;
                    }
                    
                    }
                    if(this.select_gun_type ===2)
                    {if(this.reload2_level < this.reload2_maxlevel){
                        this.money -= this.reload2_price;
                        this.reload2_price += this.reload2_price_upper;
                        this.reload2_level += 1;
                        this.reload2_value -= this.reload2_value_upper;
                    }
                    }
                    if(this.select_gun_type ===3)
                    {if(this.reload3_level < this.reload3_maxlevel){
                        this.money -= this.reload3_price;
                        this.reload3_price += this.reload3_price_upper;
                        this.reload3_level += 1;
                        this.reload3_value -= this.reload3_value_upper;
                    }
                        
                    }
                    
                }
                
            }
            
        }
        
        if(gf.CheckOnRect(mouseX, mouseY, 426, 295, 151, 20))
        {
            this.reload_choice = 1;
            if(mouseIsPressed)
            { 
                this.reload_choice = 0;
            }
            
        }
        
        else{this.reload_choice=0;}
        
        
        noFill();
        stroke(0, 0, 0);
        strokeWeight(4);
    
    
        //House 
        //gunman
        noFill();
        ellipse(104, 126, 33, 33);
        strokeWeight(2);
        fill(0, 0, 0);
        rect(90, 124, 3, 5);
        rect(115, 124, 6, 5);
        rect(101.4, 112, 5, 2);
        rect(101, 139, 5, 2);
        strokeWeight(1.5);
        line(93,126,113,126);
        line(104,142,104,109);
        
        //repair man
        noStroke();
        arc(87, 190, 17, 13, 180, 360);
        arc(90, 192, 17, 13, 247, 425);
        arc(90, 195, 17, 13, 318, 498);
        arc(87, 197, 17, 13, 0, 180);
        rect(95, 189, 33, 9,5);
        
        //upgrade wall
        stroke(0, 0, 0);
        strokeWeight(4);
        line(74,253,129,253);
        line(74,265,129,265);
        line(90,242,90,249);
        line(114,242,114,249);
        line(102,254,102,263);
        line(90,266,90,276);
        line(114,267,114,275);
        line(126,254,126,264);
        line(79,254,79,264);
    
        //repair house
        rect(80, 323, 28, 8);
        rect(90, 313, 8, 28);
        text("+50",106,345);
        
        // Pistol Select
        if(gf.CheckOnRect(mouseX, mouseY, 169, 91, 72, 49))
        {
            
            if(mouseIsPressed)
            {
                this.Pistol(0, 0, 1);
                this.select_gun_type = 0;
                fill(255, 0, 0);
            }
            else
            {
                this.Pistol(-7, -3, 1.04);
                
            }
        }
        else
        {
            this.Pistol(0, 0, 1);
        }
        // ShotGun Select
        if(gf.CheckOnRect(mouseX, mouseY, 147, 165, 120, 37))
        {
            
            if(mouseIsPressed)
            {
                //substitute
                if(this.gun_have[1] === 0 && this.money >= this.gun_price[1])
                {
                this.money -= this.gun_price[1];
                this.gun_have[1] = 1;
                }
                if(this.gun_have[1] === 1){
                this.select_gun_type = 1;
                }
                this.ShotGun(136, 107, 0.36);
            }
                //substitute
            else
            {
                this.ShotGun(134, 106, 0.37);
            }
        }
        else
        {
            this.ShotGun(136, 107, 0.36);
        }
        stroke(255, 0, 0);

        // Rifle Select
        if(gf.CheckOnRect(mouseX, mouseY, 144, 229, 123, 42))
        {
            if(mouseIsPressed)
            {
                //substitute
                if(this.gun_have[2] === 0 && this.money >= this.gun_price[2])
                {
                this.money -= this.gun_price[2];
                this.gun_have[2] = 1;
                }
                if(this.gun_have[2] === 1){
                this.select_gun_type = 2;
                }
                
                //substitute
                this.Rifle(124, 192, 0.28);
                
            }
            else
            {
                this.Rifle(121, 192, 0.29);
            }
        }
        else
        {
            this.Rifle(124, 192, 0.28);
        }
        
        // RPG Select
        if(gf.CheckOnRect(mouseX, mouseY, 144, 297, 123, 42))
        {
            if(mouseIsPressed)
            {
                
                //add
                if(this.gun_have[3] === 0 && this.money >= this.gun_price[3])
                {
                this.money -= this.gun_price[3];
                this.gun_have[3] = 1;
                }
                if(this.gun_have[3] === 1){
                this.select_gun_type = 3;
                }
                
                //add
                this.RPG(142, 233, 0.35);
            }
            else
            {
                this.RPG(140, 233, 0.36);
            }
        }
        else
        {
            this.RPG(142, 233, 0.35);
        }
        this.a_v = ammo_value;
        this.d_v = damage_value;
        this.r_v = reload_value;
    }
    
    this.return_value = [false, 
                        this.money, 
                        this.select_gun_type, 
                        this.a_v, 
                        this.d_v, 
                        this.r_v, 
                        this.gunman_value,
                        this.repairman_value, 
                        this.upgradewall_value, 
                        this.repairhouse_value, 
                        this.tower_have, 
                        this.tower_damage, 
                        this.tower_firerate];
        
    //[0] : cloased flag
    //[1] : money
    //[2] : select_gun_type
    //[3] : ammo_value
    //[4] : damage_value
    //[5] : reload_value
    //[6] : gunman_value
    //[7] : repairman_value
    //[8] : upgradewall_value
    //[9] : repairhouse_value
    //[10] : tower_have // true or false
    //[11] : tower_damage
    //[12] : tower_firerate // rate 100 to 1 (1 is faster speed)
    
    
    var doneX = 515;
    var doneY = 365;
    var doneW = 80;
    var doneH = 30;
    var done_text_size = 15;
    if(gf.CheckOnRect(mouseX, mouseY, doneX, doneY, doneW, doneH) )
    {
        doneX -= 1;
        doneY -= 1;
        doneW += 2;
        doneH += 2;
        done_text_size += 1;
        if(mouseIsPressed) 
        { 
            this.return_value[0] = true;
            return this.return_value[0];
        }
    }
    stroke(0, 0, 0);
    fill(0, 0, 0, 90);
    rect(doneX, doneY, doneW, doneH);
    
    fill(0, 0, 0);
    textSize(done_text_size);
    text("DONE", doneX+25, doneY+22);
    this.return_value[0] = false;
    return this.return_value[0];
    // Store bottom
};
Store.prototype.ReturnInfo = function()
{
    return this.return_value.slice();
};
Store.prototype.SyncStoreInfo = function(_money, _gun_type)
{
    this.money = _money;
    this.select_gun_type = _gun_type;
};


var Tower = function(xPos, yPos)
{
    this.active = true;
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale_size = 0.20;
    this.beam_damage = 1;
    this.beamX = this.xPos-17;
    this.beamY = this.yPos-41;
    this.targetX = 0;
    this.targetY = 0;
    
    this.target_idx = 0;
    
    this.beam_loaded = false;
    this.beam_loaded_time = 15;
    
    this.beam_load_time = 52;
    this.BEAM_LOAD_TIME = this.beam_load_time;
    this.beam_load_flag = true;
    
    this.beam_color = 255;
    this.beam_weight = 1;
    
};
Tower.prototype.DrawTower = function()
{
    pushMatrix();
    scale(this.scale_size);
    translate(this.xPos+1405, this.yPos+540);
    
    noStroke();
    fill(162,162,162);
    //stroke(255, 38, 255);
    //strokeWeight(2);
    beginShape();
    vertex(150,206);
    vertex(210,289);
    vertex(330,286);
    vertex(266,205);
    endShape();
    fill(0, 0, 0);
    rect(210,190,40,40);
    fill(30, 30, 30);
    rect(210,190,31,40);
    fill(50, 50, 50);
    rect(210,190,19,40);
    fill(70, 70, 70);
    rect(210,190,9,40);
    fill(179,179,179);
    beginShape();
    vertex(175,112);
    vertex(246,111);
    vertex(280,148);
    vertex(203,148);
    endShape();
    fill(128,128,128);
    beginShape();
    vertex(175,112);
    vertex(203,148);
    vertex(192,190);
    vertex(163,151);
    endShape();
    fill(98,98,98);
    beginShape();
    vertex(203,148);
    vertex(192,190);
    vertex(278,190);
    vertex(278,148);
    endShape();
    fill(77,77,77);
    beginShape();
    vertex(210,289);
    vertex(330,286);
    vertex(330,374);
    vertex(171,370);
    vertex(171,320);
    endShape();
    
    fill(61,61,61);
    stroke(61,61,61);
    strokeWeight(5);
    line(327,307,230,307);
    line(230,307,196,331);
    line(196,331,196,365);
    stroke(100,100,100);
    line(327,312,230,312);
    line(230,313,201,336);
    line(201,336,201,367);
    
    noStroke();
    fill(128,128,128);
    beginShape();
    vertex(210,289);
    vertex(171,320);
    vertex(110,235);
    vertex(150,206);
    endShape();
    
    fill(98,98,98);
    beginShape();
    vertex(171,320);
    vertex(171,370);
    vertex(110,281);
    vertex(110,235);
    endShape();
    
    fill(168,19,19);
    beginShape();
    vertex(324,278);
    vertex(310,261);
    vertex(190,262);
    vertex(204,281);
    endShape();
    
    fill(134,19,19);
    beginShape();
    vertex(190,262);
    vertex(204,281);
    vertex(164,311);
    vertex(150,293);
    endShape();

    fill(101,18,18);
    beginShape();
    vertex(164,311);
    vertex(150,293);
    vertex(150,339);
    vertex(164,358);
    endShape();
    
    fill(29,29,29);
    beginShape();
    vertex(187,141);
    vertex(195,149);
    vertex(189,169);
    vertex(181,160);
    endShape();
    stroke(255, 0, 0);
    
    popMatrix();
    // ********************
    /*
    strokeWeight(5);
    stroke(255, 0, 0);
    point(this.xPos, this.yPos);
    stroke(17, 0, 255);
    point(this.beamX, this.beamY);
    */
};
Tower.prototype.DrawBeam = function(attackX, attackY)
{
    strokeWeight(this.beam_weight);
    stroke(255, this.beam_color, this.beam_color);
    line(this.beamX, this.beamY, attackX, attackY);
};
Tower.prototype.Shooting = function(EnemyHandler, round_time)
{
        this.beam_load_time++;
        if(this.target_attack)
        {
            this.targetX = this.beamX;
            this.targetY = this.beamY;
        }
        if(this.beam_load_flag)
        {
            for(var i = 0; i < EnemyHandler.enemy_handler.length; i++)
            {
                if(EnemyHandler.enemy_handler[i] !== null)
                {
                    this.target_idx = i;
                    this.beam_loaded = true;
                    this.beam_load_flag = false;
                    break;
                }
                else
                {
                    this.beam_load_flag = true;
                }
            }
            
            if(this.beam_loaded)
            {
                this.beam_weight = 1;
                this.beam_color = 255;
                this.beam_load_time = 0;
            }
        }
        else
        {
            
            if(EnemyHandler.enemy_handler[this.target_idx] !== null && EnemyHandler.enemy_handler[this.target_idx].health > 0 )
            {
                this.targetX = EnemyHandler.enemy_handler[this.target_idx].xPos;
                this.targetY = EnemyHandler.enemy_handler[this.target_idx].yPos;
                if(this.beam_load_time < 15)
                {   this.beam_color -= 19;
                    this.beam_weight += 0.3;
                    this.DrawBeam(this.targetX, this.targetY);
                    EnemyHandler.GetShot(this.targetX, this.targetY, this.beam_damage);
                    
                }
                else
                {
                    this.target_attack = true;
                }
            }
            
        }
        if(this.beam_load_time > this.BEAM_LOAD_TIME)
        {
            this.beam_load_flag = true;
            this.target_attack = false;
        }
    
    //println("load f :"+this.beam_load_flag+" / load t :"+this.beam_load_time);
};


var GameController = function(player, enemy, base)
{
    this.round = 1;
    this.start_frame = true;
    this.start_frame_flag = false;
    this.end_frame = false;
    
    this.game_time = 0;
    this.round_time = 0;
    this.ROUND_TIME = 0;
    this.round_prev_time = 0;
    this.round_time_bar_xPos = 390;
    
    this.FIRST_ROUND_TIME = 30;
    // this value is actuall round time.
    
    this.round_start = true;
    this.round_start_init = false;
    this.store_close = false;
    this.round_start_time = 0;
    
    this.round_title_alpa = 0;
    
    this.PlayerHandler = player;
    this.EnemyHandler = enemy;
    this.BaseHandler = base;
    this.StoreHandler = new Store(this.PlayerHandler);
    this.TowerHandler = new Tower(420, 225);
    
    this.return_info = [0, 
                    this.PlayerHandler.money, 
                    this.PlayerHandler.gun_type, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    
    this.fance_upgrade = false;
    this.fance_level = 0;
    
    this.gunman_upgrade = false;
    
};
GameController.prototype.setRound = function(round) {
    this.round = round;
};
GameController.prototype.getRound = function() {
    return this.round;
};

GameController.prototype.NextRound = function()
{
    if(this.round_start)
    {  
        if(this.round_start_init === false)
        {
            this.BaseControll();
            if(this.StoreControll() )
            {
                this.StoreHandler.InitStore();
                this.EnemyHandler.InitEnemyHandler();
                this.TowerHandler.beam_load_flag = true;
                this.TowerHandler.beam_load_time = 0;
                //println("init***"+this.TowerHandler.beam_load_flag+" / "+this.TowerHandler.beam_load_time);
                this.EnemyHandler.tank_gen_value = this.round - 8;
                this.EnemyHandler.enemy_all_dead = true;
                this.DrawPlayerInfo();
                this.store_close = true;
            }
            else
            {
                this.EnemyHandler.InitEnemyHandler();
                this.DrawPlayerInfo();
                if(this.gunman_upgrade === true)
                {
                    this.BaseHandler.GUNMAN_SHOT_COUNTER -= 1;
                }
                this.store_close = false;
            }
            //println(this.return_info); //debug-return
        }
        else
        {
            //########## Game Main Loop ##########
            
            this.BaseControll();
            this.EnemyControll();
            this.PlayerControll();
            this.TowerControll();
            //Tower Controll has some problem that i couldn't solve
            this.BaseHandler.DrawGunMan(this.EnemyHandler);
            this.BaseHandler.RepairManAction();
        }
    }
    this.round_prev_time = this.round_time;
    
    // **** round time calculate ****
    this.game_time = parseInt(millis() / 1000, false);
    this.round_time = this.game_time - this.round_start_time;
    this.ROUND_TIME = this.FIRST_ROUND_TIME + (this.round-1)*2 ;
    
    if(this.round_prev_time+1 === this.round_time && this.round_time_bar_xPos <= 590 && this.store_close)
    {
        this.round_time_bar_xPos += 200 / this.ROUND_TIME;
    }
    stroke(255, 0, 0);
    strokeWeight(1);
    line(390, 35, this.round_time_bar_xPos, 35);
    
    if(this.round_start_init === false && this.store_close)
    {
        this.round_start_time = this.game_time;
        this.round_title_alpa = 0;
        this.round_start_init = true;
    }// round_start_init === false : init round
    else
    {
        if(this.store_close)
        {
            if( this.round_time < 5)
            {
                if(this.round_time <= 2)
                {
                    this.round_title_alpa+=8;
                }
                else
                {
                    this.round_title_alpa-=10;
                }
                fill(0, 0, 0, this.round_title_alpa);
                textSize(40);
                text("ROUND   "+this.round, 200, 230);
            }
            if( this.round_time >= this.ROUND_TIME )
            {
                this.round_time_bar_xPos = 390;
                this.round++;
                this.round_start_init = false;
            }
        }
    }
};
GameController.prototype.DrawPlayerGun = function()
{
    if(this.PlayerHandler.gun_type === 0)
    {
        this.StoreHandler.Pistol(-110, -32, 0.70);
    }
    else if(this.PlayerHandler.gun_type === 1)
    {
        this.StoreHandler.ShotGun(-4, -36, 0.37);
    }
    else if(this.PlayerHandler.gun_type === 2)
    {
        this.StoreHandler.Rifle(-15, -12, 0.29);
    }
    else if(this.PlayerHandler.gun_type === 3)
    {
        this.StoreHandler.RPG(3, -39, 0.37);
    }
    else
    {
        gf.Message("Select Gun Error");
    }
};
GameController.prototype.DrawPlayerInfo = function()
{
    this.PlayerHandler.DrawMoney();
    this.PlayerHandler.DrawAim();
    this.PlayerHandler.DrawLoaded();
    if(!this.start_frame)
    {
        this.DrawPlayerGun();
    }
    
};
GameController.prototype.PlayerControll = function()
{
    this.PlayerHandler.DrawMoney();
    this.DrawPlayerGun();
    this.PlayerHandler.Shooting(this.EnemyHandler);
};

GameController.prototype.EnemyControll = function()
{
    
    this.EnemyHandler.Generate(this.round);
    this.EnemyHandler.Attack(this.BaseHandler, this.PlayerHandler);
    
};
GameController.prototype.BaseControll = function()
{
    this.BaseHandler.Draw();
};
GameController.prototype.StoreControll = function()
{
    this.return_info = this.StoreHandler.ReturnInfo();
    this.StoreUpgrade();
    this.return_info[0] = this.StoreHandler.DrawStore(this.PlayerHandler.money, this.PlayerHandler.gun_type);
    return this.return_info[0];
};
GameController.prototype.StoreUpgrade = function()
{
    this.return_info[1] += this.PlayerHandler.earn_money;
    this.PlayerHandler.money = this.return_info[1];
    this.PlayerHandler.earn_money = 0;
    this.PlayerHandler.gun_type = this.return_info[2];
    this.PlayerHandler.gun_load[this.PlayerHandler.gun_type] = this.return_info[3];
    this.PlayerHandler.gun_loaded = this.return_info[3];
    this.PlayerHandler.gun_dmg[this.PlayerHandler.gun_type] = this.return_info[4];
    this.PlayerHandler.gun_reload_times[this.PlayerHandler.gun_type] = this.return_info[5];
    if(this.BaseHandler.gunman_counter+1 === this.return_info[6])
    {
        this.gunman_upgrade = true;
    }
    else
    {
        this.gunman_upgrade = false;
    }
    this.BaseHandler.gunman_counter = this.return_info[6];
    this.BaseHandler.repairman_counter = this.return_info[7];
    if(this.fance_level !== this.return_info[8])
    {
        this.fance_upgrade = true;
        this.fance_level = this.return_info[8];
    }
    else
    {
        this.fance_upgrade = false;
    }
    if(this.fance_upgrade === true)
    {
        
        if(this.return_info[8] <= 0)
        {
            this.BaseHandler.fance_counter = 1;
            this.BaseHandler.HEALTH = 100;
        }
        else
        {
            this.BaseHandler.fance_counter += 6 *this.return_info[8];
            this.BaseHandler.HEALTH = 100 * this.return_info[8] + 100;
        }
    }
    
    if(this.BaseHandler.health < this.BaseHandler.HEALTH)
    {
        this.BaseHandler.health += this.return_info[9];
        if(this.BaseHandler.health >= this.BaseHandler.HEALTH)
        {
            this.BaseHandler.health = this.BaseHandler.HEALTH;
        }
    }
    
    if(this.return_info[10])
    {
        this.TowerHandler.active = true;
    }
    else
    {
        this.TowerHandler.active = false;
    }
    this.TowerHandler.beam_damage = this.return_info[11];
    this.TowerHandler.BEAM_LOAD_TIME = this.return_info[12];
    //[0] : cloased flag
    //[1] : money
    //[2] : select_gun_type
    //[3] : ammo_value
    //[4] : damage_value
    //[5] : reload_value
    //[6] : gunman_value
    //[7] : repairman_value
    //[8] : upgradewall_value
    //[9] : repairhouse_value
    //[10] : tower_have // true or false
    //[11] : tower_damage
    //[12] : tower_firerate // rate 100 to 1 (1 is faster speed)
};
GameController.prototype.StoreSync = function()
{
    this.StoreHandler.SyncStoreInfo(this.PlayerHandler.money, this.PlayerHandler.gun_type);
};
GameController.prototype.TowerControll = function()
{
    if(this.TowerHandler.active)
    {
        this.TowerHandler.DrawTower();
        this.TowerHandler.Shooting(this.EnemyHandler, this.round_time);
        debug(this.round+"round shooting");
    }
};

GameController.prototype.Start = function()
{
    if(this.start_frame === true)
    {
        this.BaseControll();
        this.BaseHandler.gunman_counter = 100;
        this.BaseHandler.fance_counter = 100;
        this.BaseHandler.DrawBase();
        for(var i = 0; i < this.BaseHandler.fance_counter; i++)
        {
            this.BaseHandler.DrawFance(-10, i * -2);
            if(i % 4 === 0)
            {
                this.BaseHandler.DrawWire(-10, i* -2);
            }
        }
        this.BaseHandler.DrawHealth();
        this.BaseHandler.DrawGunMan(this.EnemyHandler);
        this.DrawPlayerInfo();
        this.TowerHandler.DrawTower();
        this.TowerHandler.Shooting(this.EnemyHandler, this.round_time);
        this.EnemyHandler.tank_gen_value = 100;
        this.EnemyHandler.Generate(100);
        this.EnemyHandler.Attack(this.BaseHandler, this.PlayerHandler);
        
        fill(255,255,255);
        noStroke();
        rect(0, 0, 600, 80);
        
        fill(242, 230, 242, 180);
        rect(0, 0, 600, 400);
        
        var text_size = 40;
        fill(0, 0, 0);
        textSize(text_size);
        text("Defense the Bucheon Univ.", 80, 80);
        
        if(gf.CheckOnRect(mouseX, mouseY, 250, 270,93, 30) && mouseIsPressed)
        {
            text_size = 42;
            this.BaseHandler.gunman_counter = 0;
            this.BaseHandler.fance_counter = 0;
            this.EnemyHandler.tank_gen_value = 0;
            this.PlayerHandler.money = 0;
            this.PlayerHandler.earn_money = 0;
            this.BaseHandler.health = this.BaseHandler.HEALTH;
            this.start_frame = false;
            return this.start_frame;
        }
        textSize(text_size);
        fill(0, 0, 0, 40);
        rect(248, 265, 78, 38);
        fill(0, 0, 0);
        text("PLAY", 250, 300);
    }
    return this.start_frame;
};
GameController.prototype.Over = function()
{
    if(this.BaseHandler.getHealth() <= 0)
    {
        this.end_frame = true;
        this.BaseHandler.health = 0;
        return true;
    }
    return false;
};
GameController.prototype.OverFrame = function()
{
    this.EnemyControll();
    this.PlayerControll();
    fill(0, 0, 0, 140);
    rect(0, 0, 600, 400);
    fill(255, 255, 255);
    textSize(52);
    text("Game Over", 194, 236);
};

var game = new GameController(new Player(), new EnemyHandler(),
        new Base());

game.StoreSync();

draw = function() {
    background(255, 255, 255);
    
    game.BaseHandler.Draw();
    if(!game.Start())
    {
        if(!game.Over())
        {
            // ########## Game Main Loop ##########
            game.NextRound();
        }
        else
        {
            // ########## Game Over ##########
            game.OverFrame();
        }
    }
    
    //println(mouseX+" "+mouseY);
    frameRate(24);
    
};

