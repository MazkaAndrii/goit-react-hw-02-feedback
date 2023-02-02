import React, { Component } from 'react';
import Section from './Feedback/Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};

class Feedback extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please, leave feedback"></Section>
        <FeedbackOptions options={options} />
      </div>
    );
  }
}
