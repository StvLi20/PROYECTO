document.addEventListener("DOMContentLoaded", function() {
    loader(10); 
});

function loader(value){
        
    switch(value){
        case 1:
        $("#spacy").load("../html_pages/about.html");
        break;
        case 2:
        $("#spacy").load("../html_pages/programs.html");
        break;
        case 3:
        $("#spacy").load("../html_pages/help.html");
        break;
        case 4:
        $("#spacy").load("../html_pages/gallery.html");
        break;
        case 5:
        $("#spacy").load("../html_pages/bloq.html");
        break;
        case 6:
        $("#spacy").load("../html_pages/events.html");
        break;
        case 7:
        $("#spacy").load("../html_pages/contact.html");
        break;
        case 8:
        $("#spacy").load("../html_pages/questions.html");
        break;
        case 9:
        $("#spacy").load("../html_pages/donation.html");
        break;
        default:
        $("#spacy").load("../html_pages/home.html");
        break;
    }
}