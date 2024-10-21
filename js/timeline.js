// const timeline_wrapper = document.querySelector('.timeline-wrapper'),
//     timelines = document.querySelectorAll('.timeline li .data')

// for(const time of timelines) {
//     time.onclick = () => time.classList.toggle('show')
// }

// timeline_wrapper.addEventListener('mousemove', (event) => {
//     const timeline = document.querySelector('.timeline');
//     let scroll_width = event.pageX / timeline_wrapper.clientWidth * (timeline_wrapper.clientWidth - timeline_wrapper.clientWidth);

//     timeline.computedStyleMap.left = scroll_width.toFixed(1) + 'px';
// })


$(".st1").click(function() {
    $("#profile").prop("checked", true)
})
$(".st2").click(function() {
    $("#settings").prop("checked", true)
})
$(".st3").click(function() {
    $("#posts").prop("checked", true)
})
$(".st4").click(function() {
    $("#books").prop("checked", true)
})
$(".st5").click(function() {
    $("#current").prop("checked", true)
})
$("ul li").click(function() {
    $(this).addClass("active").siblings().removeClass("active")
})