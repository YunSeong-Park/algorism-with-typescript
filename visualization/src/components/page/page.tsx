import React, { useState } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [menu, setMenu] = useState("fibonacci");
  return (
    <section>
      <header>
        <h2>{menu}</h2>
      </header>
      <section>
        <aside></aside>
        <main></main>
      </section>
      <footer></footer>
    </section>
  );
};
