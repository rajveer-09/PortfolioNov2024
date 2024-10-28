// Creating Variable and Assigning Values
var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+916394022382'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>594939453354</label></div> </a> <a href='mailto:rajveersharma1107@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='Arun020/Portfolio'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/45343563635'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Codewithrandom'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/codewith_random/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/company/codewithrandom/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='https://drive.google.com/drive/u/0/folders/1Sxg-dBKUwa35mvCJhub8OW2qL1gxWka1' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Ankit Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//HBTU+East+Campus+F8V4%2B3XW+HBTU+HBIT+East+Campus,+Nawabganj,+Kanpur,+Uttar+Pradesh+208002/@26.4927312,80.3074438,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399c384055555551:0xd01b36f50ed65188!2m2!1d80.3074438!2d26.4927312?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Jag Mandir Place<br>Udaipur, Rajasthan, INDIA 313001</address>";

var contactString = `<div class='social'><a target='_blank' href='tel:+916394022382'><div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+91 6394022382</label></div></a><a href='mailto:rajveersharma1107@gmail.com'><div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt='Gmail'></div></a><a target='_blank' href='https://github.com/rajveer-09'><div class='socialItem'><img class='socialItemI' src='images/github.svg' alt='GitHub'></div></a><a target='_blank' href='https://wa.me/916394022382'><div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt='WhatsApp'></div></a><a target='_blank' href='https://t.me/enigmasphinx09'><div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt='Telegram'></div></a><a target='_blank' href='https://www.instagram.com/rajveer__sharma09'><div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt='Instagram'></div></a><a href='https://www.linkedin.com/in/rajveer-sharma933/' target='_blank' rel='noopener noreferrer'><div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt='LinkedIn'></div></a></div>`;

var resumeString = `<img src='https://drive.google.com/uc?id=1Sxg-dBKUwa35mvCJhub8OW2qL1gxWka1' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Rajveer Sharma Resume.pdf</label></div><a href='assets/Rajveer_Sharma_Resume.pdf' download='Rajveer_Sharma_Resume.pdf'><img class='download' src='images/downloadIcon.svg' alt='Download'></a></div>`;

var addressString = `<div class='mapview'><iframe src='https://www.google.com/maps/dir//HBTU+East+Campus+F8V4%2B3XW+HBTU+HBIT+East+Campus,+Nawabganj,+Kanpur,+Uttar+Pradesh+208002/@26.4927312,80.3074438,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399c384055555551:0xd01b36f50ed65188!2m2!1d80.3074438!2d26.4927312?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D' class='map'></iframe></div><label class='add'><address>'HBTU'<br>Nawabganj, Kanpur, INDIA 208002</address></label>`;

var contactString = `<div class='social'><a target='_blank' href='tel:+916394022382'><div class='socialItem' id='call'><i class='fas fa-phone-alt socialItemI'></i><label class='number'>+91 6394022382</label></div></a><a href='mailto:rajveersharma1107@gmail.com'><div class='socialItem'><i class='fas fa-envelope socialItemI' alt='Gmail'></i></div></a><a target='_blank' href='https://github.com/rajveer-09'><div class='socialItem'><i class='fab fa-github socialItemI' alt='GitHub'></i></div></a><a target='_blank' href='https://wa.me/916394022382'><div class='socialItem'><i class='fab fa-whatsapp socialItemI' alt='WhatsApp'></i></div></a><a target='_blank' href='https://t.me/enigmasphinx09'><div class='socialItem'><i class='fab fa-telegram socialItemI' alt='Telegram'></i></div></a><a target='_blank' href='https://www.instagram.com/rajveer__sharma09'><div class='socialItem'><i class='fab fa-instagram socialItemI' alt='Instagram'></i></div></a><a href='https://www.linkedin.com/in/rajveer-sharma933/' target='_blank' rel='noopener noreferrer'><div class='socialItem'><i class='fab fa-linkedin socialItemI' alt='LinkedIn'></i></div></a></div>`;
var resumeString = `<img src='https://drive.google.com/uc?id=1Sxg-dBKUwa35mvCJhub8OW2qL1gxWka1' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><i class='fas fa-file-pdf'></i><label>Rajveer Sharma Resume.pdf</label></div><a href='assets/Rajveer_Sharma_Resume.pdf' download='Rajveer_Sharma_Resume.pdf'><i class='fas fa-download download' alt='Download'></i></a></div>`;


// Creating Functionality to open and close DP and set last time
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = (x.style.display === 'flex') ? 'none' : 'flex';
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = (x.style.display === 'flex') ? 'none' : 'flex';
}

// Creating Send Message and Clear Message Function
function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value === "") return;

    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;

    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);

    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;

    setTimeout(function() { waitAndResponce(ti); }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Rajveer Sharma</a>.</span><br><br>I'm a pre-final year computer science student at HBTU Kanpur. 👨🏻‍💻📚<br><br>I'm passionate about solving real-world problems with technology and creating innovative solutions.<br><br>I'm currently learning Data Structures and Algorithms in C++ and Web Development.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
    
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
    
        case "resume":
            sendTextMessage(resumeString);
            break;
    
        case "skills":
            sendTextMessage("<span class='sk'>I am a competitive programmer with a keen interest in DSA and web development.<br><br>I can comfortably write code in the following languages:<br><span class='bold'>C++ (Expertise)<br>C<br>Java<br>Python<br>JavaScript<br>HTML/CSS</span><br><br>I've experience with the following technologies/frameworks:<span class='bold'><br>Linux<br>Git<br>GitHub<br>React</span><br><br>Core skills include: Data Structures, Algorithms, Object-Oriented Programming, Web Development.<br><br>Developer tools: Visual Studio Code, IntelliJ, IntelliJ IDEA, Eclipse, Android Studio.<br><br>Favourite IDE: VSCode</span>");
            break;
    
        case "education":
            sendTextMessage("I am pursuing a Bachelor's degree in Technology, specializing in Computer Science and Engineering, from HBTU, Kanpur.<br>Expected Graduation Year: 2026<br><br>I completed my Intermediate education at Prisha International, Gorakhpur, India.<br>Passing Year: 2021");
            break;
    
        case "address":
            sendTextMessage(addressString);
            break;
    
        case "clear":
            clearChat();
            break;
    
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS, and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/rajveer-sharma933/'><span class='bold'>Rajveer Sharma</a> with ❤️</span>");
            break;
    
        case "contact":
            sendTextMessage(contactString);
            break;
    
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/rajveer-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
    
        case "thanks":
            sendTextMessage("Thank you for your interest! If you have any more questions or need assistance, feel free to ask. 😊");
            break;
    
        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch you...😢<br>Send <span class='bold'>'help'</span> to know more about me.<br>Or tap <span class='bold'>'intro'</span> to restart our conversation!");
            }, 1000);
    }
    
}

// Function to send message text
function sendTextMessage(message) {
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");

    greendiv.innerHTML = message;
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();

    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);

    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;

    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

// Function to clear chat messages
function clearChat() {
    var listUL = document.getElementById("listUL");
    while (listUL.firstChild) {
        listUL.removeChild(listUL.firstChild);
    }
}

// Function to play sound
function playSound() {
    audio.play();
}

// Function to change main background color based on screen size
function adjustBackgroundColor() {
    var width = window.innerWidth;
    var mainDiv = document.getElementById("main");
    
    if (width > 768) {
        mainDiv.style.backgroundColor = "#f0f0f0"; // Light background for larger screens
    } else {
        mainDiv.style.backgroundColor = "#ffffff"; // White background for smaller screens
    }
}

// Adding event listeners for window resize
window.addEventListener("resize", adjustBackgroundColor);

// Initial adjustment on page load
adjustBackgroundColor();

// Initialize the start function when the document is ready
document.addEventListener("DOMContentLoaded", startFunction);
