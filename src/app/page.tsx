import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Добро пожаловать!</h1>
          <p className="text-lg text-gray-700">
            Это демонстрация таблицы с сортировкой и редактированием данных.
          </p>
        </header>

        <section className="w-full hover:shadow-inner max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Функционал</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Сортировка по статусу (активный/закрытый)</li>
            <li>Сортировка по дате публикации</li>
            <li>Возможность редактирования текста и статуса</li>
            <li>Адаптивный дизайн</li>
            <li>Возможность увеличить высоту ячейки зажатием мыши</li>
          </ul>
        </section>

        <section className="mt-8 flex  w-11/12 items-center justify-between">
          <Link
            className="px-4 py-2 hover:bg-gray-500 bg-gray-700 text-white rounded-md transition-colors duration-300"
            href={"/pages"}
          >
            pages
          </Link>
          <Link
            className="px-4 py-2 hover:bg-gray-500 bg-gray-700 text-white rounded-md transition-colors duration-300"
            href={"/price-plans"}
          >
            price-plans
          </Link>
          <Link
            className="px-4 py-2 hover:bg-gray-500 bg-gray-700 text-white rounded-md transition-colors duration-300"
            href={"/products"}
          >
            products
          </Link>
        </section>
      </div>
    </main>
  );
}
