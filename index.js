function addingEventListener() {
    const input = document.getElementById('button');
    
    function clickAlert() {
        alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
}

// This line is added to automatically call the addingEventListener function upon loading the page.
// So, we do not have to manually call it from the browser console.
addingEventListener();
