import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Logo from '../../components/logo/logo.tsx';
import Footer from '../../components/footer/footer.tsx';
import { useAppDispatch } from '../../hooks/app-hooks.ts';
import { loginAction } from '../../redux/api-actions.ts';
import { AppRoute } from '../../const.ts';
import { UserFormValues } from '../../types/index.ts';

function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormValues>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleValidate = (newFormData: UserFormValues) => {
    const validated =
      newFormData.email.match(/[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]{2,4}$/) &&
      newFormData.password.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/);
    setIsValid(!!validated);
  };

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;

    setFormData(() => {
      const newFormData: UserFormValues = { ...formData, [name]: value };
      handleValidate(newFormData);
      return newFormData;
    });
  };

  const handleSubmit: FormEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
    navigate(AppRoute.Main);
  };

  const TITLE = 'WTW. Sign In';

  return (
    <div className="user-page">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={handleFieldChange}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={handleFieldChange}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onSubmit={handleSubmit} onClick={handleSubmit} disabled={!isValid}>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
