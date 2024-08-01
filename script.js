//your JS code here. If required.
but=document.getElementsByTagName('input')[0]
// console.log(but)
but.addEventListener('click',func)
sel=document.getElementById('colorSelect')
options=Array.from(sel.options)
optionsText=options.map((value=> value.textContent))

function func(){
	deletEle=sel.value
	optionsText=optionsText.filter(value=> value!=deletEle)
	sel.innerHTML=''
	
	optionsText.forEach(value=> {
		newOp= document.createElement('option')
		newOp.innerText=value
		sel.appendChild(newOp)
	} )
}