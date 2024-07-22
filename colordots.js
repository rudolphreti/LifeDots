colordots = () => {
    var counter = 0;
    var array = '';
    var dotsEl = document.getElementById('dots');
    var patt = /\./g;
    var onlyDots = dotsEl.innerHTML.match(patt);
    if (onlyDots !== null) {
        onlyDots.forEach((el) => {
            fillRed = () => {
                array += `<span style='color: red'>${el} </span>`;
                counter = 1;
            };
            fillYellow = () => {
                array += `<span style='color: yellow'>${el} </span>`;
                counter = 2;
            };
            fillGreen = () => {
                array += `<span style='color: green'>${el} </span>`;
                counter = 3;
            };
            fillBlue = () => {
                array += `<span style='color: blue'>${el} </span>`;
                counter = 0;
            };

            switch (counter) {
                case 0:
                    fillRed();
                    break;
                case 1:
                    fillYellow();
                    break;
                case 2:
                    fillGreen();
                    break;
                case 3:
                    fillBlue();
                    break;
            }
        });
    }

    dotsEl.innerHTML = array;
};