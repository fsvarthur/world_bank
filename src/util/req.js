export async function getCountries(){
    const respone = await fetch("https://api.worldbank.org/v2/country?format=json&per_page=299",
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