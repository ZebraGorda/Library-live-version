class MyHeader extends HTMLElement {
    ConnectedCallback() {
        this.innerHTML= `
        <div class="grid-y grid-frame">

  <div class="cell shrink header">
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Library logo</li>
         
        </ul>
          </div>
          <div class="top-bar">
            <ul class="menu">
              <li>
                  <input type="search" 
                         placeholder="Search for books">
              </li>
              <li>
                  <button type="button" 
                          class="button"><i class="fi-magnifying-glass"></i>
                  </button>
              </li>
          </ul>
          </div>
        <div class="top-bar-right">
          <ul class="menu">
            <li><button class="button">Sign in</button></li>
            <li><button class="button">Sign Up</button></li>
        </ul>
          </div>
  </div>
  </div>

  <div class="menu-centered">
    <ul class="menu">
      <li><a href="#"><span>Home</span></a></li>
      <li><a href="#"><span>Collections</span></a></li>
      <li><a href="#"> <span>Subjets</span></a></li>
      <li><a href="#"> <span>Artist</span></a></li>
    </ul>
    </div>
    
  <div class="cell auto body cell-block-container">
    <div class="cell-block-y">
   
  
                      </div>
  </div>
 
  `
    }
}

customElements.define('my-header', MyHeader)