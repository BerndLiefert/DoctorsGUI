

class Paginator {
    constructor(element) {
        this.element = element; //ul list
    }

    navigate(page) {
        let article = document.getElementsByClassName("page");
        //hide all
        for (let item of article) {
            item.className = "page hide";
        }

        //show selected
        let active = document.getElementById("page_" + page);
        active.className = active.className.replace("hide", "show");

        let links = this.element.querySelectorAll('li > a');
        links.forEach(function (item, index) {
            item.addEventListener("click", function () {
                paginator.navigate(index);
            });

            item.className = "";
            if (index == page) {
                item.className = "active";
            }
        });
    }
}

const paginator = new Paginator(document.getElementById('paginator'));
paginator.navigate(0);