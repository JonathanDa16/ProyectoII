import './Login.css';

function Login() {
  return (
    <div class="container">
        <div class="left"></div>
        <div class="right">
          <form>
            <h1>Inicio de sesión</h1>
            <div className="form-group">
              <label>Correo electronico</label>
              <input type="email"></input>
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password"></input>
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
    </div>
  );
}
export { Login };
