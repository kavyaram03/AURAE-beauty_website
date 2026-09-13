var closeOffer = document.getElementById("closeOffer")
var offerBar = document.getElementById("offerBar")

if (closeOffer) {
    closeOffer.addEventListener("click", function () {
        offerBar.style.display = "none"
    })
}

var menuButton = document.getElementById("menuButton")
var closeMenu = document.getElementById("closeMenu")
var navLinks = document.getElementById("navLinks")

if (menuButton) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.add("active")
    })
}

if (closeMenu) {
    closeMenu.addEventListener("click", function () {
        navLinks.classList.remove("active")
    })
}

var slides = document.querySelectorAll(".slide")
var next = document.getElementById("next")
var prev = document.getElementById("prev")

if (slides.length > 0) {

    var currentSlide = 0

    next.addEventListener("click", function () {
        slides[currentSlide].classList.remove("active")
        currentSlide = currentSlide + 1

        if (currentSlide == slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].classList.add("active")
    })

    prev.addEventListener("click", function () {
        slides[currentSlide].classList.remove("active")
        currentSlide = currentSlide - 1

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        slides[currentSlide].classList.add("active")
    })
}

var searchInput = document.getElementById("searchInput")
var categoryButtons = document.querySelectorAll(".category-btn")
var collectionCards = document.querySelectorAll(".collection-card")

if (searchInput) {

    function filterProducts() {

        var searchText = searchInput.value.toLowerCase()
        var selectedCategory = "all"

        categoryButtons.forEach(function (button) {
            if (button.classList.contains("active")) {
                selectedCategory = button.textContent.toLowerCase()
            }
        })

        collectionCards.forEach(function (card) {

            var productName = card.querySelector("h3").textContent.toLowerCase()

            if (productName.includes(searchText) && (selectedCategory == "all" || card.classList.contains(selectedCategory))) {
                card.style.display = "block"
            }
            else {
                card.style.display = "none"
            }

        })
    }

    searchInput.addEventListener("input", function () {
        filterProducts()
    })

    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active")
            })

            button.classList.add("active")

            filterProducts()
        })

    })
}

var likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            button.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
    });
});