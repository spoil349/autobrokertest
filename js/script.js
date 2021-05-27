document.addEventListener("DOMContentLoaded" , () => {
    "use strict";

    const dropdownMenu = document.getElementById("dropdown_menu");
    const menuOpenButtonImg = document.getElementById("menu_open_button");
    const menuCloseButtonImg = document.getElementById("menu_close_button");
    
    const showMenu = () => {
        menuCloseButtonImg.classList.remove("hide_button");
        dropdownMenu.classList.add("show_menu");
    };

    const hideMenu = () => {
        menuCloseButtonImg.classList.add("hide_button");
        dropdownMenu.classList.remove("show_menu");
    }


    menuOpenButtonImg.addEventListener("click", () => {
        showMenu();
    });

    menuCloseButtonImg.addEventListener("click", () => {
        hideMenu();
    });

    //CAROUSEL LOGIC
    const carousel = document.getElementById("slides_wrapper");
    const buttons = document.querySelectorAll(".slide_input");


    const swipe = (number) => {
        switch (number) {
            case 0:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position0")
                break;
            case 1:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position1");
                break;
            case 2:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position2")
                break;
            case 3:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position3")
                break;
            case 4:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position4")
                break;
            case 5:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position5")
                break;
            case 6:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position6")
                break;
            case 7:
                carousel.className = "slides_wrapper";
                carousel.classList.add("position7")
                break;
            default: console.log("ne ok")
        }
    }
    
    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].addEventListener("click", () => {
            swipe(i);
        })
    }

    //INTERRACTIVE PROGRESSBAR LOGIC
    const redArrowBar = document.getElementById("red_arrow_bar");
    const redArrowBlock = document.getElementById("red_arrow_block");
    const redArrowFirstRow = document.getElementById("red_arrow_first_row");
    const redArrowThirdRow = document.getElementById("red_arrow_third_row")

    const interractiveProgressBarFilling = (number) => {

        switch (number) {
            case 0:
                redArrowBar.className = "red_arrow_bar";
                redArrowBlock.className = "red_arrow_block";
                redArrowBar.classList.add("red_arrow_bar_first_position");
                redArrowBlock.classList.add("red_arrow_block_first_position");
                break;
            case 1:
                redArrowBar.className = "red_arrow_bar";
                redArrowBlock.className = "red_arrow_block";
                redArrowBar.classList.add("red_arrow_bar_second_position");
                redArrowBlock.classList.add("red_arrow_block_second_position");
                break;
            case 2:
                redArrowBar.className = "red_arrow_bar";
                redArrowBlock.className = "red_arrow_block";
                redArrowBar.classList.add("red_arrow_bar_third_position");
                redArrowBlock.classList.add("red_arrow_block_third_position");
                break;
            case 3:
                redArrowBar.className = "red_arrow_bar";
                redArrowBlock.className = "red_arrow_block";
                redArrowBar.classList.add("red_arrow_bar_fourth_position");
                redArrowBlock.classList.add("red_arrow_block_fourth_position");
                break;
            default: console.log("ne ok")
        }
    };

    const elementsOpacitySetToCommon = (number) => {

        for (let i = number; i > 0; i--) {

            redArrowFirstRow.children[i].classList.remove("opacity_low");
            redArrowFirstRow.children[i].classList.add("opacity_common");
            redArrowThirdRow.children[i].classList.remove("opacity_low");
            redArrowThirdRow.children[i].classList.add("opacity_common");
        }
    };

    const elementsOpacitySetToLow = (number) => {
        
        for (let i = number + 1; i < 4; i++) {

            redArrowFirstRow.children[i].classList.remove("opacity_common");
            redArrowFirstRow.children[i].classList.add("opacity_low");
            redArrowThirdRow.children[i].classList.remove("opacity_common");
            redArrowThirdRow.children[i].classList.add("opacity_low");
        }
    };


    for (let i = 0; i < redArrowFirstRow.children.length; i++) {

        redArrowFirstRow.children[i].addEventListener("click", () => {
            interractiveProgressBarFilling(i);
            elementsOpacitySetToCommon(i);
            elementsOpacitySetToLow(i);
        })
    };  
    
});