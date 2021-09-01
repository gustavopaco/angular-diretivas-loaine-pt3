import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  ativo2: boolean = false;
  tamanhoFonte: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  alterarStyleButton() {
    this.ativo = !this.ativo;
  }

  alterarStyleButton2() { /*Somente para separar os eventos estou criando outra funcao repetiva */
    this.ativo2 = !this.ativo2;
  }
}
