window.addEventListener('load',init,false);
window.addEventListener('keydown', key, false);

function init(){

	bx=0;
	by=0;
	bh=bw=50;
	bxs=bys=5;

	px=400;
	py=500;
	pw=200;
	ph=50;
	pxs=pys=5;

	moveLeft=moveRight=false;

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	run();

}

function run(){

	ball_ai();
	paddle_ai();
collide(bx,px,by,py,bw,pw);
	paint();

	reqAnimFrame = window.mozRequestAnimationFrame    ||window.webkitRequestAnimationFrame ||   window.msRequestAnimationFrame   ||  window.oRequestAnimationFrame;

	reqAnimFrame(run);
}

function ball_ai(){

	bx+=bxs;
	by+=bys;

	if( (bx>=800-bw)||(bx<=0) ){
		bxs = -bxs;
	}

	if(by<=0){
		bys=-bys;
	}
}

function paddle_ai(){

	if(moveLeft){
		px-=pxs;
	}
	if(moveRight){
		px+=pxs;
	}

	if(px>=800-pw){
px=800-pw;
	}
	if(px<=0){
px=0;
	}


}

function collide(x1,x2,y1,y2,x1w,x2w){

	if( ((x1>x2)&& (x1<x2+x2w)) || ( (x1+x1w>x2) && (x1+x1w<x2+x2w) ) ){

		if( (y1+x1w>=y2) ){
			y1=y2-x1w;
			bys =- bys;
		}
	}
}

function key(e){

	if(e.keyCode==37){
moveLeft=true;
moveRight=false;
	}

	if(e.keyCode==39){
moveRight=true;
moveLeft=false;
	}
}

function paint(){

	ctx.clearRect(0,0,800,600);
	ctx.fillStyle=('rgb(0,255,0)');
	ctx.fillRect(bx,by,bw,bh);
	ctx.fillStyle='yellow';
	ctx.fillRect(px,py,pw,ph);


}