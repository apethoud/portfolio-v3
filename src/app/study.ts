export class Study {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public software: any = null,
    public featuredItems: any,
    public designStrategy: any) {}
}