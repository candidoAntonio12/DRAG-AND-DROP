        let dragzone = document.getElementById("dragzone");
        let dropzone = document.getElementById("dropzone");
        dragzone.addEventListener("dragstart",  (e)=>
        {
            console.log("teste 1\n");
            e.dataTransfer.setData("text/plain", e.target.id);
            e.target.style.opacity = 0.5;
        });
        dragzone.addEventListener("dragend", (e) =>
        {
            e.target.style.opacity = 1;
        });

        dropzone.addEventListener("dragover", (e)=>
        {
            e.preventDefault();
            console.log("teste 2\n");
        });
        dropzone.addEventListener("drop", (e) =>
        {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            console.log(id);
            const element = document.getElementById(id)
            dropzone.appendChild(element);   
        });
        let dropfile = document.getElementById("drop2");
        dropfile.addEventListener("dragover", (e) => 
        {
            e.preventDefault();
        });
        dropfile.addEventListener("dragover", (e) => 
        {
            e.preventDefault();
        })
         dropfile.addEventListener("drop", (e) => 
        {
            e.preventDefault();
            const data = e.dataTransfer.files[0];
            const url = URL.createObjectURL(data);
            const file = document.querySelector(".file");
            file.src = url;

        })