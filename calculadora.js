import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  inputValue = '';

  handleNumberClick(event) {
    this.inputValue += event.target.value;
  }

  handleOperationClick(event) {
    let operation = event.target.value;
    if (operation === '=') {
      try {
        this.inputValue = eval(this.inputValue);
      } catch (error) {
        this.inputValue = 'Error';
      }
    } else {
      this.inputValue += operation;
    }
  }

  handleClear() {
    this.inputValue = '';
  }
}
