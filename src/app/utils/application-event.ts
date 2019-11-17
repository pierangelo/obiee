export class ApplicationEvent {
  static FILTER_HEADER_SEND = "FILTER_HEADER_SEND";

  message: String = "";
  data: any;
  constructor(message: String = "", data: any = {}) {
    this.message = message;
    this.data = data;
  }
}
