import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            GRAM<span className="text-red-600">30</span>
          </a>
          <div className="flex space-x-8">
            <a href="#product" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Продукт
            </a>
            <a href="#advantages" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Заказать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Базовая линейка</p>
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              30
              <br />
              ГРАММ
            </h1>
            <p className="text-xl max-w-xl">
              Концентрированная формула в компактной упаковке. Точная дозировка, максимальный эффект — всё, что нужно, без лишнего.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Получить предложение
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-black flex items-center justify-center">
              <span className="text-white text-9xl font-bold tracking-tighter">30g</span>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ПРОДУКТ</h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl">Базовая линейка — 30 граммов точно выверенного состава в каждой упаковке</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">30г — идеальный объём</h3>
              <p className="text-neutral-400">Оптимальная фасовка для одного курса применения. Не переплачиваете за лишнее — получаете ровно столько, сколько нужно.</p>
            </div>

            {/* Feature 2 */}
            <div className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <Icon name="FlaskConical" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Концентрированный состав</h3>
              <p className="text-neutral-400">Высокая концентрация активных компонентов в каждом грамме. Никаких наполнителей — только рабочая формула.</p>
            </div>

            {/* Feature 3 */}
            <div className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрый результат</h3>
              <p className="text-neutral-400">Формула оптимизирована для максимального усвоения. Первый эффект — уже в первые дни применения.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ПРЕИМУ-<br />ЩЕСТВА</h2>
              <div className="aspect-[4/5] bg-black relative mb-8 md:mb-0 flex items-center justify-center">
                <span className="text-white text-8xl font-bold">30g</span>
                <div className="absolute top-8 left-8 right-8 bottom-8 border border-red-600"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-10">
                Мы сделали то, что конкуренты обходят стороной — создали продукт без компромиссов в компактной форме 30г.
              </p>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Без балласта", desc: "Конкуренты разбавляют состав наполнителями. В нашем продукте каждый грамм работает." },
                  { num: "02", title: "Точная дозировка", desc: "30г — не случайное число. Это выверенный объём для полного курса без остатка и дефицита." },
                  { num: "03", title: "Удобство хранения", desc: "Компактная упаковка легко помещается в сумку. Вы всегда с продуктом — дома, в командировке, в поездке." },
                  { num: "04", title: "Выгодная цена", desc: "Меньший объём — ниже стоимость входа. Попробуйте без риска перед покупкой большой партии." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6 border-b border-neutral-200 pb-6">
                    <span className="text-red-600 font-bold text-sm">{item.num}</span>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Killer Features Section */}
      <section className="py-20 px-4 md:px-8 bg-neutral-50">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ФИШКИ</h2>
          <p className="text-neutral-500 text-lg mb-12">То, за что нас выбирают снова и снова</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "Shield", title: "Сертифицированный состав", desc: "Продукт прошёл лабораторную проверку. Документы предоставляются по запросу." },
              { icon: "Truck", title: "Быстрая доставка", desc: "Отправка в день заказа. Курьер или самовывоз — как удобно вам." },
              { icon: "RefreshCw", title: "Программа лояльности", desc: "Постоянные клиенты получают скидки и приоритетное обслуживание." },
              { icon: "HeadphonesIcon", title: "Поддержка 7 дней в неделю", desc: "Консультируем по применению и подбору дозировки под ваши задачи." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-neutral-200 p-8 flex gap-6 hover:border-black transition-colors">
                <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ЗАКАЗАТЬ</h2>
              <p className="text-xl mb-8">Оставьте заявку — мы свяжемся с вами в течение 30 минут и ответим на все вопросы.</p>
              <div className="space-y-4 mt-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <Icon name="Clock" size={16} className="text-white" />
                  </div>
                  <span>Ответ за 30 минут в рабочее время</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <Icon name="PackageCheck" size={16} className="text-white" />
                  </div>
                  <span>Минимальный заказ — 1 упаковка 30г</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <Icon name="Truck" size={16} className="text-white" />
                  </div>
                  <span>Доставка по всей России</span>
                </div>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                    <Icon name="Check" size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Заявка принята!</h3>
                  <p className="text-white/80">Мы свяжемся с вами в течение 30 минут.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white"
                      placeholder="ivan@company.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white resize-none"
                      placeholder="Объём заказа, вопросы..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full"
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2026 GRAM30. Базовая линейка. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              WhatsApp
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Заказать
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
