"use strict";

function toggle(item: HTMLElement, target: HTMLElement) {
    if (item.dataset.toggle == "1") {
        target.style.setProperty("display", "none");
        item.dataset.toggle = "0";
    } else {
        target.style.setProperty("display", "inline");
        item.dataset.toggle = "1";
    }
}