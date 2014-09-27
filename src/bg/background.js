function checkForValidUrl(tabId, changeInfo, tab) {
    console.log('in checkForValidUrl');
    
    var satiricalDomains = [
        'callthecops.net',
        'dailycurrant.com',
        'empirenews.net',
        'eyeofthetiber.com',
        'nationalreport.net',
        'thebeaverton.com',
        'theonion.com',
        'weeklyworldnews.com',
        'worldnewsdailyreport.com'        
    ];

    if(tab) {
        console.log('tab param exists');

        var uri = new URI(tab.url.toLowerCase());
        var domain = uri.domain();
        var isSatire = satiricalDomains.indexOf(domain) >= 0;
        
        console.log('domain is = ' + domain);
        console.log('is satire = ' + isSatire);

        if (isSatire) {
           // ... show the page action.
           chrome.pageAction.show(tabId);
        }
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
//For highlighted tab as well
chrome.tabs.onHighlighted.addListener(checkForValidUrl);