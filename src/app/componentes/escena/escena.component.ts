import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {

  @Input() frasesHome: string[] = []
  currentSentence: string = this.frasesHome[0]
  i = 0 
  prev(){
    if(this.i > 0){
      this.i--
      this.currentSentence = this.frasesHome[this.i];
    }
    
  }
  next(){
    if(this.i < this.frasesHome.length){
      this.i++
      this.currentSentence = this.frasesHome[this.i]
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
