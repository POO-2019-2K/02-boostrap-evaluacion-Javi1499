export default class Renta {
    constructor(placa, inicioRenta, finRenta) {
        this._placa =  placa.toUpperCase();
        this._inicioRenta = inicioRenta;
        this._finRenta = finRenta;
    }

    get placa(){
        return this._placa;
    }

    get inicioRenta(){
        return this._inicioRenta;
    }

    getFinRentaAsString(){
        let d = this._finRenta.getDate()+ "/" + this._finRenta.getMonth() + "/" + this._finRenta.getFullYear();
        return d;
    }

    get finRenta(){
        return this._finRenta;
    }
    getInicioRentaAsString(){
        let e = this._inicioRenta.getDate()+ "/" + this._inicioRenta.getMonth() + "/" + this._inicioRenta.getFullYear();
        return e;
    }

    get incioRenta(){
        return this._inicioRenta;
    }

////////////////////returns employee agee(abs es adsoluto)//////////////////////////////
    getDias() {
        let oneDay= (24*60*60*1000);
        let differenceMs = Math.abs(this._finRenta - this._inicioRenta);
        return Math.round(differenceMs / oneDay);
        }

    getDiasParaEntrega() {
        
            let oneDay= (24*60*60*1000);
            let hoy = new Date();
            let differenceMs = Math.abs(this._finRenta - hoy);
            return Math.round((differenceMs / oneDay)-30);
            }
           
}
console.log(new Date());