"use client"

import CartItem from "@/app/(routes)/cart/components/cart-item";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null;
    }

  return (
    <div className="pt-20 bg-white">
        <Container>
            <div className="px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                {cart.items.length >= 2 && <p className="text-neutral-500 pt-2">Your have added {cart.items.length} items in your cart</p>}
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                    {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}

                    <ul>
                    {cart.items.map((item) => (
                        <CartItem key={item.id} data={item} />
                        ))}
                    </ul>

                    </div>
                    <Summary/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CartPage 