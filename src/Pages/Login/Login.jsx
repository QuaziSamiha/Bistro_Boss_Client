import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

function Login() {
  const captchaRef = useRef(null);
  const [loginDisable, setLoginDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setLoginDisable(false);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-base-200 my-28 px-12">
        <div className="flex flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem culpa veniam pariatur dolor atque necessitatibus,
              blanditiis in at ad iste.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="mt-2">
                <label>
                  <span>Email</span> <br />
                </label>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="mt-2">
                <label>
                  <span>Password</span> <br />
                </label>
                <input type="text" name="password" placeholder="password" />
              </div>
              <div className="mt-2">
                <label>
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type the text above"
                />
                <br />
                <button onClick={handleValidateCaptcha} className="mt-2">
                  Validate
                </button>
              </div>
              <div className="mt-6">
                <input disabled={loginDisable} type="submit" value="Login" />
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;