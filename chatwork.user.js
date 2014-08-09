(function() {
	if (location.hostname == 'www.chatwork.com') {
		document.onkeydown = function(e) {
			if (e.ctrlKey && e.keyCode == 84) {
				document.getElementById('_to').click();
			}
			if (e.ctrlKey && (e.keyCode >= 49 || e.keyCode <= 57)) {
				var toList = document.getElementById('_toList');
				var tId = e.keyCode - 49;
				var t = toList.getElementsByTagName('ul')[0].getElementsByTagName('li')[tId];
				if (t) {
					t.click();
				}
				document.getElementById('_chatText').focus();
			}
		};
	}
})();
