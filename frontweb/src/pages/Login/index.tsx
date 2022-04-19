import { ReactComponent as MainImage } from 'assets/images/banner.svg';

import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const Login = () => {
  return (
    <div className="page-container">
      <div className="login-page">
        <div className="banner-container">
          <div className="banner-header">
            <h1>Avalie Filmes</h1>
          </div>
          <div className="banner-text">
            <h4>Diga o que você achou do seu filme favorito</h4>
          </div>
          <div className="banner-image">
            <MainImage className="image"></MainImage>
          </div>
        </div>

        <div className="base-card login-card">
          <h1>LOGIN</h1>
          <form className="form-container">
            <div className="mb-4">
              <input
                type="text"
                className="form-control base-input"
                placeholder="Email"
                name="username"
              />
              <div className="invalid-feedback d-block"></div>
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control base-input"
                placeholder="Senha"
                name="password"
              />
              <div className="invalid-feedback d-block"></div>
            </div>

            <div className="login-submit">
              <ButtonIcon text="Fazer login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
