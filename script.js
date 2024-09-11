

const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");
// const addbtn = document.querySelector("#addbtn");

addbtn.addEventListener("click", addnote);

function addnote(){

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
    <textarea></textarea>
    `;

    const trashIcon = note.querySelector(".trash");
    const saveIcon = note.querySelector(".save");
    const textarea = note.querySelector("textarea");

    trashIcon.addEventListener("click",()=>{

        note.remove();
        savenote();
    });
    saveIcon.addEventListener("click",savenote);
    textarea.addEventListener("input",savenote);

    main.appendChild(note);
}


function savenote(){

    const notes = document.querySelectorAll(".note textarea");
    const data= [];

    for(let i=0;i<notes.length;i++){
        data.push(notes[i].value);
    }
    if(data.length===0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}


function loadnote(){

    const lessnotes = JSON.parse(localStorage.getItem("notes"));

    if(lessnotes !== null){
        lessnotes.forEach(notetext => {
            addnote();

            const notes = document.querySelectorAll(".note textarea");
            const lastnote = notes[notes.length -1];
            lastnote.value = notetext;
        });
    }
    else{
        addnote();
    }
}


loadnote();




















