let calculator = {

  read(a, b) {
    this.a = Number(a);
    this.b = Number(b);
  },

  sum() {
    console.log(this.a + this.b)
    return(this.a + this.b);
  },

  mul() {
    console.log(this.a * this.b)
    return(this.a * this.b);
  },
}


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
