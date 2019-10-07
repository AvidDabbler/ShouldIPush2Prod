const gifs = {
    yes:[`/gifs/yes1.gif`,
        `/gifs/yes2.gif`,
        `/gifs/yes3.gif`,
        `/gifs/yes4.gif`,],
    no:[`/gifs/no1.gif`,
        `/gifs/no2.gif`,
        `/gifs/no3.gif`,
        `/gifs/no4.gif`,]
}

const id = (day) => {
    let rand = Math.floor(Math.random() * 4);
    return rand;
}

const dayOfWeek = () => {
    let date = new Date();
    let day = date.getDay();
    const doc = document.getElementById("resp");
    let i = id();
    if (day === 5){
        let gif = gifs.no[i];
        doc.innerHTML = `<div class="image"><img src='${gif}'></div><br><div class="text"><h2>It is Friday! You should never push to production on Friday</h2></div>`;

    }else{
        let gif = gifs.yes[i];
        doc.innerHTML = `<div class="image"><img src='${gif}'></div><br><div class="text"><h2>You can push to production today!</h2></div>`;   
    }
}