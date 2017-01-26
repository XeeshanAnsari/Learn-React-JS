class ClickCounterButton extends React.Component {
         render() {
                  return React.createElement(
                           "button",
                           {
                                    onClick: this.props.handler },
                           "Increase Volume (Current volume is ",
                           this.props.counter,
                           ")"
                  );
         }
}
