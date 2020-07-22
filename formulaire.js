const send = event => {
    event.preventDefault()
    for (elt of event.target)
        if (elt.value.includes('<')) {
        alert('nom ivalide')
    }
}
document.querySelector('#monForm').addEventListener('submit',send)