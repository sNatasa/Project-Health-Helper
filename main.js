function main() {
    // var data = new BusinessLayer();
    // data.resolvemapiApiData();
    let presentation = new Presentation();
    presentation.displayHeader();
    presentation.displayShowcase();
    presentation.displayFooter();


    let calculator = new Calculator();
    calculator.displayCalc();

    let account = new Account();
    account.displayAccountInfo();

  



}
main();