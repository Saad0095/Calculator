function sum(a){
    // alert(a)
    document.getElementById('textInp').value += a
}

function eq(){
    var b = document.getElementById('textInp')
    b.value = eval(b.value)
}

function clearall(){
    document.getElementById('textInp').value = ' '
}

function bckspc(){
    var c = document.getElementById('textInp')
    c.value = c.value.slice(0,-1)
}