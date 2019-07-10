import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link><br/>
        <Link href="/internal/testing"><a>Go to TESTING</a></Link>
      </section>
    </main>
  );
}

export default Index;
