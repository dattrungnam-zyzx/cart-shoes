//<-------show border top when click in status contain -------->
let sttContent = document.querySelector('.status-content')
let sttReel = document.querySelector('.status-reel')
let sttVideo = document.querySelector('.status-video')
let sttTag = document.querySelector('.status-tag')
let currentActive = sttContent;

    function showBorder () {
        currentActive.classList.remove('status-tag-name__active')
        this.classList.add('status-tag-name__active')
        currentActive = this
    }

    sttContent.addEventListener('click',showBorder)
    sttReel.addEventListener('click',showBorder)
    sttVideo.addEventListener('click',showBorder)
    sttTag.addEventListener('click',showBorder)

//<------- show history search--------->
let searchHistory = document.querySelector('.search-history')
let headerSearch = document.querySelector('.header-search')
let input = document.querySelector('.search-input')
let body = document.querySelector('.wrap')
let header = document.querySelector('.header')

    function showHistory () {
        searchHistory.classList.remove('hidden')
    }
    function hideHistory () {
        searchHistory.classList.add('hidden')
    }

    input.addEventListener('click',showHistory)
    body.addEventListener('click',hideHistory)
    header.addEventListener('click',hideHistory)
    input.addEventListener('click',function (e) {
        e.stopPropagation()
    })
    searchHistory.addEventListener('click',function (e) {
        e.stopPropagation()
    })

//<-------------------->

