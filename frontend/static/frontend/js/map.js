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
var locname;
var descr
function showDetail(x){ 
        console.log(x)
        console.log("werwe")
        geojson.forEach(function(element){
            if(element.fields.location_name == x){
                startvalue = element.fields.percent_full
                locname = x
                descr = element.fields.description
                
            }
        });
        console.log(locname)
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
        test.setAttribute('id', 'name');
        test.innerHTML = locname

        var cardele = document.createElement('div')
        cardele.setAttribute('id','desc')
        cardele.innerHTML = "<div class='card' style='width: 18rem;'> \n <img class='card-img-top' id='imgchoose' alt='Card image cap'> \n<div class='card-body'>\n<p class='card-text'>" + descr + "</p>\n</div>\n</div>"
        

        overalldiv.appendChild(test)
        overalldiv.appendChild(slider)
        overalldiv.appendChild(out)
        overalldiv.appendChild(cardele)
        
        overalldiv.style = "margin-top: 4cm;";

        document.getElementById('info').appendChild(overalldiv)
        var imgchoose = document.getElementById('imgchoose');
        if(x == "Clemons" || x == "clemons"){
            imgchoose.src = "../../static/frontend/images/Clemons.jpg"
        }
        if(x == "Alderman" || x == "alderman"){
            imgchoose.src = "../../static/frontend/images/alderman.jpg"
        }
        if(x == "Clark" || x == "clark"){
            imgchoose.src = "../../static/frontend/images/clark.jpg"
        }
        if(x == "AFC" || x == "afc"){
            imgchoose.src = "../../static/frontend/images/afc.jpg"
        }
        if(x == "roots"){
            imgchoose.src = "../../static/frontend/images/roots.jpg"
        }
        if(x == "bodos"){
            imgchoose.src = "../../static/frontend/images/bodos.jpg"
        }
        if(x == "newcomb"){
            imgchoose.src = "../../static/frontend/images/newcomb.jpg"
        }
        if(x == "grit"){
            imgchoose.src = "../../static/frontend/images/grit.jpg"
        }
        if(x == "ohill"){
            imgchoose.src = "../../static/frontend/images/ohill.jpg"
        }
        if(x == "argoTea"){
            imgchoose.src = "../../static/frontend/images/argoTea.jpg"
        }
        if(x == "starbucks"){
            imgchoose.src = "../../static/frontend/images/starbucks.jpg"
        }
        if(x == "slaughter"){
            imgchoose.src = "../../static/frontend/images/slaughter.jpg"
        }
        if(x == "mem"){
            imgchoose.src = "../../static/frontend/images/mem.jpg"
        }
        if(x == "northGrounds" || x == "northgrounds"){
            imgchoose.src = "../../static/frontend/images/northGrounds.jpg"
        }
        if(x == "runk"){
           imgchoose.src = "../../static/frontend/images/runk.jpg"
        }
        if (x == "1515") {
            imgchoose.src = "../../static/frontend/images/1515.jpg"
        }
        if (x == "ClaudeMooreHealthSciencesLibrary" || x == "claudemoorehealthscienceslibrary") {
            imgchoose.src = "../../static/frontend/images/claudemoorehealthscienceslibrary.jpg"
        }
        if (x == "dardenschoolofbusiness") {
            imgchoose.src = "../../static/frontend/images/dardenschoolofbusiness.jpg"
        }
        if (x == "DavisCommons" || x == "daviscommons") {
            imgchoose.src = "../../static/frontend/images/daviscommons.jpg"
        }
        if (x == "Lawn" || x == "lawn") {
            imgchoose.src = "../../static/frontend/images/lawn.jpg"
        }
        if (x == "McIntireSchoolofCommerce" || x == "mcintireschoolofcommerce") {
            imgchoose.src = "../../static/frontend/images/mcintireschoolofcommerce.jpg"
        }
        if (x == "NauHall" || x == "nauhall") {
            imgchoose.src = "../../static/frontend/images/nauhall.jpg"
        }
        if (x == "OlssonLabs" || x == "olssonlabs") {
            imgchoose.src = "../../static/frontend/images/olssonlabs.jpg"
        }
        if (x == "RisingRoll" || x == "risingroll") {
            imgchoose.src = "../../static/frontend/images/risingroll.jpg"
        }
        if (x == "thortonstacks") {
            imgchoose.src = "../../static/frontend/images/thortonstacks.jpg"
        }
        if (x == "universityofvirginiaschooloflaw") {
            imgchoose.src = "../../static/frontend/images/universityofvirginiaschooloflaw.jpg"
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
        var cardele = document.getElementById('desc');
        cardele.innerHTML = "<div class='card' style='width: 18rem;'> \n <img class='card-img-top'  alt='Card image cap'> \n<div class='card-body'>\n<p class='card-text'>" + descr + "</p>\n</div>\n</div>"
        var test = document.getElementById("name")
        test.setAttribute('id', 'name');
        test.innerHTML = locname
        var imgchoose = document.getElementsByClassName('card-img-top')[0]
        if(x == "Clemons" || x == "clemons"){
            imgchoose.src = "../../static/frontend/images/Clemons.jpg"
        }
        if(x == "Alderman" || x == "alderman"){
            imgchoose.src = "../../static/frontend/images/alderman.jpg"
        }
        if(x == "Clark" || x == "clark"){
            imgchoose.src = "../../static/frontend/images/clark.jpg"
        }
        if(x == "AFC" || x == "afc"){
            imgchoose.src = "../../static/frontend/images/afc.jpg"
        }
        if(x == "roots"){
            imgchoose.src = "../../static/frontend/images/roots.jpg"
        }
        if(x == "bodos"){
            imgchoose.src = "../../static/frontend/images/bodos.jpg"
        }
        if(x == "newcomb"){
            imgchoose.src = "../../static/frontend/images/newcomb.jpg"
        }
        if(x == "grit"){
            imgchoose.src = "../../static/frontend/images/grit.jpg"
        }
        if(x == "ohill"){
            imgchoose.src = "../../static/frontend/images/ohill.jpg"
        }
        if(x == "argoTea"){
            imgchoose.src = "../../static/frontend/images/argoTea.jpg"
        }
        if(x == "starbucks"){
            imgchoose.src = "../../static/frontend/images/starbucks.jpg"
        }
        if(x == "slaughter"){
            imgchoose.src = "../../static/frontend/images/slaughter.jpg"
        }
        if(x == "mem"){
            imgchoose.src = "../../static/frontend/images/mem.jpg"
        }
        if(x == "northGrounds" || x == "northgrounds"){
            imgchoose.src = "../../static/frontend/images/northGrounds.jpg"
        }
        if(x == "runk"){
           imgchoose.src = "../../static/frontend/images/runk.jpg"
        }
        if (x == "1515") {
            imgchoose.src = "../../static/frontend/images/1515.jpg"
        }
        if (x == "ClaudeMooreHealthSciencesLibrary" || x == "claudemoorehealthscienceslibrary") {
            imgchoose.src = "../../static/frontend/images/claudemoorehealthscienceslibrary.jpg"
        }
        if (x == "dardenschoolofbusiness") {
            imgchoose.src = "../../static/frontend/images/dardenschoolofbusiness.jpg"
        }
        if (x == "DavisCommons" || x == "daviscommons") {
            imgchoose.src = "../../static/frontend/images/daviscommons.jpg"
        }
        if (x == "Lawn" || x == "lawn") {
            imgchoose.src = "../../static/frontend/images/lawn.jpg"
        }
        if (x == "McIntireSchoolofCommerce" || x == "mcintireschoolofcommerce") {
            imgchoose.src = "../../static/frontend/images/mcintireschoolofcommerce.jpg"
        }
        if (x == "NauHall" || x == "nauhall") {
            imgchoose.src = "../../static/frontend/images/nauhall.jpg"
        }
        if (x == "OlssonLabs" || x == "olssonlabs") {
            imgchoose.src = "../../static/frontend/images/olssonlabs.jpg"
        }
        if (x == "RisingRoll" || x == "risingroll") {
            imgchoose.src = "../../static/frontend/images/risingroll.jpg"
        }
        if (x == "thortonstacks") {
            imgchoose.src = "../../static/frontend/images/thortonstacks.jpg"
        }
        if (x == "universityofvirginiaschooloflaw") {
            imgchoose.src = "../../static/frontend/images/universityofvirginiaschooloflaw.jpg"
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