const push = () => {
    let date = new Date();
    let day = date.getDay();
    const doc = document.getElementById("resp");
    if (day === 5){
        doc.innerHTML += 'It is Friday! You should never push to production on Friday';
    }else{
        doc.innerHTML += 'You can push to production today!';   
    }
}