export function FormLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Bem-vindo ao nosso notepad.
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Explore nosso Notepad feito em React, com menu appbar lateral
        customizado e darkmode!
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Saiba Mais
      </button>
    </div>
  );
}
