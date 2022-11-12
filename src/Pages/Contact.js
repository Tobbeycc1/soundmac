import Footer from "../Pages/Home Page/HomePage Utilities/Footer";
import classes from "../CSS files/Contact.module.css";
import helpAndThanksImage from "../images/help and thanks.png";
function Contact(props) {
  return (
    <div className={classes.ContactCon}>
      <img
        src={helpAndThanksImage}
        alt={helpAndThanksImage}
        className={classes.helpAndThanksImage}
      />

      <div className={classes.ContactFormCon}>
        <diV className={classes.ContactFormSubCon}>
          <h1 className={classes.dropA}>DROP A MESSAGE FOR US </h1>
          <p className={classes.weWould}>
            {" "}
            we would respond to you as swift as a cheetah
          </p>

          <form>
            <label className={classes.contactFormLabel}>
              Your Full Name{" "}
              <span className={classes.contactFormLabelItalics}>
                (Surname Other name First name)
              </span>
            </label>
            <br />
            <input
              className={classes.contactFormInput}
              placeholder="Enter your full name "
              type={"text"}
            />

            <label className={classes.contactFormLabel}>E-mail Address</label>
            <br />
            <input
              className={classes.contactFormInput}
              placeholder="Enter your e-mail address "
              type={"text"}
            />

            <label className={classes.contactFormLabel}>Your Message</label>
            <br />
            <textarea
              className={classes.contactFormTextArea}
              placeholder="Enter your message  "
            />

            <div className={classes.contactFormBtnCon}>
              <button className={classes.contactFormBtn}>Submit</button>
            </div>
          </form>
        </diV>
      </div>

      <Footer />
    </div>
  );
}
export default Contact;
