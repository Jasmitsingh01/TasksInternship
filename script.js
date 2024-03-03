const DataArray = [
  
  
  {
    images: ["images/one2.png", "images/one1.png"],
    imagesClass: ["img-1", "img-1-1"],
    col1: "#928989",
    col2: "#5c0bc0",
    mainImage:
      "images/world-communication-awards-for-best-digital-experience.png",
    mainText: "ABC 123",
    mainsub: "We are The best web development in the world",
    buttontext: "View Case Study",
    heading: "25M+ Downloads",
    subHeading: ["", "on appstore & google playstore"],
  },
  {
    images: [
      "images/veme-blockchain-app-developed.png",
      "images/veme-app-ui-design.png",
    ],
    imagesClass: ["img-2", "img-2-1"],
    col1: "#030384",
    col2: "#152ed0",
    mainImage: "",
    mainText: "ABC 234",
    mainsub: "We are The best web development in the world",
    buttontext: "Comming Soon",
    heading: "Blockchain",
    subHeading: ["The Next Big", "Revolution"],
  },
  {
    images: [
      "images/nasa-fitness-tracking-mobile-app.png",
      "images/measure-total-body-weight-through-fitness-app.png",
    ],
    col1: "#03036a",
    col2: "#060e42",

    imagesClass: ["img-3", "img-3-1"],
    mainImage: "",
    mainText: "ABC 345",
    mainsub: "We are The best web development in the world",
    buttontext: "Comming Soon",
    heading: "NASA",
    subHeading: ["Powered by advance", "algorithms"],
  },
  {
    images: [
      "images/pizza_box.png",
      "images/dominos-bread.png",
      "images/domi-img1.png",
      "images/dominos-bread1.png",
      "images/ux-strategy-for-mobile-app-devlopment.png",
    ],
    col1: "#03036a",
    col2: "#060e42",
    imagesClass: ["img-4", "img-4-1", "img-4-2", "img-4-3", "img-4-4"],
    mainImage: "",
    mainText: "ABC 456",
    mainsub: "We are The best web development in the world",
    buttontext: "View Case Study",
    heading: "UX Strategy",
    subHeading: ["Redefining", "and UI design"],
  },
  {
    images: [
      "images/karavan-social-networking-app-screen.png",
      "images/social-networking-app-case-study.png",
      "images/karavan_2.png",
      "images/karavan-social-networking-app-screen-2.png",
      "images/developers-for-social-media-app.png",
    ],
    col1: "#1a7a9cd8",
    col2: "#0a44a7",
    imagesClass: ["img-5", "img-5-1", "img-5-2", "img-5-3", "img-5-4"],
    mainImage: "",
    mainText: "ABC 567",
    mainsub: "We are The best web development in the world",
    buttontext: "View Case Study",
    heading: "Text Headline",
    subHeading: ["Text Headline", "Footer headline"],
  },
  {
    images: [
      "images/interior.jpg",
      "images/erp-app-development-service.png",
     
    ],
    col1: "#1a7a9cd8",
    col2: "#111da6",
    imagesClass: ["img-6", "img-6-1"],
    mainImage: "",
    mainText: "ABC 678",
    mainsub: "We are The best web development in the world",
    buttontext: "View Case Study",
    heading: "Text Headline",
    subHeading: ["Developing ERP Solution for", "in Future industry"],
  },
  
  {
    images: ["images/melltoo-img2.png", "images/melltoo-img1.png"],
    col1: "#088e4f",
    col2: "#097040",
    imagesClass: ["img-7", "img-7-1"],
    mainImage: "images/mobile-app-of-the-year-by-entrepreneur.png",
    mainText: "ABC 23478",
    mainsub: "We are The best web development in the world",
    buttontext: "View Case Study",
    heading: "Eat Asia",
    subHeading: ["Biggest Classifieds", "Countries"],
  },
];
let length=0;
let index = 0;
const Col1 = document.getElementById("col-1");
const Col2 = document.getElementById("col-2");

const scrollText = document.getElementById("scroll-text");
const maintext = document.getElementById("main-text");
const svg=document.getElementById("transring")
const ring=document.getElementById('Opaque_Ring');
if (window.matchMedia("(min-width: 768px)").matches) {
  DataArray[index].images.map((item, indexs) => {
    const img = document.createElement("img");
    img.setAttribute("src", item);
    img.setAttribute("class", DataArray[index].imagesClass[indexs]);
    Col1.appendChild(img);
  });

  const Pfirst = document.createElement("p");
  Pfirst.setAttribute("class", "sub");
  Pfirst.innerText = DataArray[index].subHeading[0];

  const h3 = document.createElement("h3");
  h3.setAttribute("class", "heading");
  h3.innerText = DataArray[index].heading;

  const Psec = document.createElement("p");
  Psec.setAttribute("class", "sub");
  Psec.innerText = DataArray[index].subHeading[1];

  scrollText.appendChild(Pfirst);
  scrollText.appendChild(h3);
  scrollText.appendChild(Psec);

  const mainImg = document.createElement("img");

  mainImg.setAttribute("class", "main-img");
  mainImg.style.border=`2px solid ${DataArray[index].col2} `
  mainImg.style.backgroundColor=`${DataArray[index].col2} `

  mainImg.setAttribute("src", DataArray[index].mainImage);

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "heading");
  h2.innerText = DataArray[index].mainText;
  const p = document.createElement("p");
  p.setAttribute("class", "sub");
  p.innerText = DataArray[index].mainsub;
  const Buttn = document.createElement("button");
  Buttn.setAttribute("class", "btn");
  Buttn.innerText = DataArray[index].buttontext;
  maintext.appendChild(mainImg);
  maintext.appendChild(h2);
  maintext.appendChild(p);
  maintext.appendChild(Buttn);
  ring.style.strokeDasharray=`10,1000`

  Col1.style.backgroundColor=DataArray[index].col1
  Col2.style.backgroundColor=DataArray[index].col2
  svg.style.backgroundColor=`${DataArray[index].col2}`
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      
        DataArray[index].imagesClass.map((item, index) => {
          document.querySelectorAll(`.${item}`).forEach((item) => {
            item.remove();
          });
        });

        document.querySelectorAll(".heading").forEach((item) => {
          item.remove();
        });
        document.querySelectorAll(".sub").forEach((item) => {
          item.remove();
        });
        document.querySelectorAll(".main-img").forEach((item) => {
          item.remove();
        });
        document.querySelectorAll(".btn").forEach((item) => {
          item.remove();
        });
        document.querySelectorAll(".logo-main").forEach((item) => {
          item.remove();
        });
        if(index<6){
          index++
          ring.style.strokeDasharray=`${length+=140},1000`;
        }
        svg.style.backgroundColor=`${DataArray[index].col2}`

        Col1.style.backgroundColor=DataArray[index].col1
  Col2.style.backgroundColor=DataArray[index].col2
        DataArray[index].images.map((item, indexs) => {
          const img = document.createElement("img");
          img.setAttribute("src", item);
          img.setAttribute("class", DataArray[index].imagesClass[indexs]);
          Col1.appendChild(img);
        });

        const Pfirst = document.createElement("p");
        Pfirst.setAttribute("class", "sub");
        Pfirst.innerText = DataArray[index].subHeading[0];
        scrollText.appendChild(Pfirst);

        if (DataArray[index].heading === "NASA") {
          const h3 = document.createElement("img");
          h3.setAttribute("class", "logo-main");
          h3.setAttribute("src", "images/nasa-mobile-app.png");

          h3.innerText = DataArray[index].heading;
          scrollText.appendChild(h3);
        } else {
          const h3 = document.createElement("h3");
          h3.setAttribute("class", "heading");
          h3.innerText = DataArray[index].heading;
          scrollText.appendChild(h3);
        }

        const Psec = document.createElement("p");
        Psec.setAttribute("class", "sub");
        Psec.innerText = DataArray[index].subHeading[1];

        scrollText.appendChild(Psec);

        const mainImg = document.createElement("img");

        mainImg.setAttribute("class", "main-img");
        mainImg.style.border=`2px solid ${DataArray[index].col2} `
        mainImg.style.backgroundColor=`${DataArray[index].col2} `

        mainImg.setAttribute("src", DataArray[index].mainImage);

        const h2 = document.createElement("h2");
        h2.setAttribute("class", "heading");
        h2.innerText = DataArray[index].mainText;
        const p = document.createElement("p");
        p.setAttribute("class", "sub");
        p.innerText = DataArray[index].mainsub;
        const Buttn = document.createElement("button");
        Buttn.setAttribute("class", "btn");
        Buttn.innerText = DataArray[index].buttontext;
        maintext.appendChild(mainImg);
        maintext.appendChild(h2);
        maintext.appendChild(p);
        maintext.appendChild(Buttn);
    
        const MyText = new SplitType(".heading");
const subtext = new SplitType(".sub");
      if(index<=6){
        Down()

      }      
    } else {
      DataArray[index].imagesClass.map((item, index) => {
        document.querySelectorAll(`.${item}`).forEach((item) => {
          item.remove();
        });
      });

      document.querySelectorAll(".heading").forEach((item) => {
        item.remove();
      });
      document.querySelectorAll(".sub").forEach((item) => {
        item.remove();
      });
      document.querySelectorAll(".main-img").forEach((item) => {
        item.remove();
      });
      document.querySelectorAll(".btn").forEach((item) => {
        item.remove();
      });
      document.querySelectorAll(".logo-main").forEach((item) => {
        item.remove();
      });
      if(index>0){
        index--;
        ring.style.strokeDasharray=`${length-=140},1000`;
      }
      svg.style.backgroundColor=`${DataArray[index].col2}`

      Col1.style.backgroundColor=DataArray[index].col1
Col2.style.backgroundColor=DataArray[index].col2
      DataArray[index].images.map((item, indexs) => {
        const img = document.createElement("img");
        img.setAttribute("src", item);
        img.setAttribute("class", DataArray[index].imagesClass[indexs]);
        Col1.appendChild(img);
      });

      const Pfirst = document.createElement("p");
      Pfirst.setAttribute("class", "sub");
      Pfirst.innerText = DataArray[index].subHeading[0];
      scrollText.appendChild(Pfirst);

      if (DataArray[index].heading === "NASA") {
        const h3 = document.createElement("img");
        h3.setAttribute("class", "logo-main");
        h3.setAttribute("src", "images/nasa-mobile-app.png");

        h3.innerText = DataArray[index].heading;
        scrollText.appendChild(h3);
      } else {
        const h3 = document.createElement("h3");
        h3.setAttribute("class", "heading");
        h3.innerText = DataArray[index].heading;
        scrollText.appendChild(h3);
      }

      const Psec = document.createElement("p");
      Psec.setAttribute("class", "sub");
      Psec.innerText = DataArray[index].subHeading[1];

      scrollText.appendChild(Psec);

      const mainImg = document.createElement("img");

      mainImg.setAttribute("class", "main-img");
      mainImg.style.border=`2px solid ${DataArray[index].col2} `
      mainImg.style.backgroundColor=`${DataArray[index].col2} `

      mainImg.setAttribute("src", DataArray[index].mainImage);

      const h2 = document.createElement("h2");
      h2.setAttribute("class", "heading");
      h2.innerText = DataArray[index].mainText;
      const p = document.createElement("p");
      p.setAttribute("class", "sub");
      p.innerText = DataArray[index].mainsub;
      const Buttn = document.createElement("button");
      Buttn.setAttribute("class", "btn");
      Buttn.innerText = DataArray[index].buttontext;
      maintext.appendChild(mainImg);
      maintext.appendChild(h2);
      maintext.appendChild(p);
      maintext.appendChild(Buttn);
      const MyText = new SplitType(".heading");
const subtext = new SplitType(".sub");
if(index>=0){
  up()

}    
    }
  });
}
else{
DataArray.map((item)=>{
  item.col1
})
}


function Down() {
  gsap.from(".char ", {
    scrollTrigger: {
      trigger: ".char",
    },
    yPercent: -100,

    duration: 2,
  });

  gsap.from(".main-img", {
    autoAlpha: 0,
    duration: 2,
  });
  gsap.from(".", {
    yPercent: 100,
    duration: 2,
    stagger: 0.5,
  });
  gsap.from(".img-2", {
    yPercent: -100,
    duration: 2,
    yoyo: true,
  });
  gsap.from(".img-2-1", {
    yPercent: 100,
    duration: 2,
    yoyo: true,
  });
}

function up() {
  gsap.from(".char ", {
    scrollTrigger: {
      trigger: ".char",
    },
    yPercent: 100,

    duration: 2,
  });

  gsap.from(".main-img", {
    autoAlpha: 0,
    duration: 2,
  });
  gsap.from(".", {
    yPercent: 100,
    duration: 2,
    stagger: 0.5,
  });
  gsap.from(".btn", {
    scale: 0,
    duration: 2,
    yoyo: true,
  });
}
