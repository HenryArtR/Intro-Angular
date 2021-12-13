import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {

  @Input() frasesHome: string =""

  constructor() { }

  ngOnInit(): void {
  }

}
