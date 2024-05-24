const List = [
    {
        
        thubnail:"https://geo-media.beatsource.com/image_size/1400x1400/2/7/f/27f0bf4b-4fcf-444e-9b33-27ed3b25d1a1.jpg",
        title:"All in - Mann Vannda",
        view:"190M views",
        
    },
    {
        
        thubnail:"https://i.ytimg.com/vi/eRp5bO4SrKo/maxresdefault.jpg",
        title:"មកក្រោយគេ ",
        view:"13M views",
        
    },
    {
        
        thubnail:" https://img.youtube.com/vi/LBE-ouv1kgQ/maxresdefault.jpg",
        title:" Dok Mai Kab Hua Jai (Flowers And Heart) – I-ZAX",
        view:" 800M views",
        
    },
    
    {
        
        thubnail:"https://i.scdn.co/image/ab67616d0000b27373862007fbff72fcdddcf6bc",
        title:"Mind Games - Single by Sickick ",
        view:"190M views",
        
    },
    {
        
        thubnail:"https://i.ytimg.com/vi/NUf2qj0l4Ak/maxresdefault.jpg",
        title:"HYBS - Tip Toe (speed up) ",
        view:"13M views",
        
    },
    {
        
        thubnail:"https://imgx.sonora.id/crop/0x0:0x0/700x465/photo/2023/06/21/ab67616d0000b27306f16e5778712269-20230621084500.jpg ",
        title:"Lirik Lagu LDR – Sped Up Milik Shoti dan Terjemahan",
        view:" 80M views",
        
    },
    
    {
        
        thubnail:"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/36/17/0c/36170cfd-0451-44d9-878d-2e2ea9bc7b4a/cover.jpg/400x400bb.webp",
        title:"พูดทำไม",
        view:"190K views",
        
    },
    {
        
        thubnail:"https://i.ytimg.com/vi/eRp5bO4SrKo/maxresdefault.jpg",
        title:"មកក្រោយគេ ",
        view:"13M views",
        
    },
    {
        
        thubnail:" https://img.youtube.com/vi/LBE-ouv1kgQ/maxresdefault.jpg",
        title:" Dok Mai Kab Hua Jai (Flowers And Heart) – I-ZAX",
        view:" 800M views",
        
    },
    
]
;

var display = () =>{
  const video = document.getElementById("vdo");
  let txt ="";
  List.forEach( el =>{
    txt+=`
    
    <div class="item-0 hvr-underline-from-center " >
            <div class="img-box"  >
                <img src="${el.thubnail}" alt="">
            </div>
            <div class="container">
                <h3>
                ${el.title}
                </h3>
                <p>
                   ${el.view}Views 2week ago
                </p>
            </div>
    </div> 
    `;
  });
  video.innerHTML =txt; 
}
display();

var like = () =>{
    const btnclick = document.getElementById("btn-click");
    var increase = document.getElementById("+");
    let count = 1;    
    btnclick.addEventListener("click", ()=>{
      
        count+=1;
        increase.children[0].value = count;
        
    });
  
}
like();