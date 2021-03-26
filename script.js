
const consumirApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";

    try{
        const dataRaw = await fetch(url);
        const data = await dataRaw.json();
        const dataArr = data;

        const titles = await dataArr.forEach((el, index) => {
            if(index < 20) {
                return  console.log(el.id, el.title);
            };
        });
            
    }catch(error) {
        console.log(error);
    };
};


const info = async () =>{
    const msje = () =>  console.log("Información Enviada");
    return setTimeout((msje),3000);
}; 


(async() => {
    await consumirApi();
    const mensaje = await (info());
    
})();




