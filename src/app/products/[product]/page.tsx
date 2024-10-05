import Heading from "../../../../components/heading";

function ProductPage({ params }: { params: { product: string } }) {
    console.log(params.product);
    return (
      <div>
        <Heading name="Product Details via Dynamic Routes..." />
        <p>{params.product}</p>
      </div>
    );
  }
  export default ProductPage