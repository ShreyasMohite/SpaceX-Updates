


const Data=()=>{
    fetch("https://api.spacexdata.com/v4/launches/latest").then((datas)=>{
        return datas.json();
    }).then((act)=>{
        const det=document.getElementById("details");
        details=act.details;
        det.innerHTML=details;

        const imgs=document.querySelector("img");
        picture=act.links.flickr.original;
        picturelen=picture.length;
        const index=Math.floor(Math.random()*picturelen);
        pic=act.links.flickr.original[index];
        imgs.setAttribute("src",pic)

        const arti=document.getElementById("article");
        article=act.links.article;
        arti.setAttribute("href",article)

        const wiki=document.getElementById("wiki");
        wikipedia=act.links.wikipedia;
        wiki.setAttribute("href",wikipedia)

        const yt=document.getElementById("yt");
        youtube=act.links.webcast;
        yt.setAttribute("href",youtube);





       
        
        
    })
}



const data=()=>{
    Data();
    
}