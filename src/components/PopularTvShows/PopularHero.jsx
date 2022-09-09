const PopularHero = () => {
  return (
    <main className="bg-backdrop-home h-[500px] bg-cover bg-center">
      <div className="overlay-gradient bg-gradient-to-r from-gray-900  to-transparent">
        <div className="container mx-auto flex h-[500px] flex-col justify-center">
          <p className="font-exo2 w-fit rounded-full bg-gray-800/70 px-4 py-2 text-xs uppercase italic text-gray-400 drop-shadow-lg">
            You'll like her when she's angry
          </p>
          <h1 className="font-exo2 my-4 text-6xl font-bold text-gray-100 shadow-red-600/50 drop-shadow-xl">
            She-Hulk: Attorney at Law
          </h1>
        </div>
      </div>
    </main>
  );
};

export default PopularHero;
