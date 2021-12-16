import { Component, Input, OnInit, Output } from '@angular/core';
import { Frase } from 'src/app/interfases/escena.interfase';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {

  @Input() frasesHome: Frase[] = []
  currentSentence: string = ""
  backg: string = ""
  i = 0 
  
  prev(){   
    if(this.i > 0){
      this.i--
    }
    this.currentSentence = this.frasesHome[this.i].txt;
    this.backg = this.frasesHome[this.i].img;
  }
  next(){
    if(this.i < this.frasesHome.length -1){
      this.i++
    }
    this.currentSentence = this.frasesHome[this.i].txt;
    this.backg = this.frasesHome[this.i].img;
  }

  ngOnInit(): void {
    this.currentSentence = this.frasesHome[0].txt
    this.backg = this.frasesHome[0].img
  }

}
