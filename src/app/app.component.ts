import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DnDBeyond';
  points = 0;
  img="../assets/chevron-1.png";
  silverware = "../assets/silverware-1.png";
  cake="../assets/cake-1.png";
  crown = "../assets/crown-1.png";
  logo = "../assets/logo-1.png";
  scuba = "../assets/scuba-1.png";
  bolt = "../assets/bolt-1.png";
  skull = "../assets/skull-1.png";
  bar1 = "../assets/bar.png";
  bar2 = "../assets/bar.png";
  bar3="../assets/bar.png";
  bar4="../assets/bar.png";
  bar5="../assets/bar.png";
  bar6="../assets/bar.png";
  first_selected_tree1=false;
  second_selected_tree1=false;
  third_selected_tree1=false;
  remove_second_selected_tree1 = true;
  remove_third_selected_tree1 = true;
  remove_fourth_selected_tree1 = true;
  first_selected_tree2 = false;
  second_selected_tree2 = false;
  third_selected_tree2 = false;
  remove_second_selected_tree2 = true;
  remove_third_selected_tree2 = true;
  remove_fourth_selected_tree2 = true;
  id;
  event;
  constructor() {
  }
  ngOnInit(){
    if(localStorage.length>0){
      this.points = JSON.parse(localStorage.getItem('key'));  
       this.img = localStorage.getItem('img_local'); 
       this.silverware = localStorage.getItem('silverware_local'); 
       this.cake = localStorage.getItem('cake_local'); 
       this.crown = localStorage.getItem('crown_local'); 
       this.logo = localStorage.getItem('logo_local');
       this.scuba = localStorage.getItem('scuba_local');
       this.bolt = localStorage.getItem('bolt_local');
       this.skull = localStorage.getItem('skull_local');
       this.bar1 = localStorage.getItem('bar1');
       this.bar2 = localStorage.getItem('bar2');
       this.bar3 = localStorage.getItem('bar3');
       this.bar4 = localStorage.getItem('bar4');
       this.bar5 = localStorage.getItem('bar5');
       this.bar6 = localStorage.getItem('bar6');
       this.first_selected_tree1 = JSON.parse(localStorage.getItem(('first_selected_tree1')));
       this.second_selected_tree1 = JSON.parse(localStorage.getItem('second_selected_tree1'));
       this.third_selected_tree1 = JSON.parse(localStorage.getItem('third_selected_tree1'));
       this.first_selected_tree2 = JSON.parse(localStorage.getItem('first_selected_tree2'));
       this.second_selected_tree2 = JSON.parse(localStorage.getItem('second_selected_tree2'));
       this.third_selected_tree2 = JSON.parse(localStorage.getItem('third_selected_tree2'));
    } 
  }
  
  increment(event){
      this.id = event.target.id;
      var url = event.target.src;
      var src = url.substring(url.lastIndexOf('/', url.lastIndexOf('/')-1));
     // console.log(src);
      if(this.points<6)
      if(src === "/assets/chevron-1.png"|| src==="/assets/silverware-1.png"||src==="/assets/cake-1.png"||src==="/assets/crown-1.png"||src==="/assets/logo-1.png"||src==="/assets/scuba-1.png"||src==="/assets/bolt-1.png"||src==="/assets/skull-1.png"){
        this.changeImage(this.id);
        this.points++;  
        localStorage.setItem('key', JSON.stringify(this.points));
      }
  }
decrement(event) {
  this.id = event.target.id;
  //console.log(event);
  var url = event.target.src;
  var src = url.substring(url.lastIndexOf('/', url.lastIndexOf('/')-1));
  if(this.points>0)
  if(src === "/assets/chevron.png"|| src==="/assets/silverware.png"||src==="/assets/cake.png"||src==="/assets/crown.png"||src==="/assets/logo.png"||src==="/assets/scuba.png"||src==="/assets/bolt.png"||src==="/assets/skull.png"){
    this.changeImagedec(this.id);
    this.points--;
   localStorage.setItem('key', JSON.stringify(this.points));
  }
  return false; 
}
changeImage(id){  
  if(id==="img1"){
  this.img="../assets/chevron.png";
  this.first_selected_tree1 = true;
  }
  else if(id==="img2"){
 this.silverware = "../assets/silverware.png";
 this.bar1 = "../assets/bar-active.png";
 this.second_selected_tree1 = true;
 this.remove_second_selected_tree1 = false;
  }
else if(id==="img3"){
this.cake = "../assets/cake.png";
this.bar2 = "../assets/bar-active.png";
this.third_selected_tree1 = true;
this.remove_third_selected_tree1 = false;
  }
  else if (id==="img4"){
this.crown = "../assets/crown.png";
this.bar3 = "../assets/bar-active.png";
this.remove_fourth_selected_tree1 = false;

  }
  else if(id==="img5"){
    this.logo = "../assets/logo.png";
    this.first_selected_tree2 = true;
  }
  else if(id==="img6"){
    this.scuba = "../assets/scuba.png";
    this.second_selected_tree2 = true;
    this.remove_second_selected_tree2 = false;
    this.bar4 = "../assets/bar-active.png";
  }
  else if(id==="img7"){
    this.bolt = "../assets/bolt.png";
    this.third_selected_tree2 = true;
    this.remove_third_selected_tree2 = false;
    this.bar5 = "../assets/bar-active.png";
  }
  else if(id==="img8"){
    this.skull = "../assets/skull.png";
    this.remove_fourth_selected_tree2 = false;
    this.bar6 = "../assets/bar-active.png";
  }
  localStorage.setItem('img_local',this.img);
  localStorage.setItem('silverware_local',this.silverware);
  localStorage.setItem('cake_local',this.cake);
  localStorage.setItem('crown_local',this.crown);
  localStorage.setItem('logo_local',this.logo);
  localStorage.setItem('scuba_local',this.scuba);
  localStorage.setItem('bolt_local',this.bolt);
  localStorage.setItem('skull_local',this.skull);
  localStorage.setItem('bar1',this.bar1);
  localStorage.setItem('bar2',this.bar2);
  localStorage.setItem('bar3',this.bar3);
  localStorage.setItem('bar4',this.bar4);
  localStorage.setItem('bar5',this.bar5);
  localStorage.setItem('bar6',this.bar6);
  localStorage.setItem('first_selected_tree1',JSON.stringify(this.first_selected_tree1));
  localStorage.setItem('second_selected_tree1',JSON.stringify(this.second_selected_tree1));
  localStorage.setItem('third_selected_tree1',JSON.stringify(this.third_selected_tree1));
  localStorage.setItem('first_selected_tree2',JSON.stringify(this.first_selected_tree2));
  localStorage.setItem('second_selected_tree2',JSON.stringify(this.second_selected_tree2));
  localStorage.setItem('third_selected_tree2',JSON.stringify(this.third_selected_tree2));
}
changeImagedec(id){
  if(id==="img1"){
    this.img="../assets/chevron-1.png";
    this.bar1 = "../assets/bar.png";
  this.first_selected_tree1 = false;
    }
    else if(id==="img2"){
   this.silverware = "../assets/silverware-1.png";
   this.bar2 = "../assets/bar.png";
   this.second_selected_tree1 = false;
   this.remove_second_selected_tree1 = true;
    }
  else if(id==="img3"){
  this.cake = "../assets/cake-1.png";
  this.third_selected_tree1 = false;
  this.bar3 = "../assets/bar.png";
  this.remove_third_selected_tree1 = true;
    }
    else if (id==="img4"){
  this.crown = "../assets/crown-1.png";
  this.remove_fourth_selected_tree1 = true;
    }
    else if(id==="img5"){
      this.logo = "../assets/logo-1.png";
      this.first_selected_tree2 = false;
      this.bar4 = "../assets/bar.png";
    }
    else if(id==="img6"){
      this.scuba = "../assets/scuba-1.png";
      this.second_selected_tree2 = false;
      this.remove_second_selected_tree2 = true;
      this.bar5 = "../assets/bar.png";
    }
    else if(id==="img7"){
      this.bolt = "../assets/bolt-1.png";
      this.third_selected_tree2 = false;
      this.remove_third_selected_tree2 = true;
      this.bar6 = "../assets/bar.png";
    }
    else if(id==="img8"){
      this.skull = "../assets/skull-1.png";
        this.remove_fourth_selected_tree2 = true;
    }
  localStorage.setItem('img_local',this.img);
  localStorage.setItem('silverware_local',this.silverware);
  localStorage.setItem('cake_local',this.cake);
  localStorage.setItem('crown_local',this.crown);
  localStorage.setItem('logo_local',this.logo);
  localStorage.setItem('scuba_local',this.scuba);
  localStorage.setItem('bolt_local',this.bolt);
  localStorage.setItem('skull_local',this.skull);
  localStorage.setItem('bar1',this.bar1);
  localStorage.setItem('bar2',this.bar2);
  localStorage.setItem('bar3',this.bar3);
  localStorage.setItem('bar4',this.bar4);
  localStorage.setItem('bar5',this.bar5);
  localStorage.setItem('bar6',this.bar6);
  }
}
