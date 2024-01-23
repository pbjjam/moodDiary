//Jeong Hyo Kang - Mood Diary
window.addEventListener('load', function() {
    let show_button = document.querySelector('#showButton');
    let date = document.querySelector('#date');
    let mood_menu = document.querySelector('#moodMenu');
    let happy = document.querySelector('#happyFace');
    let smile = document.querySelector('#smileFace');
    let relaxed = document.querySelector('#relaxedFace');
    let ok = document.querySelector('#okFace');
    let tired = document.querySelector('#tiredFace');
    let sad = document.querySelector('#sadFace');
    let cry = document.querySelector('#cryFace');
    let anxious = document.querySelector('#anxiousFace');
    let angry = document.querySelector('#angryFace');
    let squiggle = document.querySelector('#squiggleFace');
    let reason_box = document.querySelector('#reasonBox');
    let date_paragraph = document.querySelector('#moodDate');
    let outlook_paragraph = document.querySelector('#outlook');
    let reason_paragraph = document.querySelector('#reasonConsole');
    let advice_paragraph = document.querySelector('#advice');

    show_button.addEventListener('click', function() {
        if (happy.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/happy.jpg" height="20">';
            outlook_paragraph.style.color = "blueviolet";
        }
        if (smile.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/smile.jpg" height="20">';
            outlook_paragraph.style.color = "green";
        }
        if (relaxed.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/relaxed.jpg" height="20">';
            outlook_paragraph.style.color = "cadetblue";
        }
        if (ok.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/ok.jpg" height="20">';
            outlook_paragraph.style.color = "dodgerblue";
        }
        if (tired.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/tired.jpg" height="20">';
            outlook_paragraph.style.color = "darkgray";
        }
        if (sad.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/sad.jpg" height="20">';
            outlook_paragraph.style.color = "blue";
        }
        if (cry.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/cry.jpg" height="20">';
            outlook_paragraph.style.color = "darkblue";
        }
        if (anxious.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/anxious.jpg" height="20">';
            outlook_paragraph.style.color = "black";
        }
        if (angry.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/angry.jpg" height="20">';
            outlook_paragraph.style.color = "red";
        }
        if (squiggle.checked) {
            date_paragraph.innerHTML = date.value + " " + '<img src="Faces/squiggle.jpg" height="20">';
            outlook_paragraph.style.color = "darkred";
        }

        if (reason_box.value == "") {
            outlook_paragraph.innerHTML = "I feel " + mood_menu.value + " today.";
        }
            else {
                outlook_paragraph.innerHTML = "I feel " + mood_menu.value + " today because " + reason_box.value + ".";
            }
        
        if (mood_menu.value === "ecstatic") {
            advice_paragraph.innerHTML = "I should tell a loved one about my excitement!";
        }
        if (mood_menu.value === "happy") {
            advice_paragraph.innerHTML = "Be mindful of my gratefulness.";
        }
        if (mood_menu.value === "relaxed") {
            advice_paragraph.innerHTML = "chillax while I can~";
        }
        if (mood_menu.value === "okay") {
            advice_paragraph.innerHTML = "What is something I can do to better my day?";
        }
        if (mood_menu.value === "bored") {
            advice_paragraph.innerHTML = "Hit up a friend I haven't talked to in a while." + '<br>' + "Or try to learn a new skill!";
        }
        if (mood_menu.value === "tired") {
            advice_paragraph.innerHTML = "Take a brain break and stretch.";
        }
        if (mood_menu.value === "sad") {
            advice_paragraph.innerHTML = "Take a walk and breathe in some fresh air." + '<br>' + "Maybe I will see some cute animals!";
        }
        if (mood_menu.value === "depressed") {
            advice_paragraph.innerHTML = "Talk to someone. Even better if I have access to professional help!";
        }
        if (mood_menu.value === "anxious") {
            advice_paragraph.innerHTML = "Count to 20 and take some deep breaths.";
        }
        if (mood_menu.value === "angry") {
            advice_paragraph.innerHTML = "Find a safe space to relax.";
        }
        if (mood_menu.value === "frustrated") {
            advice_paragraph.innerHTML = "Take a break and squeeze something.";
        }
        if (mood_menu.value === "out of control") {
            advice_paragraph.innerHTML = "Stop what I am doing and ask for help.";
        }

        if (reason_box.value == 'idk') {
            reason_paragraph.innerHTML = "I should talk it out to better understand my thoughts and emotions.";
        }
        if (reason_box.value == 'nothing to do') {
            reason_paragraph.innerHTML = "I should think about my life goals and figure out what steps I need to take to accomplish them.";
        }
        if (reason_box.value == 'work') {
            reason_paragraph.innerHTML = "Remember to practice self care.";
        }
        if (reason_box.value == 'my dog died') {
            reason_paragraph.innerHTML = "RIP. May they get everything they want in doggy heaven.";
        }
        if (reason_box.value == 'depression') {
            reason_paragraph.innerHTML = "Try calling 1-800-442-4673";
        }

    });
});