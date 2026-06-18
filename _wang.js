const fs=require('fs'), sharp=require('sharp');
const U='/root/.claude/uploads/2e069514-4bb0-549a-ad45-0125b8d906db/';
const map=[
 ['9358f7b4-14888.jpg','heritage/wang-estate-panorama.jpg',1600],
 ['92015090-14903.jpg','heritage/wang-estate-gate.jpg',1300],
 ['981f32d7-14926.jpg','heritage/wang-estate-rendering.jpg',1400],
 ['ba534957-14927.jpg','heritage/wang-estate-aerial-old.jpg',1400],
 ['659395ea-14924.jpg','heritage/wang-estate-builder.jpg',1300],
 ['77e0209d-14925.jpg','heritage/wang-estate-architecture.jpg',1300],
];
const re=/(\d{4}):(\d{2}):(\d{2}) /;
(async()=>{
 for(const [src,dest,w] of map){
   const raw=fs.readFileSync(U+src);
   const m=raw.slice(0,300000).toString('latin1').match(re);
   const b=await sharp(raw).rotate().resize({width:w,withoutEnlargement:true}).jpeg({quality:78,mozjpeg:true}).toBuffer();
   fs.writeFileSync('public/images/'+dest,b);
   console.log(dest.padEnd(42), (m?m[1]+'-'+m[2]+'-'+m[3]:'no-exif'), (b.length/1024).toFixed(0)+'KB');
 }
})();
