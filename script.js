// Add JavaScript code here
const icon = document.querySelector('.icon');
const content = document.querySelector('.content');
const closeIcon = document.querySelector('.close-icon');
icon.addEventListener('click', () => {
    content.classList.remove('active');
})
closeIcon.addEventListener('click', () => {
    content.classList.add('active');
})
closecon.addEventListener('click', () => {
    content.classList.add('active');
})
anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})