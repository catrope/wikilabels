( function (mw, WL) {

	var format = function (str, args) {

		return str.replace(
		/\$[0-9]+/,
		function (m) { return args[parseInt(m.substring(1), 10) - 1] || m;}
		);
	};

	var i18n = function (key, args) {
		var i, lang,
		    langChain = mw.language.getFallbackLanguageChain();

		for (i = 0; i < langChain.length; i++) {
			lang = langChain[i];

			if (WL.config.messages[lang] && WL.config.messages[lang][key]) {
				return format(WL.config.messages[lang][key], args);
			}
		}
		return "<" + format(key, args) + ">";
	};

	WL.i18n = i18n;

})(mediaWiki, wikiLabels);
