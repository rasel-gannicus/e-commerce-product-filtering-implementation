import FilterSidebar from "./_container/FilterSidebar";
import Header from "./_container/Header";
import ProductGrid from "./_container/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Shop Electronics</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </main>
    </>
  );
}
