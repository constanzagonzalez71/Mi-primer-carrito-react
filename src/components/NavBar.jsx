import Logo from '/Multimedia/logo.png'; // Importa la imagen del logo
import  CartWidget from  "/Multimedia/carrito.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="Amigurumis By coni">
          <img src={Logo} alt="Logo Amigurumis by Coni" style={{ width: '100px' }} />
          Amigurumis by Coni
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="Index">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Category">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Cursos">Cursos</a>
            </li>
          </ul>
        </div>

        {/* Carrito a la izquierda */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link position-relative" href="#">
              
          <img src={CartWidget} alt="Carrito de Compras" style={{ width: '50px', height: '50px' }} />

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ transform: 'translate(10%, -30%)' }}>
                3 {/* Número de artículos */}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
