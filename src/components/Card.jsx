import '../styles/card.scss';

export default function Card() {
  return (
    <section className='card-wrap'>
      <img
        src='assets/image-header-mobile.png'
        alt='Colleagues sitting around a desk'
        className='card-hero-img-mob'
      />
      <img
        src='assets/image-header-desktop.png'
        alt='Colleagues sitting around a desk'
        className='card-hero-img-dsk'
      />
      <article className='card-txt-wrap'>
        <h1 className='card-hdn'>
          Get <span className='card-hdg-acn'>insights</span> that help your business grow.
        </h1>
        <p className='card-bdy'>
          Discover the benefits of data analytics and make better decisions regarding
          revenue, customer experience, and overall efficiency.
        </p>
        <article className='card-sta-wrap'>
          <aside className='card-sta'>
            <h2 className='card-sta-hdn'>10k+</h2>
            <h3 className='card-sta-sub'>COMPANIES</h3>
          </aside>
          <aside className='card-sta'>
            <h2 className='card-sta-hdn'>314</h2>
            <h3 className='card-sta-sub'>TEMPLATES</h3>
          </aside>
          <aside className='card-sta'>
            <h2 className='card-sta-hdn'>12M+</h2>
            <h3 className='card-sta-sub'>QUERIES</h3>
          </aside>
        </article>
      </article>
    </section>
  );
}
