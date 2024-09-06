const body = document.body;

const setColor = (name) => {
    body.style.backgroundColor = name;
    body.className = name;
}

const randomColor = () => {
     const [red, green, blue] = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
     const color = `rgb(${red}, ${green}, ${blue})`;
     body.style.backgroundColor = color;
     body.className= '';
};