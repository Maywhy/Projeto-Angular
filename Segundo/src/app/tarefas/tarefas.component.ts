import { Component, OnInit } from '@angular/core';

// faço o import para utilizar o objeto de negócios Tarefa
import { Tarefa } from '../model/Tarefa';

// agora importo oserviço que vai conversar com o site
import { ListawebService } from '..//service/listaweb.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  // criei meu objeto de negocios
  minhaTarefa: Tarefa[];

  // injetando o serviço
  constructor(private servicoLista: ListawebService) {

  }

  ngOnInit() {
    console.log("Chamando a funcao que recupera a lista");
    this.obtertTodasAsTarefas();
    console.log("Espero que tenha dado certo");
    console.log(this.minhaTarefa);
  }
  
  // so vou criar um metodo para invocar o servico
  public obtertTodasAsTarefas() {
    this.servicoLista.obterTarefas().subscribe((resultado: Tarefa[]) => {
      this.minhaTarefa = resultado;
    });
  }
}