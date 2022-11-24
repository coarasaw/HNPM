import { Component, OnInit } from '@angular/core';
import { Github } from '../clases/github';
import { GithubService } from '../servicios/github.service';

@Component({
  selector: 'app-bienvenido-login',
  templateUrl: './bienvenido-login.component.html',
  styleUrls: ['./bienvenido-login.component.css']
})
export class BienvenidoLoginComponent implements OnInit {
  user: Github=null;

  constructor(private _githubService:GithubService) { }

  ngOnInit(): void {
    this._githubService.getUser().subscribe(user => this.user = user); 
  }

}
