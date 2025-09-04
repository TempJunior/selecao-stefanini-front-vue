export default class OpenNewWindowLink {
  private url: string;

  constructor(link: string) {
    this.url = link;
  }

  open() {
    window.open(this.url, "_blank");
  }
}
