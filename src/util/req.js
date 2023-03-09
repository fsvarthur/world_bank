export async function getCountries(context = 1){
    getMetadata();
    const respone = await fetch(`https://api.worldbank.org/v2/country?format=json&page=1`,
    {
        method: 'GET',
        headers:{
            'Accept':'Application/json',
        },
        mode: 'cors',
        cache: 'default'
    });
    if(!respone.ok){
        throw new Error('Error');
    }
    return respone.json();
}

async function getMetadata(){
    const response = await fetch("https://api.worldbank.org/v2/country?format=json",
    {
        method: 'GET',
        headers:{
            'Accept':'Application/json',
        },
        mode: 'cors',
        cache: 'default'
    });
    if(!response.ok){
        throw new Error('Error');
    }
    console.log(response.json().length());
}

export async function getCountry(id){
    const respone = await fetch(`https://api.worldbank.org/v2/country/${id}?format=json`,
    {
        method: 'GET',
        header:{
            'Accept':'Application/json',
        },
        mode: 'cors',
        cache: 'default'
    });
    if(!respone.ok){
        throw new Error('Error');
    }
    return respone.json();
}
