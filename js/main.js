$(document).ready(function () {

    //VIEWED SECTION CAROUSEL
    $('.viewed_list').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 36,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1060: {
                items: 4
            },
            1240: {
                items: 5
            }
        }
    });

    // SERVICES SECTION CAROUSEL
    $('.service_content').owlCarousel({
        loop: true,
        dots: false,
        margin: 32,
        nav: true,
        smartSpeed: 100,
        onDragged: handleDrag,
        responsive: {
            0: {
                items: 1,
                slideBy: 'page',
            },
            600: {
                items: 2,
                slideBy: 'page',
            },
            800: {
                items: 3,
                slideBy: 'page',
            },
            1060: {
                items: 4,
                slideBy: 'page',
            },
            1240: {
                items: 5,
                slideBy: 'page',
            }
        }
    })
    function handleDrag(event) {
        if (event.relatedTarget._drag.direction === "left") {
            $('.owl-next').click();
        } else {
            $('.owl-prev').click();
        }
    }

    //FEEDBACK SECTION CAROUSEL
    $('.feedback_content').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 10,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //FREELANCER SECTION CAROUSEL 
    $('.freelancers_profile').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 36,
        slideBy: 4,
        onDragged: handleDrag,
        smartSpeed: 100,
        responsive: {
            0: {
                items: 1,
                slideBy: 'page',
            },
            600: {
                items: 2,
                slideBy: 'page',
            },
            800: {
                items: 3,
                slideBy: 'page',
            },
            1060: {
                items: 4,
                slideBy: 'page',
            }
        }
    })


    // Fix mini slider 
    $('.carousel-control').click(function () {
        // $(this).data(); ==> since HTML has a property data-slide='next/prev';
        $('.viewed-mini-slider').carousel($(this).data().slide);
    });

    //VIDEO MODAL
    const videoHandle = (play, video, modal) => {
        $('#' + play).click(function () {
            // $('#video-1').get(0).play();
            $('#' + video)[0].play();

        })
        $('#' + modal).on('hidden.bs.modal', function () {
            $('#' + video).get(0).pause();
            $('#' + video).get(0).currentTime = 0;
        })
    }
    videoHandle('play-benefit', 'video-benefit', 'benefit_right-modal');
    videoHandle('play-feedback-1', 'video-feedback-1', 'feedback-modal-1');
    videoHandle('play-feedback-4', 'video-feedback-4', 'feedback-modal-4');
})


// VIEWED HOVER TOOLTIP
function styleLevelTooltip(tooltip, index) {
    switch (index) {
        case 0:
            tooltip.style.setProperty("--arrow-left", "15%");
            tooltip.style.left = '2px';
            break;
        case 4:
            tooltip.style.setProperty("--arrow-left", "85%");
            tooltip.style.left = '-166px';
            break;
        default:
            tooltip.style.setProperty("--arrow-left", "50%");
            tooltip.style.left = '-85px';
    }
}

function hoverLevelTooltip() {
    let sellerIdentifier = document.querySelectorAll('.owl-item.active .seller-identifiers');
    sellerIdentifier.forEach(function (element, index) {
        let sellerLevel = element.querySelector('.viewed_seller-level');

        if (sellerLevel != null) {
            let levelTooltip = element.querySelector('.seller-level-tooltip');
            sellerLevel.onmouseover = function () {
                styleLevelTooltip(levelTooltip, index);
                levelTooltip.closest('.owl-item').style.zIndex = 1;
                levelTooltip.style.visibility = 'visible';
            }
            sellerLevel.onmouseout = function () {
                levelTooltip.closest('.owl-item').style.zIndex = -1;
                levelTooltip.style.visibility = 'hidden';
            }
        }
    })
}
//refresh tooltip
setInterval(hoverLevelTooltip, 100);

function styleProTooltip(tooltip, index) {
    console.log(window.innerWidth)
    if (index === 0) {
        tooltip.style.setProperty("--arrow-left-pro", "50%");

        tooltip.style.right = '-40px';
    } else {
        tooltip.style.setProperty("--arrow-left-pro", "85%");

        tooltip.style.right = '0px';
    }
}

function hoverProTooltip() {
    let sellerRating = document.querySelectorAll('.owl-item.active .seller-rating');

    sellerRating.forEach(function (element, index) {
        let pro = element.querySelector('.pro-badge');
        if (pro != null) {
            let protooltip = element.querySelector('.pro-tooltip');
            pro.onmouseover = function () {

                styleProTooltip(protooltip, index);
                pro.closest('.owl-item').style.zIndex = 1;
                protooltip.style.visibility = 'visible';
            }
            pro.onmouseout = function () {
                pro.closest('.owl-item').style.zIndex = -1;
                protooltip.style.visibility = 'hidden';
            }
        }
    })
}
setInterval(hoverProTooltip, 100);
// SCROLL SHOWING HEADER
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0 && currentScrollPos < 140) {
        $('.header_top').removeClass('header_top-transparent');
        $('.header_form').addClass('zero-opacity');
        $('.header_bottom').addClass('zero-opacity rotate-effect');
    } else if (currentScrollPos >= 140) {
        $('.header_top').removeClass('header_top-transparent');
        $('.header_bottom').removeClass('zero-opacity rotate-effect');
        $('.header_form').removeClass('zero-opacity');

    } else {
        $('.header_top').addClass('header_top-transparent');
        $('.header_form').addClass('zero-opacity');
        $('.header_bottom').addClass('zero-opacity rotate-effect');
    }

}

// HORIZONTAL SCROLL BAR
var metrics = {};
var container = document.getElementById("navbarOuter");
var navbar = document.getElementById("navbar");

var containerStyle = window.getComputedStyle(container);
console.log(container.clientWidth)
var navbarStyle = window.getComputedStyle(navbar);

var containerPadding = 2 * parseInt(containerStyle.getPropertyValue('padding-left'));

function setMetrics() {
    metrics = {
        navbarWidth: navbar.scrollWidth || 0,
        container: (container.clientWidth - containerPadding) || 0,
        left: parseInt(navbarStyle.getPropertyValue('left')),
        getHidden() {
            return (this.navbarWidth + this.left) - this.container
        }
    }
    updateArrows();
}
setMetrics();
function doSlide(direction) {
    var pos = metrics.left;
    if (direction === "right") {
        amountToScroll = -(Math.abs(pos) + Math.min(metrics.getHidden(), metrics.container - 30));
    }
    else {
        amountToScroll = Math.min(0, (metrics.container + pos - 30));
    }
    navbar.style.left = amountToScroll + "px";
    // console.log(amountToScroll);
    setTimeout(function () {
        setMetrics();
    }, 600)
}
function updateArrows() {
    if (Math.abs(metrics.getHidden()) === 0) {
        // console.log(metrics.getHidden());
        document.getElementsByClassName("toggleRight")[0].classList.add("opacity-0");
    }
    else {
        document.getElementsByClassName("toggleRight")[0].classList.remove("opacity-0");
    }

    if (Math.abs(metrics.left) === 0) {

        document.getElementsByClassName("toggleLeft")[0].classList.add("opacity-0");
    }
    else {
        document.getElementsByClassName("toggleLeft")[0].classList.remove("opacity-0");
    }
}

document.getElementsByClassName("toggleRight")[0].addEventListener("click", function (e) {
    e.preventDefault()
    doSlide("right")
});
document.getElementsByClassName("toggleLeft")[0].addEventListener("click", function (e) {
    e.preventDefault()
    doSlide("left")
});
window.addEventListener("resize", function () {
    // reset to left pos 0 on window resize
    if (window.innerWidth < 600) {
        document.querySelectorAll('.footer_col > a').forEach(item => {
            item.setAttribute('data-toggle', 'collapse')
        })
        document.querySelectorAll('.footer_col ul').forEach(item => {
            item.classList.add('collapse')
        })
    } else {
        document.querySelectorAll('.footer_col > a').forEach(item => {
            item.removeAttribute('data-toggle')
        })
        document.querySelectorAll('.footer_col ul').forEach(item => {
            item.classList.remove('collapse')
        })
    }
    navbar.style.left = 0;
    setMetrics();
});