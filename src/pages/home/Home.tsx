import home from '/home/eduardo/Generation/react/LojaDeGames/src/assets/Horror video game-bro.svg'

function Home() {
    return (
      <div className="grid grid-cols-2 bg-amber-600 text-gray-200">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-5xl">GamePlay!</h1>
          <p className="text-lg">A loja dos Gamers!</p>
          <button className="rounded border-solid border-2 w-1/5 py-2 bg-slate-700 hover:border-amber-950">Novo Produto</button>
        </div>
        <div id="imagem" className='flex justify-center'>
          <img src={home}alt="Logo Jogo"className="w-2/3"/>
        </div>
      </div>
    )
  }

  export default Home