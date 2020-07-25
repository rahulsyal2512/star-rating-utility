function Star(el, count, callback) {
	this.el = document.querySelector(el);
  this.count = count;
  this.callback = callback;
  this.active = -1;
  this.showStars();
  this.handleEvents();
}

Star.prototype.showStars = function(){
	let emptyFragment = document.createDocumentFragment("");
	for(let i = 0; i < this.count; i++){
    const newElem = document.createElement("i");
    newElem.setAttribute("index", i + 1);
    newElem.classList.add('fa');
    newElem.classList.add('fa-star-o');
    emptyFragment.appendChild(newElem);
	}
  this.el.appendChild(emptyFragment);
}

Star.prototype.handleEvents = function(){
	this.el.addEventListener("mouseover", ()=>{
    this.fillUp(event.target.getAttribute("index"))
  });
  this.el.addEventListener("mouseout", ()=>{
    this.fillUp(this.active)
  });
  this.el.addEventListener("click", ()=>{
    this.active = +event.target.getAttribute("index");
    this.callback(this.active)
  });
}

Star.prototype.fillUp = function(activeIndex){
  for(var i=1; i<=this.count; i++){
  const elem= document.querySelector("i[index='"+i+"']");
  if(i <= activeIndex){
  	      elem.classList.add("fa-star");
  	    }
  	    else{
  	      elem.classList.remove("fa-star");
  	    } 
  }
}

function getStar(value){
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);