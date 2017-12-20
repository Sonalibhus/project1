var contextMenuItem={
	"id"="wikipedia"
	"title"="Wikipedia"
	"contexts"=["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId=="wikipedia"  && clickData.selectionText){
		var str1="https://en.m.wiktionary.org/wiki/";
		var str2-"clickData.selectionText";
		var url=str1.concat(str2);
		window.open(url,'_blank');
	}
}