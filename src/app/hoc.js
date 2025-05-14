export const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="relative">
        <Component />
      </section>
    );
  };