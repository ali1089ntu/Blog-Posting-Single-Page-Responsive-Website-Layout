
const changebtnvalic = () => {
    document.getElementById("btnliked").style.display = "block";
    document.getElementById("btnlike").style.display = "none";
}

const changebtnvalic1 = () => {
    document.getElementById("btnlike").style.display = "block";
    document.getElementById("btnliked").style.display = "none";
}

const changebtnvalic3 = () => {
    document.getElementById("btnliked1").style.display = "block";
    document.getElementById("btnlike1").style.display = "none";
}

const changebtnvalic4 = () => {
    document.getElementById("btnlike1").style.display = "block";
    document.getElementById("btnliked1").style.display = "none";
}

const changebtnvalic5 = () => {
    document.getElementById("btnliked2").style.display = "block";
    document.getElementById("btnlike2").style.display = "none";
}

const changebtnvalic6 = () => {
    document.getElementById("btnlike2").style.display = "block";
    document.getElementById("btnliked2").style.display = "none";
}

const showhidereplies = () => {
    let hR = document.getElementById("hrid");
    let imG = document.getElementById("imgid");
    let detailS = document.getElementById("detailsid");
    if (hR.style.display && imG.style.display && detailS.style.display == "block"){
        hR.style.display = "none";
        imG.style.display = "none";
        detailS.style.display = "none";
    }
    else{
        hR.style.display = "block";
        imG.style.display = "block";
        detailS.style.display = "block";
    }
}

const showhidereplies1 = () => {
    let hR = document.getElementById("hrid1");
    let imG = document.getElementById("imgid1");
    let detailS = document.getElementById("detailsid1");
    let imG1 = document.getElementById("imgid2");
    let detailS1 = document.getElementById("detailsid2");
    if (hR.style.display && imG.style.display && detailS.style.display && imG1.style.display && detailS1.style.display == "block"){
        hR.style.display = "none";
        imG.style.display = "none";
        detailS.style.display = "none";
        imG1.style.display = "none";
        detailS1.style.display = "none";  
    }
    else{
        hR.style.display = "block";
        imG.style.display = "block";
        detailS.style.display = "block";
        imG1.style.display = "block";
        detailS1.style.display = "block";
    }
}

const showhidereplies2 = () => {
    let hR = document.getElementById("hrid2");
    let imG = document.getElementById("imgid3");
    let detailS = document.getElementById("detailsid3");
    let imG1 = document.getElementById("imgid4");
    let detailS1 = document.getElementById("detailsid4");
    let imG2 = document.getElementById("imgid5");
    let detailS2 = document.getElementById("detailsid5");
    if (hR.style.display && imG.style.display && detailS.style.display && imG1.style.display && detailS1.style.display && imG2.style.display && detailS2.style.display == "block"){
        hR.style.display = "none";
        imG.style.display = "none";
        detailS.style.display = "none";
        imG1.style.display = "none";
        detailS1.style.display = "none";  
        imG2.style.display = "none";
        detailS2.style.display = "none";  
    }
    else{
        hR.style.display = "block";
        imG.style.display = "block";
        detailS.style.display = "block";
        imG1.style.display = "block";
        detailS1.style.display = "block";
        imG2.style.display = "block";
        detailS2.style.display = "block";
    }
}