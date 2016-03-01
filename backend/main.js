/**
 * Created by zhangmike on 16/3/1.
 */

chrome.extension.onMessage.addListener(function(library, sender, sendResponse) {
    //run(library, sender.tab.id);
    localStorage.setItem('libraries', library.split(","));
});