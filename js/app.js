// 1. Add an event to the 'See details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See elems.
let query = document.querySelector('#details');
query.addEventListener('click', function(){
    alert("Not Available in Hawaii");
});
//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
query = document.querySelector('#name1');
query.addEventListener('mouseover', function(){
    if(this.querySelector('#descrip1').style.display === 'none'){
        this.querySelector('#descrip1').style.display = 'block';
    } else {
        this.querySelector('#descrip1').style.display = 'none';
    }
})

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 
let elem = document.createElement('div');
elem.id = 'descrip2';
elem.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
elem.display = 'none';
query = document.querySelector('#name2');
query.appendChild(elem);
query.addEventListener('click', function(){
    if(this.querySelector('#descrip2').style.display === 'none'){
        this.querySelector('#descrip2').style.display = 'block';
    } else {
        this.querySelector('#descrip2').style.display = 'none';
    }
})

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
query = document.querySelectorAll('.fa-thumbs-up');
for (let i = 0, n = query.length; i < n; i++){
    query[i].innerHTML = '0';
    query[i].addEventListener('click', function(){
        this.innerHTML++;
    })
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
query = document.querySelector('.fa-plus-square');
query.addEventListener('click', function(){
    document.querySelector('#price4').childNodes[0].textContent++;
});

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.
query = document.querySelector('.fa-minus-square');
query.addEventListener('click', function(){
    document.querySelector('#price5').childNodes[0].textContent--;
});

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
query = document.querySelectorAll('.block3');
let image = query[1].querySelector('img');
let count = 10;
image.addEventListener('mouseover', function(){
    if (image.style.filter){
        image.style.filter = "hue-rotate(" + count + "deg)";
        count += 50;
    } else {
        image.style.filter = "hue-rotate(" + count + "deg)"
        count += 50;
    }
})

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
query = document.querySelectorAll('.block1');
let image2 = query[2].querySelector('img');
image2.addEventListener('click', function(){
    this.style.width = this.width + this.height * 0.5 + 'px';
    this.style.height = this.height + this.height * 0.5 + 'px';
})

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.
query = document.querySelector('#price8');
let plusMinus = query.children;
plusMinus[0].addEventListener('click', function(){
    document.querySelector('#price8').childNodes[0].textContent++;
})
plusMinus[1].addEventListener('click', function(){
    document.querySelector('#price8').childNodes[0].textContent--;
})

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
query = document.querySelectorAll('.block3');
let image3 = query[2].querySelector('img');
image3.addEventListener('click', function(){
    if (image3.src == "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-28-photo-blue-white-black-011977_1.jpg"){
        image3.src = 'https://i.kym-cdn.com/photos/images/original/001/031/555/058.png';
    } else {
        image3.src = "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-28-photo-blue-white-black-011977_1.jpg"
    }
})