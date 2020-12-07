const car = ['BMW', 'Audi', 'Ford', 'Mazda']
const year = ['2016', '2017', '2018', '2019']
const color = [  'red', 'blue', 'black', 'white']

const colorList = document.querySelector('.colorlist')

function addList(array) {
	colorList.innerText = '';	
 	array.map((function(a) {
 			let li = document.createElement('li');
			li.innerText = a;		
 			colorList.append(li);
		})
 	)
}

document.querySelector('.car').addEventListener("click", function(){
  addList(car);
})
document.querySelector('.year').addEventListener("click", function(){
  addList(year);
})
document.querySelector('.color').addEventListener("click", function(){
  addList(color);
})

document.querySelectorAll('.button_color').forEach(button => {
    button.classList.add(button.innerText);
    button.addEventListener("click", function(){
    let textColor = this.innerText;
    let listColor = document.querySelector('.colorlist')
    listColor.classList.value = '';
    listColor.classList.add('colorlist',textColor);  
    })
})





