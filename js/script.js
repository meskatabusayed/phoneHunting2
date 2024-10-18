//load Phone
const loadPhone = async(searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    const data = await res.json();
    console.log(data);

}


//handle search
const handleSearch = () => {
    
    const searchText = document.getElementById('search-text');
    const searchValue = searchText.value;
    loadPhone(searchValue); 
}

