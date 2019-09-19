function MapiApi() {


	this.setting = (searchTerm) => {
		return new Promise((resolve, reject) => {
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://iterar-mapi-us.p.rapidapi.com/api/autocomplete?query=" + searchTerm,
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "iterar-mapi-us.p.rapidapi.com",
					"x-rapidapi-key": "820d939b3bmsh8d367ec996ad44fp102f71jsn741e7ea78475"
				}
			}

			$.ajax(settings).done(function (data) {
				resolve(data);
			});
		});
	};

	this.MapiApiActiveIngredients = (searchTerm) => {
		return new Promise((resolve, reject) => {
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://iterar-mapi-us.p.rapidapi.com/api/" + searchTerm + "/substances.json",
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "iterar-mapi-us.p.rapidapi.com",
					"x-rapidapi-key": "820d939b3bmsh8d367ec996ad44fp102f71jsn741e7ea78475"
				}
			}

			$.ajax(settings).done(function (data) {
				resolve(data);
			});
		});
	}

	this.MapiApiDosages = (searchTerm) => {
		return new Promise((resolve, reject) => {
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://iterar-mapi-us.p.rapidapi.com/api/" + searchTerm + "/doses.json",
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "iterar-mapi-us.p.rapidapi.com",
					"x-rapidapi-key": "820d939b3bmsh8d367ec996ad44fp102f71jsn741e7ea78475"
				}
			}

			$.ajax(settings).done(function (data) {
				resolve(data);
			});
		});
	}
}



