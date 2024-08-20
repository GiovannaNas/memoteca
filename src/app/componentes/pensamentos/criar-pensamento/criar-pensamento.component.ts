import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id :'1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo:'medelo1'
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
}
cancelar() {
  alert("Novo pensamento criado!")
}
}
