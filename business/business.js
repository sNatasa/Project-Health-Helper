function BusinessLayer() {
    this.dataObject = new DataLayer();

    this.resolveSettingApi = async (search) => {
        await this.dataObject.getApiData(search);
        var settingData = this.dataObject.getMapiApiData();

        console.log(settingData)
        var suggestions = [];
        for (var i = 0; i < settingData.suggestions.length; i++) {
            suggestions.push(settingData.suggestions[i]);
        }

        return suggestions;
    }

    this.resolveMapiApiActive = async (singleDrugInfo) => {
        await this.dataObject.populateMapiApiActive(singleDrugInfo);
        var activeData = this.dataObject.getMapiApiActive();
        console.log(activeData);
        return activeData;
    }

    this.resolveMapiApiDosages = async (singleDrugDosages) => {
        await this.dataObject.populateMapiApiDosages(singleDrugDosages);
        var dosagesData = this.dataObject.getMapiApiDosages();
        console.log(dosagesData);
        return dosagesData;
    }

























    // this.resolveMapiApiData = async () => {
    //     await this.dataObject.populateMapiApiData();
    //     let data = this.dataObject.getMapiApiData();
    //     let drugNames = [];
    //     for (let i = 0; i < data.length; i++) {
    //         drugNames.push(data[i]);
    //     }

    //     let allInfo = [];
    //     let singleDrugName = [];
    //     let amount = [];


    //     for (let i = 0; i < drugNames.length; i++) {
    //         alphaOrder.push(drugNames[i].properties.suggestions);  // look at the schema at the API website
    //         let medObject = {
    //             singleDrugName: singleDrugName,
    //             amount: amount,

    //         }
    //         allInfo.push(medObject);
    //     }
    //     return allInfo;


    // }
}
