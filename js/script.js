let progress=0;
let sliderElement;
let animationStartTime;

let wrapper;
let stop=false;
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

function nextSlide(t){
	if(!animationStartTime) animationStartTime=t;
	animationTime=t-animationStartTime;
	progress=animationTime*100/5000;
	if(progress>=100){
		progress=100;
		wrapper.append(wrapper.children[0]);
	} 
	wrapper.style.marginLeft='-'+progress+'%';
	if (progress<100) requestAnimationFrame(nextSlide);
	else wrapper.style.marginLeft='';
	stop===false;

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
		stop===true;
		animationStartTime=null;
		wrapper.style.marginLeft='';
		requestAnimationFrame(nextSlide);
	})
	arrowLeft.addEventListener('click', ()=>{
		stop=true;
		animationStartTime=null;
		requestAnimationFrame(priviousSlide);
	})

})