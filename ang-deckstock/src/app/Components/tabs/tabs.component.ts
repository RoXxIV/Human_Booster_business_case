import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  active = 'top';

  ngOnInit(): void {
    function fadeOut(el: any): void {
    el.style.opacity = 1;

    (function fade(): any {
        // tslint:disable-next-line:no-conditional-assignment
        if ((el.style.opacity -= .1) < 0) {
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

    function fadeIn(el: any): void {
    el.style.opacity = 0;
    // .1 = 0.1
    (function fade(): void {
        let val = parseFloat(el.style.opacity);
        // tslint:disable-next-line:no-conditional-assignment
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}
    // system d'onglet section question/reponse

    // tslint:disable-next-line:only-arrow-functions
    const showTab = function(a): boolean {
    const li = a.parentNode;
    const div = a.parentNode.parentNode.parentNode;
    const divContent = document.querySelector('.tabs-content');
    const fade = divContent.querySelector('.tab-content.active');
    const show = divContent.querySelector(a.getAttribute('href'));

    // Dans le cas ou l'utilisateur click deux fois sur le meme lien
    if (li.classList.contains('active')) {
        return false;
    }
    // #1 On retire la class active de l'element actif //
    div.querySelector('.tabs .active').classList.remove('active');

    // #2 On ajoute la classe active au lien actuel
    li.classList.add('active');

    // #3 On retire la classe active sur l'element de contenu actif
    divContent.querySelector('.tab-content.active').classList.remove('active');
    fadeOut(fade);

    // #4 On ajoute la classe active sur le contenu qui correspond au lien clické
    divContent.querySelector(a.getAttribute('href')).classList.add('active');
    fadeIn(show);


};

/**Le code s'execute une fois que tout le contenu de la page est chargé
 * ***************************************************************************/
    document.addEventListener("DOMContentLoaded", function () {

    // system d'onglet section question/reponse

    // selection des lien
    const tabs = document.querySelectorAll('.tabs a');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e): void {
            showTab(this);
            // empeche le rafraichissement de la page et evite les scroll au clique sur les liens
            e.preventDefault();
        });
    }

});
  }
}
