function Presentation() {
    this.businessObject = new BusinessLayer();


    this.displayHeader = () => {
        var header = $('<header>');
        $('#root').append(header);
        var headerLogo = $('<h2> <i class="fas fa-clinic-medical"></i> Health Helper</h2>').addClass('header-logo');
        var logoParagraph = $('<p>Your personal health manager <i class="fas fa-stethoscope"></i> </p>').addClass('logo-p');
        var menu = $('<ul>').addClass('header-ul');

        var diagnosis = $('<li>').html("Diagnosis").addClass('nav-links li-header').css('display', 'none');
        var medInfo = $('<li>').html("Medication").addClass('nav-links li-header');
        var calcBMI = $('<li>').html(" BMI Calculator").addClass('nav-links li-header');
        var accountStartUp = $('<li>').html("Account").addClass('nav-links li-header');
        $('header').append(headerLogo);
        $('header').append(logoParagraph);
        $('header').append(menu);

        $('header').append(diagnosis);
        $('header').append(medInfo);
        $('header').append(calcBMI);
        $('header').append(accountStartUp);
        // header logo part // menu part


        diagnosis.on("click", () => {
            window.location = "diagnosis page/index.html";  // <-------  opening the nav links
        });
        medInfo.on("click", () => {
            window.location = "medinfo page/medinfo.html";
        });
        accountStartUp.on("click", () => {
            window.location = "account page/account.html";
        });
        calcBMI.on("click", () => {
            window.location = "calculator page/calc.html";
        });

    }

    this.displayShowcase = () => {
        let opacityDiv = $('<div> HEALTH HELPER</div>').addClass('opacity-div');
        $('#root').append(opacityDiv);
        let opacityP = $('<p> Comprehensive and up-to-date drug news for both consumers and healthcare professionals. </p>').addClass('opacity-p');
        let buttonShowcase = $(`<button>LEARN MORE</button>`).addClass('opacity-button');
        $('.opacity-div').append(opacityP);
        $('.opacity-div').append(buttonShowcase);
        buttonShowcase.on("click", () => {
            window.location = "diagnosis page/index.html";
        });
    }

    this.displayFooter = () => {
        let footer = $('<footer>').addClass('footer');
        $('#root').append(footer);
        footer.text('healthhelper.com provides accurate and independent information on more than 24,000 prescription drugs, over-the-counter medicines and natural products. This material is provided for educational purposes only and is not intended for medical advice, diagnosis or treatment. Data sources include MAPI US Api, website Drugs.com and others.')

    }


    //medication info page

    this.displayMedinfo = async () => {
        let introDiv = $('<div>').addClass('intro-div');
        let intro = $(' <p> The resources below have been provided to help narrow your search to specific, targeted drug information. Information is available for both consumers and healthcare professionals on over 24,000 prescription and over the counter medicines. </p> ').addClass('intro');
        let searchDiv = $('<div>').addClass('search-div');
        let searchInput = $('<input type="input" placeholder="enter a drug name"></input>').addClass('search-bar');
        let searchButton = $('<button><i class="fas fa-search-plus"> </i></button>').addClass('search-button');
        let searchedDrugs = $('<div>').addClass('searched');
        let backButton = $('<button> <i class="fas fa-home"></i> Go back to Home page </button>').attr('id', 'back-button');
        $('#med-root').append(backButton);
        backButton.on('click', () => {
            window.location = "../index.html";
        })
        //home page button
        $('#med-root').append(backButton);
        $('#med-root').append(introDiv);
        $('.intro-div').append(intro);
        $('#med-root').append(searchDiv);
        $('.search-div').append(searchInput);
        $('.search-div').append(searchButton);
        $('#med-root').append(searchedDrugs);

        searchInput.keyup(async event => {
            let searchTerm = $(event.target).val();

            if (searchTerm.length > 2) {
                let singleDrugName = await this.businessObject.resolveSettingApi(searchTerm);
                console.log(singleDrugName);
                $(searchedDrugs).html('');
                for (let i = 0; i < singleDrugName.length; i++) {
                    let wanted = $('<div>').text(singleDrugName[i]).addClass('wanted');
                    searchedDrugs.append(wanted);

                    wanted.on('click', async () => {
                        let singleDrugInfo = await this.businessObject.resolveMapiApiActive(searchTerm);
                        console.log(singleDrugInfo);
                        for (let i = 0; i < singleDrugInfo.length; i++) {
                            let wantedInfo = $('<div>').text(" This medication contains:" + "  " + singleDrugInfo[i]).addClass('wanted-info');
                            $(searchedDrugs).html('');
                            searchedDrugs.append(wantedInfo);
                        }

                        let recommendedDosages = $('<button> Recommended dosages </button>').addClass('button-dosages');
                        searchedDrugs.append(recommendedDosages);
                        recommendedDosages.on('click', async () => {
                            let singleDrugDosages = await this.businessObject.resolveMapiApiDosages(searchTerm);
                            console.log(singleDrugDosages);
                            for (let i = 0; i < singleDrugDosages.length; i++) {
                                let infoDosages = $('<div>').text("The recommended dosages are:" + "  " + singleDrugDosages[i]).addClass('wanted-info');

                                $(searchedDrugs).html('');
                                searchedDrugs.append(infoDosages);

                            }
                        })
                    })// returns empty array needs help



                    // listing the drugs
                }

            } else {
                $(searchedDrugs).html('');
            }



        })
            ;
        // search bar

    }



};


