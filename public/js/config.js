var Config = (function(){
    "use strict";
        
    /* -------- DO NOT BEAUTIFY ---------*/
    var initialContent = [
        {
            name: "index.html",
            fileId: "welcome",
            content: `<html lang="ru">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body style ="margin: 0;padding: 0;">
        <ul style="
    margin: 0;
    padding: 0;
">
       <div class="sketchfab-embed-wrapper"><iframe style="height:100vw;width:100%;" src="https://sketchfab.com/models/b9f6dc4ace8f4edc8e136cb5ec33cc97/embed" frameborder="0" allowvr="" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
</div>
    </ul>
</body> 
    
</html>
`
        },
        {
            name: "style.css",
            fileId: "welcome2",
            content: `body {
    background: lightgray;
    font-family: Arial;
}

h1 {
    color: darkgreen;
}`
        },
        {
            name: "script.js",
            fileId: "welcome3",
            content: `var a = 1;
for (var i=0; i < 10; i++){
    //A meaningless loop!
}`
        },
        {
            name: "image.svg",
            fileId: "welcome4",
            content: `body {
    background: lightgray;
    font-family: Arial;
}

h1 {
    color: darkgreen;
}`
        }
        ,
        {
            name: "sound.mp3",
            fileId: "welcome5",
            content: `body {
    background: lightgray;
    font-family: Arial;
}

h1 {
    color: darkgreen;
}`
        }
    ];
    /*-------------------------------*/
    
    return {
        FileSystem : {
            initialContent : initialContent
        },
        UI : {
            
        },
        Sockets : {
            HOSTNAME : "/", //Points at a Multihack server
            PeerJS : {
                host: "/", //Points at a slightly modified PeerJS server 
                port: 443,
                path: "/server",
                secure: true
            }
        },
    }
}());
