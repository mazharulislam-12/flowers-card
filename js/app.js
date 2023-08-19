function text1() {
//   document.getElementById("info1").innerText = "hello bangladesh";

    setInnerText('info1', 'bangladesh');
    const sum = toNumber('input1');
    console.log(sum);

}
function text2() {
//   document.getElementById("info2").innerText = "Hello js";
}
function text3() {
//   document.getElementById("info3").innerText = "I love js";
   setInnerText('info3', 'js bangladesh');
}

function clickMe() {
//   document.getElementById("clickP").innerText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo maxime nihil quasi minima porro iusto dolore autem corrupti. Omnis laboriosam dolores quibusdam! Debitis deleniti repellendus pariatur saepe necessitatibus enim.";

    setInnerText('clickP', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo maxime nihil quasi minima porro iusto dolore autem');

}

function setInnerText(id, text) {
    document.getElementById(id).innerText = text;
}

function toNumber(id) {
    const result = document.getElementById(id).value;
    return parseInt(result);
}
