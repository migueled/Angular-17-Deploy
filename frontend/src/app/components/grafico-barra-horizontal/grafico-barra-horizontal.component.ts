import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styles: [ '.chart-container { display: grid; height: 300px; }' ]
})
export class GraficoBarraHorizontalComponent {

  results: any[] = [
    {
      "name": "Halo",
      "value": 2378
    },
    {
      "name": "Call of duty",
      "value": 2979
    },
    {
      "name": "GOW 3",
      "value": 1983
    },
    {
      "name": "Fortnite",
      "value": 371
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event:any) {
    console.log(event);
  }
}
