// Copy the information to the clipboard
document.getElementById('copyBtn').addEventListener('click', function () {
    const infoText = document.getElementById('info'); // Select the text area
    infoText.select(); // Select the content of the text area
    document.execCommand('copy'); // Copy the selected content to clipboard
    alert('Copied to clipboard!'); // Notify the user
});

// Facebook sharing
document.getElementById('fbShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value; // Get the content to share
    if (content) {
        // Set the href for Facebook sharing with the content
        this.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(content)}`;
    } else {
        event.preventDefault(); // Prevent the default action if no content
        alert("Please enter some information to share."); // Notify the user
    }
});

// WhatsApp sharing
document.getElementById('waShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value; // Get the content to share
    if (content) {
        // Set the href for WhatsApp sharing with the content
        this.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`;
    } else {
        event.preventDefault(); // Prevent the default action if no content
        alert("Please enter some information to share."); // Notify the user
    }
});

// YouTube sharing (link sharing)
document.getElementById('ytShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value; // Get the content to share
    if (content) {
        // Set the href for YouTube search with the content
        this.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(content)}`;
    } else {
        event.preventDefault(); // Prevent the default action if no content
        alert("Please enter some information to share."); // Notify the user
    }
});

// Instagram sharing (manual post)
document.getElementById('igShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value; // Get the content to share
    if (content) {
        // Inform the user that Instagram doesn't support direct sharing
        alert("Instagram doesn't support direct sharing via the web. Please copy the text and paste it manually into your Instagram app.");
    } else {
        event.preventDefault(); // Prevent the default action if no content
        alert("Please enter some information to share."); // Notify the user
    }
});

