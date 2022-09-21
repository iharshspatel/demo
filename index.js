let container = document.getElementById("container");
let str = ''
data.forEach((item) => {
    str = str +  `
    <div class="card">
    <h1>${item.title}</h1>
    <h1>${item.description}</h1>
    <img src='${item.link}' alt="this is image"/>
    </div>
    `
    container.innerHTML = str
});