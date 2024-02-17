
        let indexText = 0;
        let textLetter = document.querySelector('.textLetter h2');
        let textLetterH2 = "";
        let timoutTextLetter;

        function textCharLetter(){
            if (indexText < textLetterH2.length) {
                textLetter.textContent += textLetterH2[indexText];
                indexText++;
                setTimeout(indexText, 100);
            }
            else{
                clearInterval(timoutTextLetter);
                setTimeout(()=>{
                    funcTimeoutLetterContent()
                },500)
            }
        }
        function funcTimeoutLetter(){
            indexText = 0; 
            textLetter.textContent = ''; 
            clearInterval(timoutTextLetter);
            timoutTextLetter =  setInterval(()=>{
                    textCharLetter();
                }, 200)
        }
        let indexTextContent = 0;
        let textLetterContent = document.querySelector('.contentLetter');
        let subcontent = document.querySelector('.subcontent');
        let textLetterP = "";
        let text_lixi='';
        let timoutTextLetterContent;
        function textCharLetterContent(){
            if (indexTextContent < textLetterP.length) {
                textLetterContent.textContent += textLetterP[indexTextContent];
                indexTextContent++;
                setTimeout(indexTextContent, 100);
            }
            else{
                clearInterval(timoutTextLetterContent)
                subcontent.textContent = text_lixi;
            }
        }
        function funcTimeoutLetterContent(){
            indexTextContent = 0; 
            textLetterContent.textContent = ''; 
            clearInterval(timoutTextLetterContent);
            timoutTextLetterContent =  setInterval(()=>{
                textCharLetterContent();
                }, 100)
        }
        
        const close_letter = document.querySelector('.close_letter');
        const letter_content = document.querySelector(".wrapperLetterForm");
        const imagePaths = [
            'root/img/anhlixi.jpg',
            'root/img/anhlixi2.jpg',
            'root/img/anhlixi3.jpg',
            'root/img/anhlixi4.jpg',
            'root/img/anhlixi5.jpg',
            'root/img/anhlixi6.jpg',
            'root/img/anhlixi7.jpg',
            'root/img/anhlixi8.jpg',
            'root/img/anhlixi9.png',
            'root/img/anhlixi10.png',
            ];
        
        close_letter.addEventListener("click",()=>{
            textLetterContent.textContent='';
            subcontent.textContent='';
            letter_content.classList.remove("open_letter");
        })
        document.querySelector(".buttonLove").addEventListener("click", function(){
        let timeout = setInterval(()=>{
            var letters = document.createElement("div");
            letters.className = "letters";
            const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
            letters.innerHTML = `<img src="${randomImagePath}" alt="">`;
            document.querySelector("body").prepend(letters)
            let left = Math.floor(Math.random() * 100);
            let rotate = Math.floor(Math.random() * 360);
            letters.style.left = left + "%";
            letters.style.top = "-22%";
            letters.style.transform = `rotate(${rotate}deg)`;
            setTimeout(()=>{
                letters.style.top = "100%";
            },1000)
            setTimeout(()=>{
                letters.remove()
            },11000)
            letters.addEventListener("click", function () {
                const clickedImage = letters.querySelector("img");
                const srcPath = clickedImage ? clickedImage.getAttribute("src") : null;
                const imgElement = document.getElementById("anhBaoLiXi");
                imgElement.src = srcPath;
                //console.log(srcPath);
                fetch('co_so_du_lieu.php')
                .then(response => response.json())
                .then(data => {
                    var order = data.id;
                    var content = data.content;
                    var status = Number(data.status);
                    if(status === 1)
                    {
                        text_lixi = "Chúc mừng năm mới";
                    }
                    else{
                        text_lixi = "Lì xì số: "+order;
                    }
                    // console.log(order);
                    // console.log(content);
                    textLetterH2 = "Bức Thư Số: "+order;
                    textLetterP = content;
                    return order;
                })
                .then( order =>{
                    var url = 'update.php?id='+order;
                    fetch(url)
                    .then(response => {
                        console.log(response);
                    })
                })
                clearInterval(timeout);
                letter_content.classList.add("open_letter");
                funcTimeoutLetter();
                });
            }, 500)
        })
        