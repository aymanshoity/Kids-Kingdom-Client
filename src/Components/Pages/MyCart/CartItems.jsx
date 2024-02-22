

const CartItems = ({ item }) => {
    const { productName, productImage, price, ClientName, ClientEmail, brandName } = item;
    return (

        <div className="card card-compact bg-base-100 shadow-xl flex flex-col items-center">
            <figure><img className="w-[300px] " src={productImage} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name: {productName}</h2>
                <p className="text-xl font-semibold">Brand:  {brandName}</p>
                <p className="text-xl font-semibold">Price:  {price} Tk.</p>

            </div>
        </div>

    );
};

export default CartItems;