export class Appinfo {
  // constructor(
  //   public id: number,
  //   public fullName: string
  // ) {}
  constructor(data: Partial<Appinfo>) {
    Object.assign(this, data);
}

  public static fromJSON = (json: string): Appinfo => {
      const jsonObject = JSON.parse(json);
      return new Appinfo(jsonObject);
  };

}
