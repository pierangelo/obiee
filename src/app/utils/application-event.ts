export class ApplicationEvent {
  message: String = "";
  data: any;
  constructor(message: String = "", data: any = {}) {
    this.message = message;
    this.data = data;
  }
}
