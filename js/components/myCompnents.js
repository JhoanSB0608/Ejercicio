import { getalldata } from "../modules/data.js";
class myElements extends HTMLElement {
    myclick
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="css/mycomponents/myCompnents.css">
            <div class="container">
                <button type="button" id="click">Click</button>
                <button type="button">Click 2</button>
            </div>
        `;
        this.myclick = this.shadowRoot.querySelector("#click");
    }
   
    connectedCallback(){
        this.myclick.addEventListener("click", this.obtenerDatos)
        this.myclick.addEventListener("mouseover", this.obtenerDatos)
    }
    async obtenerDatos(e){
        alert(await getalldata())
    }
}
class H7 extends HTMLElement {
    myH8
    dataLaunches
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /*html*/`<div>Hola soy h7</div>`;
        this.myH8 = document.querySelector("my-h8")
    }

    async connectedCallback() {
        await this.getAlllaunches();
        let [a] = this.dataLaunches;
        this.myH8.setAttribute("launchesone", a.rocket)
    }
    async getAlllaunches(){
        let res = await fetch("https://api.spacexdata.com/v4/launches");
        this.dataLaunches = await res.json();
    }
}
class H8 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /*html*/`<div>Hola soy h8</div>`;
    }
    static get observedAttributes() {
        return ['launchesone'];
    }
    async attributeChangedCallback(name, oldValue, newValue) {
        console.log(await this.getRocket(newValue));
    }
    async getRocket(id){
        let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
        return await res.json();
    }
}


customElements.define("my-h7", H7);
customElements.define("my-h8", H8);
customElements.define("my-elements", myElements)