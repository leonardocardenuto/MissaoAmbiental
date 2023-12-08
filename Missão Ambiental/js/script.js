let img = document.getElementById("image-switch");
let imgs = ["./images/imgPessoal.png", "./images/imgProjetos.jpeg","./images/imgCaptacao.jpeg"];
let currentIndex = 0;

setInterval(function () {
  img.src = imgs[currentIndex];
  currentIndex = (currentIndex + 1) % imgs.length;
}, 8000);

// var buttonClicked = false;

        function openPopup() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('popup').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('popup').style.display = 'none';
            buttonClicked = true;
            document.getElementById('termosCheckbox').disabled = !buttonClicked;
        }

        // function checkScroll() {
        //     var scrollableBox = document.querySelector('.scrollable-box');
        //     var closeButton = document.getElementById('fecharButton');
        //     if (scrollableBox.scrollHeight - scrollableBox.scrollTop === scrollableBox.clientHeight) {
        //         closeButton.disabled = false;
        //     } else {
        //         closeButton.disabled = true;
        //     }
        // }
