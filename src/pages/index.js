import { ClosedFolder } from "../components/ClosedFolder";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olá Senhor(a) Verissimo</title>
        <meta name="description" content="Nós vemos muito em breve" />
      </Head>

      <section className="fixed h-screen w-screen bg-zinc-900/90 flex flex-col justify-center items-center gap-4">
        <span className="text-6xl font-bold text-zinc-100">Em Construsão</span>
        <p className="w-[900px] text-zinc-300 text-3xl text-balance text-center">
          Eu Agradesso a paciencia e consideração de todos
          o projeto ainda esta em fase de desenvolvimento
          e logo vocês conseguiram usar o SICE para
          gerenciar as fichas do seus Agentes.
        </p>
      </section>

      <main className="min-h-lvh min-w-full absolute -z-10 py-10 md:py-0 gap-10 bg-zinc-800 flex flex-col justify-evenly md:justify-around items-center">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center">

          <Link href="/login">
            <ClosedFolder />
          </Link>
        </div>
        <div className="flex  md:fixed md:bottom-10 md:left-1/2 md:-translate-x-1/2 z-50 text-white text-xs md:text-base">
          🤍 Powered by <span className="font-bold">CosmuxLabs</span>
        </div>
      </main>
    </>
  )
}