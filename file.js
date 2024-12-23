import { writeFile } from "node:fs";
import { Buffer

    
 } from "node:buffer";
 const data = new Uint8Array(Buffer.from('Hello node'));
 writeFile('message',data,(err)=>{
    if(err) throw err;
    console.log('the file has been saved');
 });