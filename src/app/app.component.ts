import { Component } from '@angular/core';

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
  first_selected_tree1=false;
  second_selected_tree1=false;
  third_selected_tree1=false;
// remove_fourth_selected_tree1 = false;
// remove_third_selected_tree1 = false;
  first_selected_tree2 = false;
  second_selected_tree2 = false;
  third_selected_tree2 = false;
  id:any;
  event: any;

  increment(event){
      this.id = event.target.id;
      var url = event.target.src;
      var src = url.substring(url.lastIndexOf('/', url.lastIndexOf('/')-1));
     // console.log(src);
      if(this.points<6)
      if(src === "/assets/chevron-1.png"|| src==="/assets/silverware-1.png"||src==="/assets/cake-1.png"||src==="/assets/crown-1.png"||src==="/assets/logo-1.png"||src==="/assets/scuba-1.png"||src==="/assets/bolt-1.png"||src==="/assets/skull-1.png"){
        this.changeImage(this.id);
        this.points++;  
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
 this.second_selected_tree1 = true;
  }
else if(id==="img3"){
this.cake = "../assets/cake.png";
this.third_selected_tree1 = true;
  }
  else if (id==="img4"){
this.crown = "../assets/crown.png";
  }
  else if(id==="img5"){
    this.logo = "../assets/logo.png";
    this.first_selected_tree2 = true;
  }
  else if(id==="img6"){
    this.scuba = "../assets/scuba.png";
    this.second_selected_tree2 = true;
  }
  else if(id==="img7"){
    this.bolt = "../assets/bolt.png";
    this.third_selected_tree2 = true;
  }
  else if(id==="img8"){
    this.skull = "../assets/skull.png";
  }
}
changeImagedec(id){
  if(id==="img1"){
    this.img="../assets/chevron-1.png";
  this.first_selected_tree1 = false;
    }
    else if(id==="img2"){
   this.silverware = "../assets/silverware-1.png";
   this.second_selected_tree1 = false;
    }
  else if(id==="img3"){
  this.cake = "../assets/cake-1.png";
  this.third_selected_tree1 = false;
  // this.remove_third_selected_tree1 = true;
    }
    else if (id==="img4"){
  this.crown = "../assets/crown-1.png";
  // this.remove_fourth_selected_tree1 = true;
    }
    else if(id==="img5"){
      this.logo = "../assets/logo-1.png";
      this.first_selected_tree2 = false;
    }
    else if(id==="img6"){
      this.scuba = "../assets/scuba-1.png";
      this.second_selected_tree2 = false;
    }
    else if(id==="img7"){
      this.bolt = "../assets/bolt-1.png";
      this.third_selected_tree2 = false;
    }
    else if(id==="img8"){
      this.skull = "../assets/skull-1.png";
    }
  }
}
