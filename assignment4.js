window.onload = (event) => {
    let body = document.querySelector('body')
    let nav = "<nav class=\"navbar navbar-expand-sm fixed-top\"\> <div class=\"navbar-header\"\><img  alt=\"Logo\" id=\"logo\" src=\"images/logo-oud.png\"\></div\><ul class=\" navbar-nav\"\><li class=\"nav-item\"><a href=\"#\">JANN</a></li\><li class=\"nav-item\"><a href=\"#\">PROJECTEN</a></li\><li class=\"nav-item\"><a href=\"#\">CONTACT</a></li\></ul\></nav>"
    let pageContainer=document.createElement('div');
    pageContainer.classList.add('page-wrapper');
    pageContainer.innerHTML = nav;
    body.appendChild(pageContainer);

    let bootstrapContainer=document.createElement('div');
    bootstrapContainer.classList.add("container");
    pageContainer.appendChild(bootstrapContainer);

    let toprow = document.createElement('div');
    toprow.classList.add('row');
    toprow.classList.add('top');
    toprow.innerHTML = '<div class=\"col-md-7 col-12\"><div class="top-left"><h1>OVER JANN</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus lectus, molestie bibendum velit sed, tristique porttitor enim. Suspendisse ut ligula mi. Integer elementum, tellus in volutpat tristique, sapien tellus malesuada nisi, non cursus mauris magna a velit.</p></div></div>  <div class="col-md-5 col-12 px-0"><img class="top-img" alt="happy people" src="images/rectangle.png"><div class="floating-section"><h1>"</h1><p> Cras malesuada fermentum euismod. Donec consequat ac ligula. Duis ligulat pharetra fermentum orci.</p></div></div>';
    bootstrapContainer.appendChild(toprow);


    let logos =  document.createElement('div');
    logos.classList.add('row');
    logos.classList.add('space-top');

    for(let i=0; i<2; i++){
        for(let j=0; j<3; j++){
            let logo =  document.createElement('div');
            logo.classList.add('col-md-2', 'col-6', 'my-auto');
            let img = document.createElement('img');
            img.classList.add('logo')
            img.src = "images/logo"+j+".png";
            logo.appendChild(img);
            logos.appendChild(logo);

        }
    }

    bootstrapContainer.appendChild(logos);
}
