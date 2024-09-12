// Copy the information to the clipboard
document.getElementById('copyBtn').addEventListener('click', function () {
    const infoText = document.getElementById('info');
    infoText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
});

// Facebook sharing
document.getElementById('fbShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value;
    if (content) {
        this.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(content)}`;
    } else {
        event.preventDefault();
        alert("Please enter some information to share.");
    }
});

// WhatsApp sharing
document.getElementById('waShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value;
    if (content) {
        this.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`;
    } else {
        event.preventDefault();
        alert("Please enter some information to share.");
    }
});

// YouTube sharing (link sharing)
document.getElementById('ytShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value;
    if (content) {
        this.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(content)}`;
    } else {
        event.preventDefault();
        alert("Please enter some information to share.");
    }
});

// Instagram sharing (manual post)
document.getElementById('igShare').addEventListener('click', function (event) {
    const content = document.getElementById('info').value;
    if (content) {
        alert("Instagram doesn't support direct sharing via the web. Please copy the text and paste it manually into your Instagram app.");
    } else {
        event.preventDefault();
        alert("Please enter some information to share.");
    }
});

