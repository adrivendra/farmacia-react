import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="w-full bg-violet-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">
            Farmacia do Adriano
          </div>

          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <div className="hover:underline">Produtos</div>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
