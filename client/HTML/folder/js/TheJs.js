// The NavBar And Landing Page 
{
    if(!window.localStorage.getItem('TheUserAllInfo')){
        let theAllInfoObject = {
            UserName : {
                UserNameInput : "UserName",
                FirstName : "user",
                LastName : "name",
            },
            OrganizationName : "Null",
            Location : "Null",
            Email : "Null",
            PhoneNumber : "Null",
            Birthday : "null",
            TheImageProFileSrc: "null"
        }
        window.localStorage.setItem("TheUserAllInfo",JSON.stringify(theAllInfoObject))
    }

        // The Header
        let TheHeader = document.getElementsByTagName("header")[0];
        let TheBottomNavBar = document.getElementsByClassName("BottomNavBar")[0];
        let TheLeftPart = document.getElementsByClassName("TheLeftPartContiner")[0];
        let TheCenterPart = document.getElementsByClassName("TheCenter")[0];
        let TheRightPart = document.getElementsByClassName("TheRight")[0];
        setTimeout(() => {
            TheHeader.style = " animation: TheHeaderEdit .4s linear  ; opacity:1;";
            TheLeftPart.style.animation = "TheLeftPartANiStart 0.4s linear"
            TheLeftPart.style.display = "block"
            TheCenterPart.style.animation = "TheCenteAni 1s linear"
            TheCenterPart.style.display = "block"
            TheRightPart.style.animation = "TheRightAniIn 0.4s linear"
            TheRightPart.style.display = "block"

        }, 2400);

    // T25yr El Bottom Nav Bar 34an bysl m4akl lma y7sal El animation Bta3 El NavBar Top
    // We Y7sal Animation Bardo
    setTimeout(() => {
        TheBottomNavBar.style.visibility = "visible"
        TheBottomNavBar.style.transition = "all .3s linear"
        TheBottomNavBar.style.animation = "TheBottomNavAni .5s linear"
    }, 3000);
    // TheSeachBarActive 
    let TheSearchBarActiveComponts = [...document.getElementsByClassName("ActiveOnClick")];
    let ExitMark = document.getElementsByClassName("ssss")[0];
    let TheUl = document.getElementsByClassName("TheMainUl")[0];
    let TheNavBar = document.getElementsByTagName("nav")[0];
    // El Zorar Bta3 El 2dsa OW El KAlam BS Fy El Screan El Small 
    let TheBTNInSmallScreanTOSearch = document.getElementsByClassName("TheSearchInputInSmallScreanEdit")[0]
    TheSearchBarActiveComponts.forEach(Element => {
        Element.addEventListener("click", () => {
            TheSearchBarActiveComponts[2].focus();
            TheSearchBarActiveComponts[0].style.transition = " all .2s linear";
            TheSearchBarActiveComponts[0].style.border = "2px solid black";
            TheSearchBarActiveComponts[0].style.width = "320px";
            ExitMark.style.display = "block ";
        })
        // Lma Tdos 3ala El Zorar El So8yar Y7sal da 
        TheBTNInSmallScreanTOSearch.addEventListener("click", () => {
            TheUl.style.display = "none"
            TheBTNInSmallScreanTOSearch.style.display = "none"
            TheInputParent.style.display = "flex"
            TheNavBar.style.padding = "13.5px 0px"
        })
    })
    // When I Click X in First Input In Small Screan Will Do That
    ExitMark.addEventListener("click", () => {
        TheSearchBarActiveComponts[2].blur();
        TheSearchBarActiveComponts[0].style.transition = " all .1s linear";
        TheSearchBarActiveComponts[0].style.border = "0px solid black";
        TheSearchBarActiveComponts[0].style.width = "290px";
        ExitMark.style.display = "none";
        TheSearchBarActiveComponts[2].value = "";
    })

    // The Input In SMAll Screan Coustmize 
    let TheCompontsOnClick = [...document.getElementsByClassName("InputSmallScreanCompnts")];
    let TheInputParent = document.getElementsByClassName("InputPartSmallScreen")[0];
    let CloseBTNINSMAllINput = document.getElementsByClassName("TheDelIconInSmallScreen")[0];
    // When I Foucs in Input
    TheCompontsOnClick.forEach(Element => {
        Element.addEventListener("click", () => {
            TheCompontsOnClick[2].focus();
            TheInputParent.style.transition = " all .2s linear";
            TheInputParent.style.border = "2px solid black";
            TheInputParent.style.width = "75%";
            CloseBTNINSMAllINput.style.display = "block ";
        })
    })
    // When I blur or Get out From Input
    function GetOutFromInput() {
        TheBTNInSmallScreanTOSearch.style.display = "flex"
        TheInputParent.style.display = "none"
        TheUl.style.display = "flex"
        TheNavBar.style.padding = "0px"
    }
    TheCompontsOnClick[2].addEventListener("blur", () => {
        GetOutFromInput()
    })
    CloseBTNINSMAllINput.addEventListener("click", () => {
        GetOutFromInput()
    })
    // The CheckBox Edit
    //  TheSide Navbar
    let TheSideNavBarParnt = document.getElementsByClassName("TheRightPartInSmallScreanHamprgerMenu")[0];
    let TheHampmenuBTN = document.getElementsByClassName("mesdnu")[0];
    let RuleOne = false;
    TheHampmenuBTN.addEventListener("click",() =>{
        if(RuleOne === false){
            TheSideNavBarParnt.style.display = "block"
            TheSideNavBarParnt.style.animation = "TheSideNavIn 0.3s linear  "; 
            RuleOne=true;
        }else{
            TheSideNavBarParnt.style.animation = "TheSideNavOut 0.3s linear  "; 
            setTimeout(() => {
                TheSideNavBarParnt.style.display = "none"
            },290);
            RuleOne=false;
        }
    })
}
// The Main Page
// The Center Part Wirite Post Animation 
let theParentOfWritePost = document.getElementsByClassName("WritePostPart")[0];
let TheIeleInPartenWritePost = document.getElementsByClassName("TheIELEdiv");
let TheIColor = ["#f58434dc", "#d498a0", "#74c6a4", "#a382cc"];
// console.log(thep)
for (let i = 0; i < TheIeleInPartenWritePost.length; i++) {
    TheIeleInPartenWritePost[i].addEventListener("mouseover", () => {
        theParentOfWritePost.style = `box-shadow: 0px 0px 30px ${TheIColor[i]};`

    })
    TheIeleInPartenWritePost[i].addEventListener("mouseleave", () => {
        theParentOfWritePost.style.transition = `: all .3s linear;`
        theParentOfWritePost.style = `transition: all .3s linear; box-shadow: 0px 0px 4px black;`
    })
}
// JS form Posts
let ThePlaceOfPosts = document.getElementsByClassName("PostsPartParent")[0];
let ButtonOfCreatePost = [...document.getElementsByClassName("CreatePostBTn")];
let theVideoPostInDivOfPost;
let user = JSON.parse(window.localStorage.getItem('TheUserAllInfo'))
function ThePostBody(TheDisOfPost,TheUrlOfFIle,IsImage,TheTextColor) {
    // Big Post ParT{
    //      1 - The Header - Of Post
    //         1.1 - FirstPart In Header
    //         1.1.1 - Img Part > Img Element
    //         1.1.2 - Text Part Of Profile > b*3 
    //         1.2 - SecondPart In Header > button
    //      2 - The Discratipon Body - Of Post
    //         2.1 - p > Text 
    //         2.2 - Img (choice)
    //      3 - Stataics Of Post - Of Post
    //         3.1 - p > text , Icon
    //         <hr>
    //      4 - The Footer - Of Post
    //      4.1 - TheIELEdiv * 4
    //      4.2 - TheIcon In Every Element
    // }
    // The Big Parnt Of The post
    let TheBigParentBodyPost = document.createElement("div");
    TheBigParentBodyPost.classList.add("PostsPart");
    // 1 - The Header - Of Post
    let TheHeaderOfPost = document.createElement("div");
    TheHeaderOfPost.classList.add("HeaderOfpost");
    // 1.1 - TheFirsTPartInHeader
    let TheFirstParTInHeader = document.createElement("div");
    TheFirstParTInHeader.classList.add("FirstParTInHeader")
    // 1.1.1 - TheImgPartInFirstPart
    let TheImgPartDivInFirstPart = document.createElement("div");
    TheImgPartDivInFirstPart.classList.add("ImgPartInPost");
    // TheImgInDiv
    let TheImgPartElemntInFirstPart = document.createElement("img");
    TheImgPartElemntInFirstPart.classList.add("TheImgOFpost");
    TheImgPartElemntInFirstPart.setAttribute("src", "../IntroDuction video's and img/Unknow.jpg");
    // 1.1.2 - The Text Part In FirstPart
    let TheTextPartInFirstPartInHeader = document.createElement("div");
    TheTextPartInFirstPartInHeader.classList.add("TextAndName");
    // The b's With Class
    // User Name
    let UserNamePost = document.createElement("b");
    UserNamePost.classList.add("UserNamePost", "TheUserInfo");
    UserNamePost.classList.add("TheUserNameLoop")

    UserNamePost.textContent = user.UserName.UserNameInput;
    // Jop Name
    let JopName = document.createElement("b");
    JopName.classList.add("JopName", "TheUserInfo");
    JopName.textContent = user.OrganizationName;
    JopName.classList.add("TheJopLoop");
    //  Time
    let TimeOfPost = document.createElement("b");
    TimeOfPost.classList.add("Time", "TheUserInfo");
    let TimeCalc = 0;
    TimeOfPost.innerHTML = `1m`;
    setInterval(() => {
        TimeCalc ++;
        if(TimeCalc >= 60){
            TimeOfPost.innerHTML = `${TimeCalc}m <i class="fa-solid fa-earth-americas"></i>`;
        }
    }, 3600000);
    let TheLogoOfTime = document.createElement("i");
    TheLogoOfTime.setAttribute("class", "fa-solid fa-earth-americas");
    TimeOfPost.appendChild(TheLogoOfTime);
    // 1.2 - TheSecondPartInHeader
    let TheSecondParentHeader = document.createElement("div");
    TheSecondParentHeader.classList.add("TheSecondParentHeader");
    // 1.2.1 - The Button Of Follow
    let TheFollowBtn = document.createElement("button");
    TheFollowBtn.setAttribute("class", "btn btn-outline-primary")
    TheFollowBtn.textContent = "Follow"
    // Add Button in The The Second Part
    TheSecondParentHeader.appendChild(TheFollowBtn);
    // Add b's Elements in The TextAndName
    TheTextPartInFirstPartInHeader.appendChild(UserNamePost);
    TheTextPartInFirstPartInHeader.appendChild(JopName);
    TheTextPartInFirstPartInHeader.appendChild(TimeOfPost);
    // Add ELemnt's In Img Div
    TheImgPartDivInFirstPart.appendChild(TheImgPartElemntInFirstPart);
    // Add Elemnt's in FirstPart
    TheFirstParTInHeader.appendChild(TheImgPartDivInFirstPart);
    TheFirstParTInHeader.appendChild(TheTextPartInFirstPartInHeader);
    // Add Elemnt's in Header
    TheHeaderOfPost.appendChild(TheFirstParTInHeader);
    TheHeaderOfPost.appendChild(TheSecondParentHeader);
    // 2 - The Discratipon Body - Of Post
    let DisBodyOfThePost = document.createElement("div");
    DisBodyOfThePost.classList.add("DisOfPost");
    // 2.1 - TheP Element Part
    let TheDisPEleInDisPart = document.createElement("p");
    TheDisPEleInDisPart.classList.add("TheTextDis")
    TheDisPEleInDisPart.textContent = TheDisOfPost;
    TheDisPEleInDisPart.style.color = TheTextColor;

    // 2.2 - TheImg Element Div
    let TheImgPartDivOfThePost = document.createElement("div");
    TheImgPartDivOfThePost.classList.add("ImgContinerOfPost");
    // 2.2.1 - TheImg ELement Of Post
    let theImgPostInDivOfPost = document.createElement("img");
    theImgPostInDivOfPost.classList.add("TheImgEleInPost");
    theImgPostInDivOfPost.setAttribute("src", TheUrlOfFIle);
    theImgPostInDivOfPost.style.border = "2px solid black";
    theImgPostInDivOfPost.style.borderRadius = "5px";
    // 2.2.1 Edit - The Video Element OF The Post
    theVideoPostInDivOfPost = document.createElement("video");
    theVideoPostInDivOfPost.classList.add("TheImgEleInPost");
    theVideoPostInDivOfPost.setAttribute("src", TheUrlOfFIle);
    theVideoPostInDivOfPost.setAttribute("controls", "controls");
    theVideoPostInDivOfPost.style.border = "2px solid black";
    theVideoPostInDivOfPost.style.borderRadius = "5px";
    // Add Img In Img Div
    if(IsImage === true){
        TheImgPartDivOfThePost.appendChild(theImgPostInDivOfPost);
    }else if(IsImage === false){
        TheImgPartDivOfThePost.appendChild(theVideoPostInDivOfPost);
    }else if(IsImage === null){
        // console.log("")
        null;
    }
    // Add Elemen's To The DisPart
    DisBodyOfThePost.appendChild(TheDisPEleInDisPart);
    DisBodyOfThePost.appendChild(TheImgPartDivOfThePost);
    // 3 - StataicsOfPost - of post
    let StataicsOfPost = document.createElement("div");
    StataicsOfPost.classList.add("StataicsOfPost");
    // 3.1 - The P Element's of Stataics
    let ThePoStataicsOfPost = document.createElement("p");
    ThePoStataicsOfPost.classList.add("StataicsOfPos");
    ThePoStataicsOfPost.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> 150 . 14 Comments`
    // Add ele In The Stataics 
    StataicsOfPost.appendChild(ThePoStataicsOfPost)
    // 4 - The Footer - Of Post
    let TheFooterOfThePost = document.createElement("div");
    TheFooterOfThePost.classList.add("TheFooterOFPost");
    let TheIcons = [`fa-solid fa-thumbs-up EditThumsUp`, `fa-solid fa-message`, `fa-solid fa-share-from-square`, `fa-solid fa-paper-plane`];
    let TheWordsOfICon = ["Like", "Comment", "Share", "Send"];
    let TheClass = ["LikeClass","CommentClass","ShareClass","SendCLass"]
    for (let i = 0; i < TheIcons.length; i++) {
        // TheIcon
        let TheIElement = document.createElement("i");
        TheIElement.setAttribute("class", `${TheIcons[i]}`);
        // The Text of Icon
        let TheTextOfIcon = document.createElement("b");
        TheTextOfIcon.classList.add("TheNameOfIcon");
        TheTextOfIcon.textContent = (`${TheWordsOfICon[i]}`);
        let PartOfIcon = document.createElement("div");
        PartOfIcon.classList.add("TheIELEdiv");
        PartOfIcon.classList.add(TheClass[i]);
        PartOfIcon.appendChild(TheIElement);
        PartOfIcon.appendChild(TheTextOfIcon);
        TheFooterOfThePost.appendChild(PartOfIcon)
    }
    // hr Element
    let TheHrEle = document.createElement("hr");
    // Add The Main Three Parts In The PostPart
    TheBigParentBodyPost.appendChild(TheHeaderOfPost);
    TheBigParentBodyPost.appendChild(DisBodyOfThePost);
    TheBigParentBodyPost.appendChild(StataicsOfPost);
    TheBigParentBodyPost.appendChild(TheHrEle);
    TheBigParentBodyPost.appendChild(TheFooterOfThePost);
    ThePlaceOfPosts.appendChild(TheBigParentBodyPost);
}
window.localStorage.setItem("TheTextColor","black")
let TheFormWritePost = document.getElementsByClassName("CreatePostPart")[0];
let TextAreaPart = document.getElementsByTagName("textarea")[0];
// When I Click To Create Post
ButtonOfCreatePost.forEach(ele => {
    ele.addEventListener("click", () => {
        TheFormWritePost.style.animation = "TheFormOfPostShowIn .2s linear"
        TheFormWritePost.style.display = "block"
        TextAreaPart.focus();
    })
})
let TheExitBtnFormClose = document.getElementsByClassName("TheCloseIcon")[0];
function CloseTheFormPart() {
    TheFormWritePost.style.animation = "TheFormOfPostShowOut .2s linear"
    TheFormWritePost.style.display = "none"
    TextAreaPart.textContent = "";
}
TheExitBtnFormClose.addEventListener("click",() => {
    CloseTheFormPart()
})
// Create Post Part
TextAreaPart.innerHTML = "";
let TheChangeColorBTN = document.getElementsByClassName("ChangeColorBTN")[0];
TheChangeColorBTN.addEventListener("click", () => {
    let TheRandOmNumber = Math.floor(Math.random() * 350);
    let TheColorOfText = `hsl(${TheRandOmNumber},100%,50%)`;
    window.localStorage.setItem("TheTextColor",TheColorOfText)
    TextAreaPart.style.color = TheColorOfText;
})
let TheBackColorBlack = document.getElementsByClassName("ResetTheTextColor")[0];
TheBackColorBlack.addEventListener("click",() => {
    window.localStorage.setItem("TheTextColor","black")
    TextAreaPart.style.color = "black"
})
let TheBostBTn = document.getElementsByClassName("PostBTn")[0];
let TheErrorEmptyDisOfPost = document.getElementsByClassName("TheErrorsOfPost")[0];
let TheRulesOfShareList = ["This post will be shown to all people, including your friends and everyone who is interested in your post", "This post will be shown to your friends only, and no one other than your friends will be able to see your post", "No one will be able to see your post until the post visibility settings are changed to public or friends"]

// When I click to Any select Element the Alert Text Will change
let TheSelectOptions = document.getElementsByTagName("select")[0];
let TheAlert = document.getElementsByClassName("ChangapleText")[0];
TheSelectOptions.addEventListener("change",() => {
    TheAlert.textContent = TheRulesOfShareList[parseInt(TheSelectOptions.value)];
    
})
// 34an lma 25tar El file Bta3 el Photo
// When I click browse
let TheBrowseVispleBTN = document.getElementsByClassName("BrowseBTN")[0];
let TheURLOfTheImage;
let TheAllInfoOfImage;
let TheHiddenBTN = document.getElementsByClassName("TheRealInputFIle")[0]; // The Input Element
let TheImageBTN = document.getElementsByClassName("AddImg")[0];
let TheVideoBTN = document.getElementsByClassName("AddImg")[1];
let TheAllBTNProparty = document.getElementsByClassName("AddImg");
let TheIconOfDragArea  = document.getElementsByClassName("EditFaImage")[0];
let ChangeTextInDragArea = document.getElementsByClassName("TheSmallTextDragArea")[0];
TheBrowseVispleBTN.addEventListener("click" , () => {
    TheHiddenBTN.click();
})
let TheImgViewScrean = document.getElementsByClassName("TheImagesrc")[0];
let TheVideoViewScrean = document.getElementsByClassName("TheVideoOutScreanView")[0];
// When Choose Photo From browser
let TheDrageArea = document.getElementsByClassName("TheDragArea")[0];
let TheERrorUploadElement = document.getElementsByClassName("TheERrorUploadElement")[0];
let Xmark = document.getElementsByClassName("XMARK")[0];
function AddIMage(){
    TheURLOfTheImage = URL.createObjectURL(TheHiddenBTN.files[0]);
    TheAllInfoOfImage = TheHiddenBTN.files[0].type;
    // This is The Image Path you can use it as you like :)
    if(TheIconOfDragArea.getAttribute("src") === "IMGS/images-solid.svg"){
        if(TheAllInfoOfImage === "image/png" || TheAllInfoOfImage === "image/jpeg" || TheAllInfoOfImage === "image/svg+xml"){
            TheImgViewScrean.src = TheURLOfTheImage;
            TheImgViewScrean.style.display = "block"
            TheImgViewScrean.style.border = "1px solid black"
            TheImgViewScrean.style.borderRadius = "5px"
            TheDrageArea.style.display = "none"
            TheVideoViewScrean.style.display = "none"
            TheERrorUploadElement.style.display = "none"
            Xmark.style.display = "block"
            // console.log("You Are Choose Image -------------------")
        }else{
            TheERrorUploadElement.style.display = "flex"
            // console.log("You Are Dont Choose Image -------------------")
        }
    }else{
        if(TheAllInfoOfImage === "video/mp4"){
            Xmark.style.display = "block"
            TheDrageArea.style.display = "none"
            TheImgViewScrean.style.display = "none"
            TheERrorUploadElement.style.display = "none"
            TheVideoViewScrean.style.display = "block"
            TheVideoViewScrean.style.border = "1px solid black"
            TheVideoViewScrean.style.borderRadius = "5px"
            TheVideoViewScrean.src = TheURLOfTheImage;
            // console.log("You Are Choose Video -------------------")
        }else{
            TheERrorUploadElement.style.display = "flex"
            // console.log("You Are Dont Choose Video -------------------")
        }
    }
}
Xmark.addEventListener("click",() => {
    TheImgViewScrean.style.display = "none";
    TheVideoViewScrean.style.display = "none"
    Xmark.style.display = "none";
})
TheHiddenBTN.addEventListener("change",() => {
    AddIMage();
})
TheDrageArea.addEventListener("dragover",(e) => {
    e.preventDefault();
})
TheDrageArea.addEventListener("drop",(e) => {
    e.preventDefault();
    TheHiddenBTN.files = e.dataTransfer.files;
    AddIMage();
})

// When I click On Image Btn And Photo BTn
for(let i =0;i<TheAllBTNProparty.length;i++){
    TheAllBTNProparty[i].addEventListener("click",() => {
        if(i === 0){
            console.log("AbberImage")
            TheDrageArea.style.display = "block"
            TheIconOfDragArea.src = "IMGS/images-solid.svg";
            ChangeTextInDragArea.textContent = "Spport JPG , PNG , SVG"
        }else{
            console.log("AbberVideo")
            TheDrageArea.style.display = "block"
            TheIconOfDragArea.src = "IMGS/photo-film-solid.svg";
            ChangeTextInDragArea.textContent = "Spport Mp4"
        }
    })
}
let TheCloseIconInDargImage = document.getElementsByClassName("TheCloseIconInDargImage")[0];
TheCloseIconInDargImage.addEventListener("click", () => {
    TheDrageArea.style.display = "none"
})
// When I Click to share the post
TheBostBTn.addEventListener("click", () => {
    if (TextAreaPart.value === "") {
        TheErrorEmptyDisOfPost.style.display = "block"
    } else {
        if(TheAllInfoOfImage === "video/mp4"){
            ThePostBody(TextAreaPart.value,TheURLOfTheImage,false,window.localStorage.getItem("TheTextColor"));
            
        }else if (TheAllInfoOfImage === "image/png" || TheAllInfoOfImage === "image/jpeg" || TheAllInfoOfImage === "image/svg+xml"){
            ThePostBody(TextAreaPart.value,TheURLOfTheImage,true,window.localStorage.getItem("TheTextColor"));
        }else{
            ThePostBody(TextAreaPart.value,TheURLOfTheImage,null,window.localStorage.getItem("TheTextColor"));
        }
        CloseTheFormPart()
        TextAreaPart.value = "";
        TheVideoViewScrean.style.display = "none";
        TheImgViewScrean.style.display = "none";
        TheDrageArea.style.display = "none";
    }
})
// When i click to Follow 
let TheFollowBTn = [...document.getElementsByClassName("FollowBTNInAddFeed")];
TheFollowBTn.forEach(ele => {
    let TheRule = false;
    ele.addEventListener("click",() => {
        if(TheRule === false){
            ele.textContent = "UnFollow"
            TheRule =true;
        }else{
            ele.innerHTML = `<span class="Postive">+</span> FOLLOW`
            TheRule =false;
        }
    })
})
window.onload = () => {
    let TheUserNameLoop = [...document.getElementsByClassName("TheUserNameLoop")];
    let TheJopNameLoop = [...document.getElementsByClassName("TheJopLoop")];
    TheUserNameLoop.forEach((ele) => {
        ele.textContent = user.UserName.UserNameInput;
    })
    TheJopNameLoop.forEach((ele) => {
        ele.textContent = user.OrganizationName;
    })
}
window.addEventListener("resize", () => {
    location.reload();
});
// window.localStorage.clear();
