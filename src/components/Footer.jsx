import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className={styles.footer_wrapper}>
            <div className={styles.footer_section}>
              <h3>Bennie's Rental</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto iure ipsam aperiam dolor quod maiores dicta ea
                placeat autem consequuntur nihil molestias mollitia hic
                laudantium minus error, est voluptatum impedit.
              </p>
            </div>
            <div className={styles.footer_section}>
              <h3>Explore</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Listings</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.footer_section}>
              <h3>Links</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Listings</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.footer_section}>
              <h3>Contact</h3>
              <ul>
                <li>info@examplecorp.com</li>
                <li>+1 (800) 000-1234</li>
                <li>
                  100 Business Park Blvd, Suite 300, Metropolis, NY 10001, USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
