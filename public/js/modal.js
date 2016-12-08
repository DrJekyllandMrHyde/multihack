/* 

modal.js

A custom modal/dialog module

Thomas Mullen 2016

*/
var Modal = (function (Microstache) {
    'use strict';

    var my = {

            /* Dictionary mapping names to mustache templates */
            templates: {},

            /* 
            Specifies a callback for the modal
            Callback will receive text of button clicked, and an array of any form inputs
            */
            next: function (modalName, callback) {
                nextFunction[modalName] = callback;
            },

            /* Opens a modal */
            open: function (templateName, data) {
                if (!data) {
                    data = {};
                }
                if (!my.templates[templateName]) {
                    window.console.error("No template with name " + templateName);
                }
                modalElement.innerHTML = Microstache.template(my.templates[templateName], data);
                modalElement.className = "modal text-center theme-dark-border " + templateName;
                modalElement.style.display = 'block';
                blockingElement.style.display = 'block';
                state = templateName;

                var primaryInput = document.querySelector('.modal-input');
                if (primaryInput && !inIframe()) {
                    primaryInput.focus();
                }
            },

            /* Closes any modal */
            close: function () {
                modalElement.style.display = 'none';
                blockingElement.style.display = 'none';
                state = 'closed';

            }


        };
    
    var modalElement = document.getElementById("modal"),
        blockingElement = document.getElementById("blocking-overlay"),
        state = 'closed',
        nextFunction = {};

    function inIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    document.querySelector('#modal').addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'button') {
            var clicked = event.target.dataset.value,
                input = Array.prototype.slice.call(document.querySelectorAll('.modal-input')).map(
                    function (e) {
                        return e.value;
                    });
            if (clicked === 'close') {
                Modal.close();
            } else {
                if (nextFunction[state]) {
                    nextFunction[state](clicked, input);
                } else {
                    window.console.error("Modal '" + state + "' has no next function!");
                }

            }
        }
    });
    document.querySelector('body').addEventListener('keyup', function (event) {
        if (event.keyCode === 13 && state !== 'closed') {
            var input = Array.prototype.slice.call(document.querySelectorAll('.modal-input')).map(function (e) {
                return e.value;
            });
            if (typeof nextFunction[state] === 'function') {
                nextFunction[state]('submit', input);
            } else {
                my.close();
            }
        }
    });
    
    
    return my;
}(Microstache));

/* Modal definitions */
Modal.templates['intro'] = `<h1></h1>
    <h3></h3>
    <p>ник</p>
    <br>
    <input class="modal-input" type="text" placeholder="...">
    <button data-value="submit" class="go-button"> ✔</button>
    <p>{{flash}}</p>
`;

Modal.templates['welcome'] = `<h1></h1>
    <!--<h3>Great!</h3>
    <p>You are now ready to use MultiHack.</p>
    <p>MultiHack uses websocket technology to connect coders of all skill level, from around the world.</p>
    <br>-->
    <button data-value="close" class="no-button"> ✔</button>
    <!--<button data-value="submit" class="go-button">Tell Me More</button>-->`;

Modal.next('welcome', function (button, input) {
    Modal.open('welcome-2');
});

Modal.templates['welcome-2'] = `<h1>Welcome To MultiHack</h1>
    <h3>How To Collaborate</h3>
    <p>To join another coder, simply click their avatar in the "Online" panel (bottom left).</p>
    <p>You will be given the option to request to join their room. If they accept, you can join them on their project.</p>
    <br>
    <button data-value="close" class="no-button">I'll Figure It Out</button>
    <button data-value="submit" class="go-button">Tell Me More</button>`;

Modal.next('welcome-2', function (button, input) {
    Modal.open('welcome-3');
});

Modal.templates['welcome-3'] = `<h1>Welcome To MultiHack</h1>
    <h3>How To Build</h3>
    <p>MultiHack syncs the code of everyone in your room, letting you pair-program from anywhere.</p>
    <p>You can import a repo from GitHub or upload files and ZIPs from your computer.</p>
    <br>
    <button data-value="close" class="no-button">I'll Figure It Out</button>
    <button data-value="submit" class="go-button">Tell Me More</button>`;

Modal.next('welcome-3', function (button, input) {
    Modal.open('welcome-4');
});

Modal.templates['welcome-4'] = `<h1>Welcome To MultiHack</h1>
    <h3>How To Deploy</h3>
    <p>MultiHack was built with web developers in mind, so it has a virtual Node server built right in! Just click "Deploy" (top right) to instantly host the project from your browser.</p>
    <p>Everything will be served via an encrypted P2P channel. To learn how, check out <a href="https://github.com/RationalCoding/HyperHost" target="_blank">HyperHost</a>.</p>
    <br>
    <button data-value="close" class="no-button">I'll Figure It Out</button>
    <button data-value="submit" class="go-button">Tell Me More</button>`;

Modal.next('welcome-4', function (button, input) {
    Modal.open('welcome-5');
});

Modal.templates['welcome-5'] = `<h1>Welcome To MultiHack</h1>
    <h3>How To Connect</h3>
    <p>Sometimes code and a chatroom aren't enough to communicate. That's why MultiHack has live voice chat built right in!</p>
    <p>Use the microphone button at the top right to join your room's call.</p>
    <br>
    <button data-value="close" class="no-button">I'll Figure It Out</button>
    <button data-value="submit" class="go-button">Tell Me More</button>`;

Modal.next('welcome-5', function (button, input) {
    Modal.open('welcome-6');
});

Modal.templates['welcome-6'] = `<h1>Welcome To MultiHack</h1>
    <h3>How To Contribute</h3>
    <p>MultiHack is 100% open source! It gets better every day thanks to the help of developers like you. Check out the source on <a href="https://github.com/RationalCoding/MultiHack">GitHub</a>.</p>
    <p>Bug reports and PRs are always welcome, and Native extensions are on their way!</p>
    <br>
    <button data-value="close" class="no-button">I'll Figure It Out</button>
    <button data-value="submit" class="go-button">Tell Me More</button>`;

Modal.next('welcome-6', function (button, input) {
    Modal.open('welcome-7');
});

Modal.templates['welcome-7'] = `<h1>Welcome To MultiHack</h1>
    <h3>Build Something Awesome</h3>
    <p>That's it! Go out there and build something awesome!
    <br><br>
    <button data-value="submit" class="go-button">Start My Journey</button>`;

Modal.next('welcome-7', function (button, input) {
    Modal.close();
});


Modal.templates["requestInvite"] = `<h1>Request to Join {{name}}'s Room?</h1>
<p>You will get a notification if they accept.</p>
    <button data-value="submit" class="go-button">Request Invite</button>
    <button data-value="close" class="no-button">Nevermind</button>`;

Modal.templates["createFile"] = `<h1>Create New...</h1>
    <input class="modal-input" placeholder="Name" type="text">
    <br>
    <button data-value="file" class="go-button">File</button>
    <button data-value="folder" class="go-button">Folder</button>
    <input id="fileUpload" class="go-button" type="file" multiple />
    <button data-value="github" class="go-button">GitHub</button>
    <br>
<button data-value="close" class="no-button">Cancel</button>
<p>{{flash}}</p>`;


Modal.templates["confirmDelete"] = `<h1>Are you sure you want to delete \"{{name}}\"?</h1>
<p>It will be deleted for everyone in the room!</p>
<button data-value="yes" class="go-button">Delete</button>
<button data-value="no" class="no-button">Cancel</button>
`;

Modal.templates["confirmFolderDelete"] = `<h1>Are you sure you want to delete the folder<br>"{{name}}"</h1>
<p>All of it's contents will be deleted. You cannot undo this.</p>
<p>It will be deleted for everyone in the room!</p>
<button data-value="yes" class="go-button">Delete</button>
<button data-value="no" class="no-button">Cancel</button>
`;


Modal.templates["confirmKick"] = `<h1>Are you sure you want to kick \"{{name}}\"?</h1>
<p>They will not be allowed to rejoin!</p>
<button data-value="accept" class="go-button">Kick</button>
<button data-value="close" class="no-button">Cancel</button>
`;


Modal.templates["request-join"] = `
<h1>{{name}} would like to join your room</h1>
<p>Allow them to view and edit your code?</p>
<button data-value="accept" class="go-button">Accept</button>
<button data-value="close" class="no-button">Decline</button>
`;

Modal.templates['join-response'] = `
<h1>{{name}} accepted your join request!</h1>
<p>You can now view and edit their code.</p>
<button data-value="close" class="go-button">Ok</button>
`;

Modal.templates['kick-alert'] = `
<h1>You have been kicked from the room!</h1>
<p>You will be returned to your original room.</p>
<button data-value="close" class="go-button">Ok</button>
`

Modal.templates['general-alert'] = `
<h1>{{title}}</h1>
<p>{{msg}}</p>
<button data-value="close" class="go-button">Ok</button>
`
Modal.next('general-alert', function () {});


Modal.templates['url'] = `
<h1>Deployed!</h1>
<p>Your site is ready at...</p>
<p class="red"><a target="_blank" href="{{url}}">{{url}}</a></p>
<button data-value="close" class="go-button">Ok</button>
`;
Modal.next('url', function () {});


Modal.templates['github'] = `
<h1>GitHub Repo</h1>
<input class="modal-input long" type="text" placeholder="https://github.com/username/repo">
<br><br>
<input class="modal-input" type="text" placeholder="branch">
<br><br>
<button data-value="load" class="go-button">Load</button>
<button data-value="close" class="no-button">Cancel</button>
`;
Modal.next('url', function () {});



Modal.templates['themes'] = `
<h1>Choose a Theme</h1>
<button style="width:95px" data-value="material" class="go-button">Ocean</button>
<button style="width:95px" data-value="atom" class="go-button">Atom</button>
<br>
<button style="width:95px" data-value="codepen" class="go-button">CodePen</button>
<button style="width:95px" data-value="brackets" class="go-button">Brackets</button>
<br>
<button data-value="close" class="no-button">Close</button>
`;
Modal.next('themes', function () {});


Modal.templates['save'] = `
<h1>Save Your Project</h1>
<p>Download project as ZIP archive. (recommended)</p>
<button  data-value="zip" class="go-button">Save As ZIP</button>
<br>
<p>Save project to browser storage. (short-term)</p>
<button data-value="local" class="go-button">Save Locally</button>
<br><br>
<button data-value="close" class="no-button">Cancel</button>
`;
Modal.next('save', function () {});

Modal.templates['save-confirm'] = `
<h1>Saved Locally</h1>
<p>You project has been saved locally.</p>
<p>Your browser may clear this data at ANY TIME.</p>
<br>
<button data-value="close" class="no-button">Close</button>
`
Modal.next('save-confirm', function () {});


Modal.templates['save-fail'] = `
<h1>Save Failed</h1>
<p>Failed to save project locally.</p>
<p>Your browser may not support this feature, or your project is too large.</p>
<br>
<button data-value="close" class="no-button">Close</button>
`
Modal.next('save-fail', function () {});
