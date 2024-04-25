import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent  {
  
  imagePath = '../assets/icons8-invisible-48.png';
  
  
  passwordArray:any[] = [];

  list : any = {
    URL : '',
    username : '',
    password : ''
  }

  constructor(){}

  ngOnInit() : void{
    const passwordList = localStorage.getItem("passwordList");
    if(passwordList !== null){
      this.passwordArray = JSON.parse(passwordList);
    }
  }

copyText(text: string) {
    alert('Copied to clipboard');
    navigator.clipboard.writeText(text)
    };
  
    deletePassword(index: number) {
      // Remove the item from the array
      this.passwordArray.splice(index, 1);
  
      // Update the localStorage
      localStorage.setItem("passwordList", JSON.stringify(this.passwordArray));
  }
    

  showpassword() : void{
    let x = document.getElementById("password") as HTMLInputElement;
   
    if(x !== null && x.type === "password"){
      x.type = "text";
     this.imagePath = '../assets/icons8-eye-24.png';
      
    }else{
      x.type = "password";
      this.imagePath = '../assets/icons8-invisible-48.png';
    }

  }

   savepassword(data:any){

      //  debugger;
      this.passwordArray.push(this.list);

      console.log(this.passwordArray);

      localStorage.setItem("passwordList", JSON.stringify(this.passwordArray));
      this.list = {
        URL : '',
        username : '',
        password : ''
      }
           

   }

}
