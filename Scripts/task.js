export class Task {
    constructor(content){
        const d = new Date;
        this.id = d.getTime(),
        this.content = content,
        this.complete = false
    }
}