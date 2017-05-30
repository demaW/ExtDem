describe("background", function () {
    beforeEach(function () {
        chrome = {
            extension: {
                onMessage: {
                    addListener: function () {}
                }
            }
        };
        spyOn(chrome.extension.onMessage, 'addListener');
        spyOn(Item, 'setUp').and.callFake(function () {});
    });
    it("should add a listener to setup Item when got a message from content scripts", function () {
        require(['../js/item'], function () {

            listener = chrome.extension.onMessage.addListener.calls.mostRecent().agrs[0];
            listener("message", {
                tab: "tab"
            }, function () {});
            expect(Item.setUp).toHaveBeenCalledWith("message", "tab");
        });
    });

});