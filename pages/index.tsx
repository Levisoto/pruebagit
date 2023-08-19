import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.flex}>
          <h1 className={styles.titulo}>LOGIN DE LEVEL STUDIO</h1>
          <div className={styles.login_box}>
            <form>
              <label htmlFor="usuario">Usuario</label>
              <input
                id="usuario"
                className={styles.login_input}
                type="text"
                placeholder="Usuario"
                required
              />
              <label htmlFor="contraseña">Contraseña</label>
              <input
                id="contraseña"
                className={styles.login_input}
                type="password"
                placeholder="Contraseña"
                required
              />
              <div className={styles.flex}>
                <label>Genero</label>
                <select className={styles.login_input}>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
              <div className={styles.flex}>
                <button className={styles.login_button} type="submit">
                  olvide mi contraseña
                </button>
                <a href="#">Iniciar sesion</a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
