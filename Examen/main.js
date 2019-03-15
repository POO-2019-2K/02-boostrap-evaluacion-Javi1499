import Renta from "./Renta.js"
import Listado from "./Listado.js";

class Main {
    constructor() {
        this._agenda = new Listado(document.querySelector("#listado"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let placa = document.querySelector("#placa").value;
            let sInicioRenta = document.querySelector("#inicioRenta").value;
            let sFinRenta = document.querySelector("#finRenta").value;
            //Se hace el split para tener fecha como vector//
            sInicioRenta = sInicioRenta.split('-');
            let inicioRenta = new Date(sInicioRenta[0], sInicioRenta[1], sInicioRenta[2]);
            sFinRenta = sFinRenta.split('-');
            let finRenta = new Date(sFinRenta[0], sFinRenta[1], sFinRenta[2]);

            let renta = new Renta(placa, inicioRenta, finRenta);

            this._agenda.addEmployee(renta);

        })
    }


}

let m = new Main();