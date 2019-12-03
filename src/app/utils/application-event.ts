export class ApplicationEvent {
  static FILTER_HEADER_SEND = "FILTER_HEADER_SEND";
  static FILTER_HEADER_SEND_ERROR = "FILTER_HEADER_SEND_ERROR";

  static FILTER_OPEN = "FILTER_OPEN";
  static LOAD_DATA = "LOAD_DATA";

  message: String = "";
  data: any;
  constructor(message: String = "", data: any = {}) {
    this.message = message;
    this.data = data;
  }
}
