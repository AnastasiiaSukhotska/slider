let progress=0;
let sliderElement;
let animationStartTime;

let wrapper;
let stop=false;
let stop2=true;
let animationTime=null;
let animationStartTime2;

function animateSlider(t){
	
	if(!animationStartTime) animationStartTime=t;

	animationTime=t-animationStartTime;
	progress=animationTime*100/5000;
	if(progress>=100){
		animationStartTime=t;
		progress=100;
		wrapper.append(wrapper.children[0]);

	} 
	wrapper.style.marginLeft='-'+progress+'%';
	if (stop===false){ requestAnimationFrame(animateSlider);
		}
	else wrapper.style.marginLeft='';
	
}



function _nextSlide(t){
	stop2=false;
	console.log(stop2);
	if(!animationStartTime) animationStartTime=t;
	animationTime=t-animationStartTime;
	progress=animationTime*100/5000;
	if(progress>=100){
		progress=100;
		wrapper.append(wrapper.children[0]);
	} 
	wrapper.style.marginLeft='-'+progress+'%';
	if (progress<100) {
	
	requestAnimationFrame(_nextSlide);
	console.log(stop2);
	}
	else wrapper.style.marginLeft='';
	stop2=true;


	

}

function nextSlide(){
	if(stop2===false){
		
		return;
	} 
	else if(stop2===true){
	
	requestAnimationFrame(_nextSlide);
	
	}
}



function priviousSlide(t){
	if(!animationStartTime){
		animationStartTime=t;
		wrapper.prepend(wrapper.lastChild);
		wrapper.style.marginLeft='-100%';

} 
	animationTime=t-animationStartTime;
	progress=animationTime*100/5000;
	if(progress>=100){
		progress=100;
		

	} 
	wrapper.style.marginLeft=(-100+progress)+'%';
	if (progress<100) requestAnimationFrame(priviousSlide);
	else wrapper.style.marginLeft='';
	animationStartTime;
	
}

document.addEventListener('DOMContentLoaded',()=>{
	sliderElement=document.querySelector('.slider');
	wrapper=document.querySelector('.slider__wrapper');
	let arrowLeft=sliderElement.querySelector('.slider__arrow-left');
	let arrowRight=sliderElement.querySelector('.slider__arrow-right');
	requestAnimationFrame(animateSlider);
	sliderElement.addEventListener('mouseout', ()=>{
		stop=false;
		animationStartTime;
		wrapper.style.marginLeft='';
		requestAnimationFrame(animateSlider);
	})
	sliderElement.addEventListener('mouseover', ()=>{
		
		
		stop=true;
		
	})
	arrowRight.addEventListener('click', ()=>{
		
		animationStartTime=null;
		wrapper.style.marginLeft='';
		nextSlide();
		
	})
	arrowLeft.addEventListener('click', ()=>{
		stop=true;
		animationStartTime=null;
		requestAnimationFrame(priviousSlide);
	})

})