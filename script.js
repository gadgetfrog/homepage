function copyToClipboard(text) {
    let div = document.createElement('div');
    try {
        navigator.clipboard.writeText(text);
        text = "Copied " + text + " to clipboard.";
        div.innerHTML = "<span class='popuptext show'>" + text + "</span>";
    }
    catch (err) {
        text = "Unable to copy to clipboard, please copy manually instead: " + text;
        div.innerHTML = "<span class='popuptext'>" + text + "</span>";
    }
    div.className = "popup";
    document.body.append(div);
}