class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O método template deve ser impementado.');
    }

    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }

}
