chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
    if (message == "appendText"){
        Item.setUp(message, sender.tab);
        sendResponse("some response");
    }
});