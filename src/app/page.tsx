import { Products } from '@/components/products'

export default function Home() {
  return (
    <div className="content-container">
      <section id="products" className="py-12 bg-background">
        <div className="px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              我的产品
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              精心打造的产物，希望你会喜欢
            </p>
          </div>

          <Products />
        </div>
      </section>
    </div>
  )
}
