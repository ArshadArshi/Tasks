class ProgressBar{
    constructor(element,initialValue = 0){
        this.valueElem = element.querySelector('.progress-bar-value')
        this.fill = element.querySelector('.progress-bar-fill')
        this.setValue(initialValue)
    }
    setValue(newValue){
        if(newValue < 0){
            newValue = 0;
        }
        if(newValue > 100){
            newValue = 100;
        }
        this.value = newValue;
        this.update();
    }
    update(){
        const percent = this.value + '%';

        this.fill.style.width = percent;
        this.valueElem.textContent = percent;
    }
}

const pb1 = new ProgressBar(document.querySelector('.progress-bar'),75)

const a = document.getElementById('my')
a.innerHTML = 'My name is <strong>Javascript DOM</strong>'


const ab = document.getElementById('para')
ab.insertAdjacentHTML('afterend','<h1>Hello</h1>')

const c = ab.matches('#para')
console.log(c);

const List = document.getElementById('list')
 List.addEventListener("click",function(e){
    const target = e.target;

    if(e.target.matches('li')){
        target.style.background = 'yellow'
    }
 })
 const exisList = List.children[2];

 const newList = document.createElement('li')

 newList.textContent = 'Potato'
 List.replaceChild(newList,exisList)

