function DataLayer() {
    this.mapiApiData = {};
    this.mapiApiActive = {};
    this.mapiApiDosages = {};
    this.persistanceObject = new MapiApi();

    //FIRST API: (SETTINGS)
    this.getApiData = async (search) => {
        this.mapiApiData = await this.persistanceObject.setting(search);
    }

    this.getMapiApiData = () => {
        return this.mapiApiData;
    }

    //SECOND API: (Mapi Api Active Ingredients)
    this.populateMapiApiActive = async(search) => {
        this.mapiApiActive = await this.persistanceObject.MapiApiActiveIngredients(search);
    }
    this.getMapiApiActive = () => {
        return this.mapiApiActive;
    }
 
    //THIRD API: (Mapi Api Dosages)
    this.populateMapiApiDosages = async (search) => {
        this.mapiApiDosages = await this.persistanceObject.MapiApiDosages(search);
    };

    this.getMapiApiDosages = () => {
        return this.mapiApiDosages;
    };
}