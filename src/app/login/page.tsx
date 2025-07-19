"use client";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import contactStyles from "./page.module.css";

import { Amplify } from "aws-amplify";
import outputs from "../../../amplify_outputs.json";
import Footer from "../components/Footer";
import Header from "../components/Header";

Amplify.configure(outputs);

function LoggedInScreen() {
  const { user, signOut } = useAuthenticator(); // ok aqui
  useEffect(() => {
    console.log(user);
  }, [user]);
  return <button onClick={signOut}>Logout</button>;
}

export default function Login() {
  // caso ainda use seu <script> externo
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/site.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />

      <div className="conteudoInterno">
        <div className="row limite">
          <div className="col-xs-12 p-5 m-5">
            <Authenticator
              // socialProviders={["google", "facebook"]}
              components={{
                Header() {
                  return (
                    <h3 className={contactStyles.boxCaseTitle}>
                      Efetuar login
                    </h3>
                  );
                },
              }}
            >
              {() => <LoggedInScreen />}
            </Authenticator>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
