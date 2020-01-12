function slider(container, pagicontainer, nav){
	this.container=container;
	this.pagicontainer=pagicontainer;
	this.nav=nav.hide(); 
	this.imgs=this.container.find('.slides');  
    this.width=this.imgs[0].width; 
	this.imgLen=this.imgs.length;
	
	cnt=0;
	this.liArr = $(pagicontainer).find('li'); 
	this.liArr.each(function()
	{
        $anchor=$(this).find('a');
		$anchor.data('pgno',cnt);
		cnt++;
    });
	this.current=0; 
    }
	
slider.prototype.transition=function(coords){
	this.container.animate({
		'margin-left': coords || -(this.current*this.width)
	},500);
	this.pagicontainer.find('li a').removeClass("pagi-selected");
	this.pagicontainer.find("li:nth-child("+(this.current+1)+") a").toggleClass("pagi-selected");			
    };

slider.prototype.setCurrentPos=function(dir){
	var pos=this.current;
	console.log('Value of this.value is : '+dir);
	if(isNaN(dir))
	{
		pos+= Math.floor(dir=='next') || -1; 
		this.current=(pos<0)?this.imgLen-1: pos%(this.imgLen);
	}
	else
		this.current=Number(dir);
	console.log(this.current);
	};
