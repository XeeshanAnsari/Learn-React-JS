class ClickCounterButton extends React.Component {
      render() {
         return <button
                  onClick={this.props.handler}>
                  Increase Volume (Current volume is {this.props.counter})
                 </button>
         }
}
