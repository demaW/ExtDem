function appendExtensionDiv() {
    var extDiv = document.createElement("div");
    extDiv.id = "extensionDiv";
    document.getElementsByTagName("body")[0].appendChild(extDiv);
    var closeElement = document.createElement("div");
    closeElement.id = "extClose";
    closeElement.innerHTML = "Close X";
    closeElement.addEventListener("click", function () {
        document.getElementById("extensionDiv").style.visibility = "hidden";

    }, false);
    extDiv.appendChild(closeElement);
    var reminderText = document.createElement("div");
    reminderText.id = "reminderText";
    reminderText.innerHTML = "This is reminder text from extension";
    extDiv.appendChild(reminderText);

    var appendButton = document.createElement("button");
    appendButton.innerHTML = "Append text from bg";
    appendButton.addEventListener("click", function () {
        chrome.extension.sendMessage("closeElement", function (response) {
            console.log(response);
            reminderText.innerHTML += " and Here are Response " + response;
        });
    });
    extDiv.appendChild(appendButton);
}
appendExtensionDiv();