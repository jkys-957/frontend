window.onload = ()=> {

    // let products = [
    //     {
    //         name: '농구공 1호',
    //         price: 50000,
    //         seller: '서범진',
    //         imageUrl: 'images/products/basketball1.jpeg'
    //     },
    //     {
    //         name: '농구공 2호',
    //         price: 52000,
    //         seller: '서범진',
    //         imageUrl: 'images/products/basketball2.jpg'
    //     },
    //     {
    //         name: '농구공 3호',
    //         price: 53000,
    //         seller: '서범진',
    //         imageUrl: 'images/products/basketball3.jpg'
    //     },
    //     {
    //         name: '노트북 1호',
    //         price: 500000,
    //         seller: '서범진',
    //         imageUrl: 'images/products/notebook1.jpg'
    //     },
    //     {
    //         name: '노트북 2호',
    //         price: 520000,
    //         seller: '서범진',
    //         imageUrl: 'images/products/notebook2.jpg'
    //     },
    //     {
    //         name: '축구공',
    //         price: 15000,
    //         seller: '서범진',
    //         imageUrl: 'images/products/soccerball1.jpg'
    //     }
    // ];

    axios.get('http://127.0.0.1:5501/api.json')
    .then((response) => {
        console.log(response.data);
        let products = response.data;
        let productsHTML = '';
        for(let i = 0; i < products.length; i++){
        let product = products[i];
        productsHTML += `
        <div class="product-card">
            <div>
            <img class="product-img" src="${product.imageUrl}" alt="basketball1">
            </div>
            <div class="product-contents">
            <span class="product-name">${product.name}</span>
            <span class="product-price">${product.price}</span>
            </div>
            <div class="product-seller">
            <img class="product-avatar" src="./images/icons/avatar.png" alt="avatar">
            <span>${product.seller}</span>
            </div>
        </div>`;
        }
    document.querySelector('#product-list').innerHTML = productsHTML;
    })
    .catch((error) => {
        console.log('error 발생!' + error);
    });


}
