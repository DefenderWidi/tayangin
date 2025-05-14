import { Head } from '@inertiajs/react';

export default function Landing() {
  return (
    <>
      <Head title="Beranda - Tayang.in" />
      
      {/* NAVBAR */}
      <nav className="bg-[#1E0D66] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <h1 className="font-bold text-xl">🌐 Tayang.in</h1>
            <div className="hidden md:flex gap-4 text-sm">
              <a href="#" className="hover:underline">Esai</a>
              <a href="#" className="hover:underline">Liputan</a>
              <a href="#" className="hover:underline">Teknologi</a>
              <a href="#" className="hover:underline">Otomotif</a>
              <a href="#" className="hover:underline">Makanan</a>
              <a href="#" className="hover:underline">Kesehatan</a>
              <a href="#" className="hover:underline">Bisnis</a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Cari..."
              className="px-3 py-1 rounded-full text-black text-sm"
            />
            <button className="bg-white text-[#1E0D66] px-4 py-1 rounded-full text-sm">Masuk</button>
            <button className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm">Daftar</button>
          </div>
        </div>
      </nav>

      {/* SECTION TERPOPULER */}
      <section className="max-w-7xl mx-auto mt-8 px-4">
        <h2 className="text-xl md:text-2xl font-bold border-b-4 border-[#1E0D66] inline-block mb-4">TERPOPULER MINGGU INI</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 relative">
            <img src="https://source.unsplash.com/600x300/?food" className="w-full h-full object-cover rounded" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-sm">Liputan</p>
              <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
              <p className="text-xs mt-1">oleh Defender Widi | 20 April 2025</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-3">
                <img src={`https://source.unsplash.com/100x100/?news,${item}`} className="w-[100px] h-[100px] object-cover rounded" />
                <div>
                  <h4 className="text-md font-bold leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h4>
                  <p className="text-xs mt-1 text-gray-500">oleh Defender Widi | 20 April 2025 | Liputan</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION UNTUK ANDA */}
      <section className="max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-xl md:text-2xl font-bold border-b-4 border-[#1E0D66] inline-block mb-4">UNTUK ANDA</h2>

        <div className="flex items-center gap-2">
          <button className="text-2xl">&lt;</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4 items-center">
                <img src={`https://source.unsplash.com/150x100/?recommendation,${item}`} className="w-[150px] h-[100px] object-cover rounded" />
                <div>
                  <h4 className="text-md font-bold leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit ..</h4>
                  <p className="text-xs mt-1 text-gray-500">oleh Defender Widi | 20 April 2025 | Liputan</p>
                </div>
              </div>
            ))}
          </div>
          <button className="text-2xl">&gt;</button>
        </div>
      </section>
    </>
  );
}
