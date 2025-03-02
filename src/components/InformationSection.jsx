import MainLink from "./MainLink";
import SocialMedia from "./SocialMedia";
import styles from "./InformationSection.module.css";

export default function InformationSection({
  children,
  greenHeader,
  mainHeader,
  mainHeaderGreen,
  paragraph,
}) {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.information_section_wrapper}>
            <div className={styles.text_container}>
              <h3 className="green-header">{greenHeader}</h3>
              <h1 className="large-header" style={{ marginBottom: "0.5em" }}>
                {mainHeader}
                <span className="color-green"> {mainHeaderGreen}</span>
              </h1>
              <p className="paragraph">{paragraph}</p>
            </div>
            <div className={styles.information_container}>{children}</div>
          </div>

          <div className={styles.link_container}>
            <MainLink />
            <SocialMedia />
          </div>
        </div>
      </section>
    </>
  );
}
