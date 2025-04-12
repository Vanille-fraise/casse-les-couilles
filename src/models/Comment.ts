export class Comment {
  id: number;
  name: string;
  comment: string;
  imageUrl: string;

  constructor(id: number, name: string, comment: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.imageUrl = imageUrl;
  }
}
