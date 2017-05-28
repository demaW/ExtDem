chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
    if (message == "closeElement"){
        sendResponse("some response");
    }
});