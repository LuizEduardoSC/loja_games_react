function Slide01() {
    return (
        <>
        <div className="grid grid-cols-2 bg-amber-600 text-gray-200">
          <div className="flex flex-col gap-6 items-center justify-center min-h-[85vh]">
            <h1 className="text-5xl">GamePlay!</h1>
            <p className="text-lg">A loja com os melhores produtos para sua diversão!</p>
          </div>
          <div id="imagem" className='flex justify-center'>
            <img src={"https://ik.imagekit.io/1kxsdgjy2/Loja%20de%20Games/Horror%20video%20game-pana.svg?updatedAt=1708012623808"}alt="Logo Jogo"className="w-2/3"/>
          </div>
        </div>
        </>
      )
    }

export default Slide01