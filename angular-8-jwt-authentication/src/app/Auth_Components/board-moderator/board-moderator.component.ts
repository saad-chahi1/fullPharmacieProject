import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content: any;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  public imagePath;
  userFile;
  imgURL: any;
  public message: string

  constructor(private userService: UserService,
              private cartService:CartService) { }

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit() {
    this.cartService.addProduct(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  onSelectFile(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.userFile = file;
      this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if(mimeType.match(/image\/*/)==null){
        this.message = "Only images are supported.";
        return;
      }
      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) =>{
        this.imgURL = reader.result;
      }
    }
  }
}
