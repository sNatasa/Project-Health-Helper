function Diagnosis() {

    this.displayDiagnosisInfo = () => {
        let title = $('<h1>').text('What is this page all about?').addClass('title');
        let diagnosisIntro = $("<div>").html(" This page provides clinical Drug Data " + "<br>" + "Record drug information accurately. Here, you can find the right information about your prescription drugs quickly. Get alerts for drug-drug interactions and contraindications instantly. The api that is used is called Mapi US Api. It provides information about various drugs, the active ingredients they contain as well as the different dosages." + "Use the calculator to check your body mass index (BMI) and find out if you're a healthy weight.").addClass('diagnosis-intro');
        let backButton = $('<button> Go back to home page and start exploring <i class="fas fa-search-plus"></i></button>').attr('id', 'back-button');
        $('#root-diagnosis').append(title);
        $('#root-diagnosis').append(diagnosisIntro);

        $('#root-diagnosis').append(backButton);
        backButton.on('click', () => {
            window.location = "../index.html";
        })

    }



}

