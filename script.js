function togglePlusMinus() {
    const display =
    document.getElementsByName("display") [0];
    if (display.value.startsWith("-")){
        display.value = display.value.substring(1);
    }
    else if (display.value !== ""){
        display.value = "-" + display.value;
    }
  }