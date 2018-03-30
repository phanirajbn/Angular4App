export class Restaurant {
    public id:number;
    public name:string;
    public rating : number;
    public address : string;
    public picture : string;
    public cuisine : string;
    public selected : boolean;

    constructor(values : Object ={}){
        Object.assign(this, values);
    }
}
