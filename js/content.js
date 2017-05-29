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

    var appendInput = document.createElement("input");
    appendInput.id = "inputExt";
    appendInput.placeholder = "Input some text";
    extDiv.appendChild(appendInput);

    var appendButton = document.createElement("button");
    appendButton.id = "appendBuuton";
    appendButton.innerHTML = "Append text";
    appendButton.addEventListener("click", function () {
        chrome.extension.sendMessage("appendText", function (response) {
            console.log(response);
            reminderText.innerText += "\n" + document.getElementById("inputExt").value;
            reminderText.innerHTML += " and here are Response " + response;
            document.getElementById("appendBuuton").style.visibility = "hidden";
            document.getElementById("inputExt").style.visibility = "hidden";
        });
    });
    extDiv.appendChild(appendButton);
}
appendExtensionDiv();