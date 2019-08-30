import React, {Component} from "react"


class Knowledge extends Component{
    render() {
        return(
            <div className="infoContainer">
                <div className="info infoL">
                    <svg className={"infoIcon"} viewBox="0 -25 424 424"><path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"/><path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"/><path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"/><path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"/><path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"/><path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/><path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"/><path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/></svg>

                    <h1> Developer </h1>
                    <p>I build systems with a <br/>touch of design!</p>
                    <p className={"infoSecond"}>Languages i know:</p>
                    <p>Java, Python, Haskell</p>
                    <p className={"infoSecond"}>Tools:</p>
                    <ul className="infoList">
                        <li className="infoListItems">IntelliJ</li>
                        <li className="infoListItems">Atom</li>
                        <li className="infoListItems">Git</li>
                        <li className="infoListItems">Sublime Text</li>
                    </ul>
                </div>
                <div className="info infoR">
                    <svg className={"infoIcon"} viewBox="0 0 496 496"><path d="m496 248c0-34.023438-16.863281-65.902344-44.496094-85.246094 7.871094-12.386718 12.496094-27.027344 12.496094-42.753906 0-44.113281-35.886719-80-80-80-2.40625 0-4.847656.128906-7.375.375-11.984375-24.382812-37.191406-40.375-64.625-40.375-39.703125 0-72 32.304688-72 72v40h-16v-32h-16v32h-32v-32h-16v32h-32v-32h-16v32h-32v-32h-16v32h-3.3125l-28.6875 28.6875v3.3125h-32v16h32v32h-32v16h32v32h-32v16h32v32h-32v16h32v32h-32v16h32v32h32v32h16v-32h32v32h16v-32h32v32h16v-32h32v32h16v-32h16v40c0 39.703125 32.296875 72 72 72 28.863281 0 53.734375-17.105469 65.214844-41.679688l.386718-.082031c40.789063-8.285156 70.398438-44.550781 70.398438-86.238281 0-10.078125-1.710938-19.945312-5.113281-29.40625 32.503906-18.304688 53.113281-53.082031 53.113281-90.59375zm-196.945312-22.921875c.449218 1 .839843 2.011719 1.242187 3.035156l1.351563 3.527344 18.351562 6.128906v20.46875l-18.367188 6.121094-1.34375 3.542969c-.394531 1.035156-.800781 2.035156-1.234374 3.027344l-1.550782 3.460937 8.648438 17.296875-14.472656 14.472656-17.296876-8.648437-3.460937 1.550781c-.992187.441406-1.992187.839844-3.027344 1.234375l-3.542969 1.34375-6.121093 18.359375h-20.46875l-6.121094-18.367188-3.542969-1.34375c-1.035156-.394531-2.035156-.800781-3.027344-1.234374l-3.460937-1.550782-17.296875 8.648438-14.472656-14.472656 8.648437-17.296876-1.550781-3.460937c-.441406-.992187-.839844-1.992187-1.234375-3.027344l-1.34375-3.542969-18.359375-6.121093v-20.46875l18.351562-6.121094 1.351563-3.527344c.402344-1.023437.800781-2.042969 1.242187-3.035156l1.550782-3.460937-8.648438-17.296876 14.472656-14.472656 17.296876 8.648438 3.460937-1.550782c.984375-.441406 1.984375-.839843 3-1.226562l3.5625-1.34375 6.128906-18.375h20.46875l6.128907 18.382812 3.5625 1.34375c1.015624.386719 2.015624.785157 3 1.226563l3.460937 1.550781 17.296875-8.648437 14.472656 14.472656-8.648437 17.296875zm-251.054688 142.921875v-220.6875l19.3125-19.3125h172.6875v32h-13.769531l-6.542969 19.648438-18.519531-9.265626-30.785157 30.785157 9.257813 18.511719-19.640625 6.550781v43.53125l19.648438 6.542969-9.265626 18.519531 30.785157 30.785156 18.519531-9.265625 6.542969 19.65625h13.769531v32zm381.328125-40.40625-7.167969 3.367188 3.296875 7.199218c4.34375 9.488282 6.542969 19.527344 6.542969 29.839844 0 31.113281-20.183594 58.472656-49.121094 68.207031.6875-3.976562 1.121094-8.039062 1.121094-12.207031 0-12.65625-3.335938-25.105469-9.640625-36.007812l-13.839844 8.015624c4.894531 8.472657 7.480469 18.152344 7.480469 27.992188 0 30.871094-25.128906 56-56 56s-56-25.128906-56-56v-88h13.769531l6.542969-19.648438 18.519531 9.265626 30.785157-30.785157-9.265626-18.519531 19.648438-6.542969v-43.53125l-19.640625-6.550781 9.257813-18.511719-30.785157-30.785156-18.519531 9.265625-6.542969-19.65625h-13.769531v-88c0-30.878906 25.128906-56 56-56 22.992188 0 43.992188 14.464844 52.246094 35.992188l2.355468 6.144531 6.476563-1.121094c3.929687-.6875 7.496094-1.015625 10.921875-1.015625 35.289062 0 64 28.710938 64 64s-28.710938 64-64 64v16c22.574219 0 42.953125-9.441406 57.511719-24.527344 23.824219 16.320313 38.488281 43.4375 38.488281 72.527344 0 33.878906-19.886719 65.128906-50.671875 79.59375zm0 0"/><path d="m272 72h16c0-13.230469 10.769531-24 24-24v-16c-22.054688 0-40 17.945312-40 40zm0 0"/><path d="m416 120h16c0-26.472656-21.527344-48-48-48v16c17.648438 0 32 14.351562 32 32zm0 0"/><path d="m397.65625 243.710938c4.527344 4.535156 7.03125 10.5625 7.03125 16.976562 0 6.417969-2.496094 12.441406-7.03125 16.96875-9.0625 9.0625-24.871094 9.0625-33.9375 0l-11.3125 11.3125c7.546875 7.550781 17.59375 11.71875 28.28125 11.71875s20.738281-4.167969 28.28125-11.71875c7.550781-7.542969 11.71875-17.59375 11.71875-28.28125s-4.167969-20.726562-11.71875-28.289062zm0 0"/><path d="m288 424h-16c0 22.054688 17.945312 40 40 40v-16c-13.230469 0-24-10.769531-24-24zm0 0"/><path d="m320 88v16c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24v16c22.054688 0 40-17.945312 40-40s-17.945312-40-40-40zm0 0"/><path d="m248 208c-22.054688 0-40 17.945312-40 40s17.945312 40 40 40 40-17.945312 40-40-17.945312-40-40-40zm0 64c-13.230469 0-24-10.769531-24-24s10.769531-24 24-24 24 10.769531 24 24-10.769531 24-24 24zm0 0"/><path d="m128 144h80v16h-80zm0 0"/><path d="m80 208h-16v144h144v-16h-128zm0 0"/><path d="m88 192c13.230469 0 24-10.769531 24-24s-10.769531-24-24-24-24 10.769531-24 24 10.769531 24 24 24zm0-32c4.414062 0 8 3.59375 8 8s-3.585938 8-8 8-8-3.59375-8-8 3.585938-8 8-8zm0 0"/></svg>
                    <h1> Machine learning</h1>
                    <p>Analyzing data with the methods<br/>of using algorithms!</p>
                    <p className={"infoSecond"}> Languages i use:</p>
                    <p>Python, Javascript, Databases</p>
                    <p className={"infoSecond"}>Tools:</p>
                    <ul className="infoList">
                        <li className="infoListItems">Tensorflow</li>
                        <li className="infoListItems">PyTorch</li>
                        <li className="infoListItems">Tweepy</li>
                        <li className="infoListItems">Jupyter notebook</li>
                        <li className="infoListItems">Kaggle</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Knowledge;