export class Word {

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}

export interface Word {
  [prop: string]: any;
}
