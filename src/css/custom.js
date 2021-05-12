//Place Switcher CSS
const pin = document.getElementById('pin_btn');
const dis = document.getElementById('dis_btn');
const pinDiv = document.querySelector('.pincode_view');
const disDiv = document.querySelector('.district_view');
//search form box for appearing on clicking
const pinForm = document.querySelector('.pin_form');
const disForm = document.querySelector('.dis_form');


pin.addEventListener('click',function(){
    pinDiv.style.backgroundColor = "#28a745";
    pinDiv.style.borderRadius = "30px";
    pinForm.style.display = "flex";
    disDiv.style.backgroundColor = "transparent";
    disDiv.style.borderRadius = "0px 30px 30px 0px";
    disForm.style.display = "none";
})

dis.addEventListener('click',function(){
    disDiv.style.backgroundColor = "#28a745";
    disDiv.style.borderRadius = "30px";
    disForm.style.display = "flex";
    pinDiv.style.backgroundColor = "transparent";
    pinDiv.style.borderRadius = "30px 0px 0px 30px";
    pinForm.style.display = "none";
})

//dashboard appearing after clicking in dashboard link
const dashBtn = document.querySelector('.dash_btn');
const dashBox = document.getElementById('dashboard');
dashBtn.addEventListener('click',function(){
    dashBox.style.display = "flex";
})


// slot table appearing after clicking in search bar
// const slottable = document.querySelector('.section4');
// const searchBtn = document.querySelector('.search-btn-dis');

// searchBtn.addEventListener('click',function(){
//     slottable.style.display = "flex";
// })
