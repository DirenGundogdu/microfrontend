import { useEffect, useRef } from 'react'
import './App.css'

// @ts-ignore
import { mountProducts } from 'products_app/Products'
// @ts-ignore
import { mountCart } from 'cart_app/Cart'



function App() {
  const productsRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (productsRef.current) {
      const unmountVue = mountProducts(productsRef.current)

      return () => {
        if (unmountVue) {
          unmountVue()
        }
      }
    }
  }, [])

  useEffect(() => {
    if (cartRef.current) {
      mountCart(cartRef.current)
    }
  }, [])


  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1> Microfrontend </h1>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', alignItems: 'flex-start' }}>

        <div style={{ flex: 2 }}>
          <div ref={productsRef}></div>
        </div>

        <div style={{ flex: 1, position: 'sticky', top: '2rem' }}>
          <div ref={cartRef}></div>
        </div>

      </div>
    </div>
  )
}

export default App