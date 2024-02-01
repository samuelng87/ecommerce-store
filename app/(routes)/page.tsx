import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";


export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })

  // copy the API from billboard CMS
  const billboard = await getBillboard("f63237d0-02ec-4214-a317-01958e220c57");
  
  return (
    <Container>
      <div className="space-y-10 pb-10 pt-24">
        <Billboard data={billboard}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
      </div>
    </Container>
  )
}

export default HomePage