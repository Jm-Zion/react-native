class e extends HTMLElement{wrapper=null;async render(){}wasShown(){}willHide(){}}var n=Object.freeze({__proto__:null,WrappableComponent:e,legacyWrapper:function(e,n){return new class extends e{#e;constructor(...e){super(!0),this.#e=n,this.#e.wrapper=this,this.#e.render(),this.contentElement.appendChild(this.#e)}wasShown(){this.#e.wasShown(),this.#e.render()}willHide(){this.#e.willHide()}async doUpdate(){await this.#e.render()}getComponent(){return this.#e}}}});export{n as LegacyWrapper};