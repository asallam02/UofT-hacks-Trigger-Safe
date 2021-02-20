document.addEventListener('DOMContentLoaded', function() {
    // waits for html and popup stuff to load
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick() {
        // using built in chrome API to parse through text on the page
        chrome.tabs.query({currentWindow: true, active: true},
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'page contains triggers')
            }
            )
    }
})