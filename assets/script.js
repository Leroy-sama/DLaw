const skillDiv = document.querySelector('.skil-div')

skillDiv.onmousemove = function(e) {
    const x = e.pageX - skillDiv.offsetLeft
    const y = e.pageY - skillDiv.offsetTop

    skillDiv.style.setProperty('--x', x + 'px')
    skillDiv.style.setProperty('--y', y + 'px')
}