import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    /**
     * ICI récupérer les datas provenant du back et les adapter de sortes à ce qu'il soit comparables aux noms des photos
     */
  title = 'Catalogue Yeezy SZN IV';
  categories=["350","380","500","700","Other","Slide"];
  products =[
    {
      id: "1",
      libelle : "Butter",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/butter.png"
    },
    {
      id: "2",
      libelle : "Clay",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/clay.png"
    },
    {
      id: "3",
      libelle : "Copper",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/copper.png"
    },
    {
      id: "4",
      libelle : "Lundmark",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/lundmark.png"
    },
    {
      id: "5",
      libelle : "Synth",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/synth.png"
    },
    {
      id: "6",
      libelle : "Tail Light",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/tail light.png"
    },
    {
      id: "7",
      libelle : "True Form",
      reference : "Yeezy Boost 350",
      url : "assets/images/yeezy/350/true form.png"
    },
    {
      id: "8",
      libelle : "Alien",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/alien.png"
    },
    {
      id: "8",
      libelle : "Blue oat (reflective)",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/blue oat (reflective).png"
    },
    {
      id: "8",
      libelle : "Blue oat",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/blue oat.png"
    },
    {
      id: "8",
      libelle : "Calcite Glow",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/calcite glow.png"
    },
    {
      id: "8",
      libelle : "Mist",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/mist.png"
    },
    {
      id: "8",
      libelle : "Onyx (reflective)",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/onyx (reflective).webp"
    },
    {
      id: "8",
      libelle : "Pepper (reflective)",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/pepper (reflective).png"
    },
    {
      id: "8",
      libelle : "Pepper",
      reference : "Yeezy Boost 380",
      url : "assets/images/yeezy/380/pepper.png"
    },
    {
      id: "8",
      libelle : "Bone White",
      reference : "Yeezy Boost 500",
      url : "assets/images/yeezy/500/bone white.png"
    },
    {
      id: "8",
      libelle : "Desert Rat",
      reference : "Yeezy Boost 500",
      url : "assets/images/yeezy/500/desert rat.webp"
    },
    {
      id: "8",
      libelle : "Salt",
      reference : "Yeezy Boost 500",
      url : "assets/images/yeezy/500/salt.webp"
    },
    {
      id: "8",
      libelle : "Soft Vision",
      reference : "Yeezy Boost 500",
      url : "assets/images/yeezy/500/soft vision.webp"
    },
    {
      id: "8",
      libelle : "Stone",
      reference : "Yeezy Boost 500",
      url : "assets/images/yeezy/500/stone.webp"
    },
    {
      id: "8",
      libelle : "Alvah",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/alvah.png"
    },
    {
      id: "8",
      libelle : "arzareth",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/arzareth.png"
    },
    {
      id: "8",
      libelle : "geode",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/geode.png"
    },
    {
      id: "8",
      libelle : "hospital blue",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/hospital blue.png"
    },
    {
      id: "8",
      libelle : "inertia",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/inertia.png"
    },
    {
      id: "8",
      libelle : "magnet",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/magnet.png"
    },
    {
      id: "8",
      libelle : "mnvn triple black",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/mnvn triple black.png"
    },
    {
      id: "8",
      libelle : "static",
      reference : "Yeezy Boost 700",
      url : "assets/images/yeezy/700/static.png"
    },
    {
      id: "8",
      libelle : "Barium",
      reference : "Yeezy MVMT",
      url : "assets/images/yeezy/Other/barium.png"
    },
    {
      id: "8",
      libelle : "Lifestyle",
      reference : "Yeezy MVMT",
      url : "assets/images/yeezy/Other/lifestyle.png"
    },
    {
      id: "8",
      libelle : "Teal Blue",
      reference : "Yeezy Teal Blue",
      url : "assets/images/yeezy/Other/teal blue.png"
    },
    {
      id: "8",
      libelle : "Bone",
      reference : "Yeezy Slide",
      url : "assets/images/yeezy/Slide/bone.png"
    },
    {
      id: "8",
      libelle : "Bone",
      reference : "Yeezy Slide",
      url : "assets/images/yeezy/Slide/bone.png"
    },
    {
      id: "8",
      libelle : "Core",
      reference : "Yeezy Slide",
      url : "assets/images/yeezy/Slide/core.png"
    },
    {
      id: "8",
      libelle : "Earth Brown",
      reference : "Yeezy Slide",
      url : "assets/images/yeezy/Slide/earth brown.png"
    },
    {
      id: "8",
      libelle : "Resin",
      reference : "Yeezy Slide",
      url : "assets/images/yeezy/Slide/resin.png"
    },
    {
      id: "8",
      libelle : "Soot",
      reference : "Yeezy Slide",
      url : "assets/images/yeezy/Slide/soot.png"
    }
  ]
}
