document.getElementById('homepage').addEventListener('click', function(){
    changeRef('homepage')
});

function changeRef(x){
    if (x == 'homepage'){
        window.location.href = "../index";
    }
}





var doOnce = false;
var card = "<div class='card' style='width: 18rem;'> \n <img class='card-img-top'  alt='Card image cap'> \n<div class='card-body'>\n<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n</div>\n</div>"
var startvalue;
var locname
function showDetail(x){ 
        geojson.forEach(function(element){
            if(element.fields.location_name == x){
                startvalue = element.fields.percent_full
                locname = x
            }
        });
        if(doOnce == false){
        var slider = document.getElementById("myRange")
        slider.setAttribute("value", startvalue)
        slider.setAttribute("type", "range")
        slider.setAttribute("min", "0")
        slider.setAttribute("max", "100")
        slider.setAttribute("id", "myRange")
        slider.setAttribute("class", "slider")
        slider.setAttribute('name', 'myRange')

        slider.style="visibility: visible;";
        var out = document.getElementById('out')
        out.style = "visibility:visible;";
        out.innerHTML = slider.defaultValue;
        var overalldiv = document.createElement('div')
        var test = document.createElement("h1")
        test.innerHTML = "TEST"

        var cardele = document.createElement('div')
        cardele.innerHTML = card
        

        overalldiv.appendChild(test)
        overalldiv.appendChild(slider)
        overalldiv.appendChild(out)
        overalldiv.appendChild(cardele)
        
        overalldiv.style = "margin-top: 4cm;";

        document.getElementById('info').appendChild(overalldiv)
        var imgchoose = document.getElementsByClassName('card-img-top')[0]
        if(x == "Clemons"){
            imgchoose.src = "../../static/frontend/images/clem.jpg"
        }
        if(x == "Alderman"){
            imgchoose.src = "../../static/frontend/images/alderman.jpg"
        }
        if(x == "Clark"){
            imgchoose.src = "../../static/frontend/images/clark.jpg"
        }

        var ret = document.createElement('button');
        ret.setAttribute('class', 'accordion');
        ret.innerHTML = "go back";
        ret.addEventListener('click', removeDetails);

        
        var submit = document.createElement('input')
        submit.setAttribute('type', 'submit')
        submit.setAttribute('value', 'Submit Occupancy!')

        var inputname = document.getElementById('location')
        inputname.setAttribute('type', 'hidden')
        inputname.setAttribute('value', locname)
        inputname.setAttribute('name', 'location')
        inputname.style="visiblity:hidden;";




        overalldiv.appendChild(ret)
        overalldiv.appendChild(submit)
        overalldiv.appendChild(inputname)

        doOnce = true
    }
    else{
        var imgchoose = document.getElementsByClassName('card-img-top')[0]
        if(x == "Clemons"){
            imgchoose.src = "../../static/frontend/images/clem.jpg"
        }
        if(x == "Alderman"){
            imgchoose.src = "../../static/frontend/images/alderman.jpg"
        }
        if(x == "Clark"){
            imgchoose.src = "../../static/frontend/images/clark.jpg"
        }   
        var slider = document.getElementById("myRange")

        slider.setAttribute("value", startvalue)
        slider.setAttribute('name', 'myRange')

        var out = document.getElementById('out')
        out.innerHTML = slider.defaultValue;

        var inputname = document.getElementById('location')
        inputname.setAttribute('type', 'hidden')
        inputname.setAttribute('value', locname)
        inputname.setAttribute('name', 'location')

        inputname.style="visiblity:hidden;";
    }
    
        
}



function removeDetails(){
    var myNode = document.getElementById('info')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var createSlider = document.createElement('input')
    createSlider.style = "visibility:hidden;"
    createSlider.setAttribute('id', 'myRange')
    createSlider.setAttribute('name', 'myRange')
    var createOutput = document.createElement('p')
    createOutput.style = "visibility:hidden;";
    createOutput.setAttribute('id', 'out');
    var inputname = document.createElement('input')
    inputname.setAttribute('id', 'location')
    inputname.setAttribute('type', 'hidden')
    inputname.setAttribute('value', locname)
    inputname.setAttribute('name', 'location')
    inputname.style="visiblity:hidden;";

    myNode.appendChild(inputname)
    myNode.appendChild(createSlider)
    myNode.appendChild(createOutput)
    doOnce = false
}






var slider2 = document.getElementById("myRange");
var output = document.getElementById("out");
output.innerHTML = slider2.value;

slider2.oninput = function() {
output.innerHTML = this.value;
}