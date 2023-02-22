imageWrapper = document.querySelector('.image-wrapper');
imageWrapper.style.minHeight = screen.height + 'px';
imageWrapper.style.Height = screen.height = 'px';
console.log("Высота экрана:" + imageWrapper.style.minHeight)

learnButton = document.getElementById('learnbutton');
learnArrow = document.getElementById('learnarrow');
learnText = document.getElementById('learntext');

learnButton.onmouseover = function() {
    learnArrow.classList.add('hover')
    learnText.classList.add('hover')
    learnButton.classList.add('hover')
}

learnButton.onmouseout = function() {
    learnArrow.classList.remove('hover')
    learnText.classList.remove('hover')
    learnButton.classList.remove('hover')
}

let learnMore = document.querySelectorAll('.learnmorejs')
for(let i=0; i< learnMore.length; i++) {
        var e = document.getElementById('learnmore');
        e.id = "learnmore"+i;;
    }

let learnMoreArrow = document.querySelectorAll('.learnmorearrowjs')
for(let i=0; i< learnMoreArrow.length; i++) {
        var f = document.getElementById('learnmorearrow');
        f.id = "learnmorearrow"+i;
    }

// Первая карточка
document.getElementById('learnmore0').onmouseover = function() {
    document.getElementById('learnmorearrow0').classList.add('hover')
    document.getElementById('learnmore0').classList.add('hover')
}

document.getElementById('learnmore0').onmouseout = function() {
    document.getElementById('learnmorearrow0').classList.remove('hover')
    document.getElementById('learnmore0').classList.remove('hover')
}

// Вторая карточка 
document.getElementById('learnmore1').onmouseover = function() {
    document.getElementById('learnmorearrow1').classList.add('hover')
    document.getElementById('learnmore1').classList.add('hover')
}

document.getElementById('learnmore1').onmouseout = function() {
    document.getElementById('learnmorearrow1').classList.remove('hover')
    document.getElementById('learnmore1').classList.remove('hover')
}

// Третья карточка
document.getElementById('learnmore2').onmouseover = function() {
    document.getElementById('learnmorearrow2').classList.add('hover')
    document.getElementById('learnmore2').classList.add('hover')
}

document.getElementById('learnmore2').onmouseout = function() {
    document.getElementById('learnmorearrow2').classList.remove('hover')
    document.getElementById('learnmore2').classList.remove('hover')
}

watchVideoButton = document.querySelector('.description-heading .button-frame')
watchVideoText = document.querySelector('.description-heading .button-frame > .button')

watchVideoButton.onmouseover = function() {
    watchVideoText.classList.add('hover')
}

watchVideoButton.onmouseout = function() {
    watchVideoText.classList.remove('hover')
}

