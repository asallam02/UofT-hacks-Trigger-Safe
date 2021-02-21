function save_options() {
    var categories = document.getElementById('TriggerCategories').value;
    var triggers = document.getElementById('triggers').checked;
    chrome.storage.sync.set({
        selectedCategories: categories,
        triggers: triggers
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

//could add something to restore the options 
//check the google documentation for what you might need to add if you do this

document.getElementById('save').addEventListener('click',
    save_options);