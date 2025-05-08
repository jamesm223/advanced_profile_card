
function myFunction() {
    var element = document.getElementById('card-container');
    element.classList.toggle("flipped");
    
}


function portfolioFunction() {
    var element = document.getElementById('about-text')
    var image = document.getElementById('profile-img')
    var toptxt = document.getElementById('name')
    element.classList.add('hidden')
    image.classList.add('shrunk')
    toptxt.classList.add('moved')
}

function aboutFunction() {
    var element = document.getElementById('about-text')
    var image = document.getElementById('profile-img')
    var toptxt = document.getElementById('name')
    element.classList.remove('hidden')
    image.classList.remove('shrunk')
    toptxt.classList.remove('moved')
}