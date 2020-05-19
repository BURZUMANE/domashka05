import React, { Component, Fragment } from 'react';

import axios from 'axios';
const deleter = (props) => (WrappedComponent) => {
  return class deleter extends Component {
    state = {
      loader: false,
    };
    handleDelete(id) {}

    deleteNote = async (id) => {
      this.setState({ loader: true });
      try {
        await axios.delete(
          `https://free-cookies-for-my-niggas.firebaseio.com/contacts/${id}.json`
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    };

    render() {
      return (
        <Fragment>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <WrappedComponent {...this.props} />
            <button
              onClick={() => {
                this.deleteNote(this.props.contact.id);
              }}
            >
              x
            </button>
          </div>
        </Fragment>
      );
    }
  };
};

export default deleter;
