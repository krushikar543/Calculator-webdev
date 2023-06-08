var left_bar = document.getElementById('left_bracket');
var right_bar = document.getElementById('right_bracket');
left_bar.onclick = () => {
    var result = document.getElementById("result");
    result.value += "(";
};

right_bar.onclick = () => {
    var result = document.getElementById("result");
    result.value += ")";
};

function display_Content(val){
    var result = document.getElementById("result");
    if(val === '**2'){
        var r = eval(result.value);
        r = r**2;
        result.value = r;
    }
    else{
        result.value += val;
    }
}

function clear_output(){
    var result = document.getElementById("result");
    result.value = "";
}

function calculate(){
    var result = document.getElementById("result");
    var ans = eval(result.value);
    result.value = ans;
}

function delete_content(){
    var result =document.getElementById("result");
    result.value = result.value.slice(0, -1);
}


