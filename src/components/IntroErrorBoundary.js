import React from 'react';

// Catches a failed EmblemLoader chunk load (e.g. a stale cached index.html
// requesting a chunk name from before the latest deploy) so the homepage
// still renders instead of the whole React root unmounting.
export default class IntroErrorBoundary extends React.Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onComplete();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
