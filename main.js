const triggers = document.querySelectorAll('a');
// Create DOM element
const highlight = document.createElement('span');
// Add a class of highlight
highlight.classList.add('highlight');
// Add to DOM
document.body.append(highlight);

function highlightLink() {
    // console.log(this);
    // Get positional info of links on page
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // Factor in window scroll for coordinates
    // Mainly applies to vertical scroll (window.scrollY)
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }

    // Mirror links with highlighter
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Listen for mouse moving over link
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));