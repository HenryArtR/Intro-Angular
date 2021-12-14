import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {

  @Input() frasesHome: string[] = []
  currentSentence: string = ""
  i = 0
  prev(){
    this.i--
    this.currentSentence = this.frasesHome[this.i];
  }
  next(){
    this.i++
    this.currentSentence = this.frasesHome[this.i]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
