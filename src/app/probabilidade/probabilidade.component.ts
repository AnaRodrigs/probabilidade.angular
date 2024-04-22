import { Component } from '@angular/core';

@Component({
  selector: 'app-probabilidade',
  templateUrl: './probabilidade.component.html',
  styleUrls: ['./probabilidade.component.css']
})
export class ProbabilidadeComponent {
  sucessos: number | null = null;
  tentativas: number | null = null;
  probabilidade: number | null = null;
  consultasAnteriores: { sucessos: number, tentativas: number, probabilidade: number }[] = [];

  calcularProbabilidade(): void {
    if (this.sucessos !== null && this.tentativas !== null && this.tentativas > 0) {
      this.probabilidade = (this.sucessos / this.tentativas) * 100;
      this.adicionarConsulta();
    } else {
      this.probabilidade = null;
    }
  }

  adicionarConsulta(): void {
    if (this.sucessos !== null && this.tentativas !== null && this.probabilidade !== null) {
      this.consultasAnteriores.unshift({
        sucessos: this.sucessos,
        tentativas: this.tentativas,
        probabilidade: this.probabilidade
      });
    }
  }
}
