export class Tool {
    constructor(content){
        const d = new Date;
        this.id = d.getTime(),
        this.content = content,
        this.complete = false,
        this.cu = true,
        this.prod = true,
        this.purge = true
        this.location = "unknown";
    }
}