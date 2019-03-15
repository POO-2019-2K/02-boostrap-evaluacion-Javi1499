export default class Listado {
    constructor(tableListado, tableInfo) {
        this._tableListado = tableListado;
        this._tableInfo = tableInfo;

        this._numAutosRentados = 0;
        this._averageAge = 0;
        this._sumAge = 0;
        this._costoPordia = 55;
        
    }



    addEmployee(renta){
        this._diasRenta = renta.getDias()++;
        let row = this._tableListado.insertRow(-1);
        let cellPlaca = row.insertCell(0);
        let cellInicioRenta = row.insertCell(1);
        let cellFinRenta = row.insertCell(2);
        let cellDiasEntrega = row.insertCell(3);
        let cellAge = row.insertCell(4);

        cellPlaca.innerHTML = renta.placa;
        cellInicioRenta.innerHTML = renta.getInicioRentaAsString();
        cellFinRenta.innerHTML= renta.getFinRentaAsString();
        cellDiasEntrega.innerHTML= renta.getDiasParaEntrega();
        cellAge.innerHTML = Number(this._costoPordia)* Number(renta.getDias());

        this._numAutosRentados++;
        this._diasRenta++;
        this._tableInfo.rows[0].cells[1].innerHTML = this._numAutosRentados;
        this._tableInfo.rows[1].cells[1].innerHTML = this._diasRenta;
    }
}