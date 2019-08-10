const MenuButton = document.querySelector('#menu-button');


let snapper = new Snap({
  element: document.getElementById('content'),
  disable: 'right',
});

MenuButton.addEventListener('click', function() {
  if (snapper.state().state == 'left') {
    snapper.close();
  } else {
    snapper.open('left');
  }
});

 let myScroll = new IScroll('.slider-wrapper', {
  eventPassthrough: true, 
  scrollX: true,
  scrollY: false,
  preventDefault: false,
  snap: 'li'
});

let LeftArrow = document.querySelector('.slider-button.left-arrow')
LeftArrow.addEventListener('click', ()=>{
  myScroll.prev()
})

let RightArrow = document.querySelector('.slider-button.right-arrow')
RightArrow.addEventListener('click', ()=>{
  myScroll.next()
})
