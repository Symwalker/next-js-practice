async function productList() {
    let data = await fetch(`https://dummyjson.com/products`)
    data = await data.json()
    return data.products
}

const page = async () => {
    let products = await productList();
    console.log(products);
    return (
        <div>
            {
                products.map((item)=>(
                    <div className="flex gap-3 py-2">
                    <h2>{item.title}</h2>
                    <p className="font-bold">{item.price}$</p>

                    <dialog open
                    heelo
                    ></dialog>
                    </div>

                ))
            }
        </div>
    )
}

export default page
