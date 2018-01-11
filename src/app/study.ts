export class Study {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public software: any = null,
    public heroImage: string,
    public featuredColIndex: any,
    public featuredItems: any,
    public designStrategy: any) {}
}