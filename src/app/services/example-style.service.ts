import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleStyleService {

  private tiposMateriales: string = `[
    {
      "id": 1,
      "nombre": "Metal",
      "descripcion": "Material metálico"
    },
    {
      "id": 2,
      "nombre": "Plástico",
      "descripcion": "Material plástico"
    },
    {
      "id": 3,
      "nombre": "Madera",
      "descripcion": "Material de madera"
    },
    {
      "id": 4,
      "nombre": "Vidrio",
      "descripcion": "Material de vidrio"
    },
    {
      "id": 5,
      "nombre": "Papel",
      "descripcion": "Material de papel"
    }
  ]`;

  constructor() { }

  getList(): any[] {
    return JSON.parse(this.tiposMateriales);
  }
}
