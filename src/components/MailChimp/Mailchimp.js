import React from "react"
import PropTypes from "prop-types";

class Mailchimp extends React.Component {
  state = {};

  render() {
    const { fields, className } = this.props;   //const { fields, styles, className, buttonClassName } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages
    }
    const { status } = this.state;
    return (
      <form className={className}>
        <div className="subscribe__input">
            {fields.map(input =>
            <input className="subscribe__text"
                {...input}
                key={input.name}
                onChange={({ target }) => this.setState({ [input.name]: target.value })}
                defaultValue={this.state[input.name]}
            />
            )}
            <button
            disabled={status === "sending" || status === "success"}
            type="submit"
            className="subscribe__button"
            >
            {(status === "success") ? "Subscribed" : "Subscribe"}
            </button>

            <div className="subscribe__alert">
              <div className="subscribe__error">
                {status === "duplicate" && <p>{messages.duplicate}</p>}
                {status === "empty" && <p>{messages.empty}</p>}
                {status === "error" && <p>{messages.error}</p>}
              </div>
              <div className="subscribe__success">
                {status === "sending" && <p>{messages.sending}</p>}
                {status === "success" && <p>{messages.success}</p>}
              </div>
            </div>
        </div>
      </form>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Subscribing",
    success: "Thank you for subscribing to Tiber Learning!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe"
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      color: "#0652DD"
    },
    successMsg: {
      color: "#009432"
    },
    duplicateMsg: {
      color: "#EE5A24"
    },
    errorMsg: {
      color: "#ED4C67"
    }
  }
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string
};

export default Mailchimp;