function getArticleGenerator(articles) {


    function myFunc() {

        if (articles.length > 0) {
            let art = document.createElement('article');
            let div = document.getElementById('content');
            art.textContent = articles.shift();
            div.appendChild(art);
        }

    }
    return myFunc;




}
