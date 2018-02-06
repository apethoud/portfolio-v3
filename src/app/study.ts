export class Study {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public software: any = null,
    public thumbnailImage: string,
    public featuredVideo: string,
    public heroImages: any,
    public featuredColIndex: any,
    public featuredItems: any,
    public designStrategy: any) {}
}