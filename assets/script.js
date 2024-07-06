const skillDiv = document.querySelectorAll('.skil-div')

skillDiv.forEach(skillDiv => {
    skillDiv.addEventListener('mouseover', (e) => {
        let x = e.pageX - skillDiv.offsetLeft
        let y = e.pageY - skillDiv.offsetTop

        skillDiv.style.setProperty('--x', x + 'px')
        skillDiv.style.setProperty('--y', y + 'px')
        
    })
})