function Calculator() {


    this.displayCalc = () => {


        let mainCalculatorDiv = $('<div>').addClass("main-calc-div");
        let introCalc = $("<span>").html("Body mass index, or BMI, is used to determine whether you are in a healthy weight range for your height. BMI compares your weight to your height, and is calculated by dividing your weight (in kilograms) by your height (in metres squared). It gives you an idea of whether you’re underweight, a healthy weight, 'overweight', or obese for your height. BMI is one type of tool to help health professionals assess the risk for chronic disease.").addClass('intro-calc');
        let titleCalc = $("<h3>").html(" Calculate your BMI here ").addClass('title-calc');
        let formCalc = $('<div>').addClass('form-calc');


        let backButton = $('<button> Go back to Home page </button>').attr('id', 'back-button');
        $('#calc-root').append(backButton);
        backButton.on('click', () => {
            window.location = "../index.html";
        })
        //home page button


        let inputTdWeight = $("<input>").attr("id", "weight-val");
        var pickType = $("<select>").attr("type", "multiple").attr("id", "weightunits");
        let weightOptionOne = $("<option>").attr("value", "kg").attr("selected", "selected").html("kilograms");
        let weightOptionTwo = $("<option>").attr("value", "lb").html("pounds");
        pickType.append(weightOptionOne);
        pickType.append(weightOptionTwo);
        let txtWeight = $('<p>').html("Your weight in kg").addClass('table-td');
        let arrow = $("<i>").addClass("fas fa-arrow-right").css("align-self", "center");

        var inputHeight = $("<input>").attr("id", "height-val")
        var heightType = $("<select>").attr("type", "multiple").attr("id", "heightunits");
        var heightOptionOne = $("<option>").attr("value", "meters").attr("selected", "selected").html("cm");
        var heightOptionTwo = $("<option>").attr("value", "inches").html("inches");
        heightType.append(heightOptionOne);
        heightType.append(heightOptionTwo);
        let txtHeight = $('<p>').html("Your height in cm ").addClass('table-td');
        let arrow2 = $("<i>").addClass("fas fa-arrow-right");
        var weightInputs = $("<div>").addClass("weightInputs");
        var heightInputs = $("<div>").addClass("heightInputs");
        let ageInput = $('<div>').addClass('age-input');
        var btnHolder = $("<div>").addClass("btn-holder");
        var calcBtn = $("<button>").html("Click to calculate").attr("id", "calc-btn");
        var resultsDiv = $("<div>").addClass("result-holder");
        let introCalc2 = $('<h4>This calculator computes the body mass index and rates it appropriately for men, women, children, juveniles and seniors. The SBMI – an index that has been developed four years ago especially for this calculator – serves for this purpose. It is based on the results of the most comprehensive study published so far on the BMI and its associated health risks.</h4>').addClass('intro-calc2');
        btnHolder.append(calcBtn);
        weightInputs.append(arrow);
        weightInputs.append(txtWeight);

        $(weightInputs).append(inputTdWeight);
        $(weightInputs).append(pickType);
        heightInputs.append(arrow2);
        heightInputs.append(txtHeight);


        heightInputs.append(inputHeight);
        heightInputs.append(heightType);

        $('#calc-root').append(mainCalculatorDiv);
        mainCalculatorDiv.append(introCalc);
        mainCalculatorDiv.append(titleCalc);
        mainCalculatorDiv.append(formCalc);
        mainCalculatorDiv.append(resultsDiv);
        formCalc.append(weightInputs);
        formCalc.append(heightInputs);
        formCalc.append(btnHolder);

        mainCalculatorDiv.append(introCalc2);



        calcBtn.on("click", () => {
            this.computeBMI()
        });

        this.computeBMI = () => {
            // user inputs
            let comment = $('<p>').addClass('comment')
            formCalc.append(comment);
            let weight;
            let height;
            if ($("#heightunits").val() === "inches") {
                height = parseInt($('#height-val').val()) / 39.370;
            } else {
                height = parseFloat($('#height-val').val() / 100);
            }
            if ($("#weightunits").val() === "lb") {
                weight = parseInt($("#weight-val").val()) / 2.20462;
            } else {
                weight = parseInt($("#weight-val").val());
            }
            $(".comment").html("");
            //Perform calculation
            let BMI = weight / Math.pow(height, 2);
            console.log("Your Body Mass Index is " + BMI);
            //Displaying the result of calculation
            resultsDiv.html(Math.round(BMI * 100) / 100);
            if (BMI < 18.5) {
                $(comment).html('Underweight');
            } else if (BMI >= 18.5 && BMI <= 25) {
                $(comment).html('Normal');
            } else if (BMI >= 25 && BMI <= 30) {
                $(comment).html('Overweight');
            } else if (BMI > 30) {
                $(comment).html('Obese');
            } else {
                $(comment).html('Please, enter valid mesurments');
            }




        }

    }


}
