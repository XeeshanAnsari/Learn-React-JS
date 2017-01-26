class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter1: 0,
            counter2: 0
        };
    }
    hendlerClick(event) {
        this.setState({ counter1: ++this.state.counter1 });
    }
    hendlerMouseOver(event) {
        this.setState({ counter2: ++this.state.counter2 });
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                {
                    onClick: this.hendlerClick.bind(this) },
                'You Clicked me ',
                this.state.counter1,
                ' times!'
            ),
            React.createElement(
                'button',
                {
                    onMouseOver: this.hendlerMouseOver.bind(this) },
                'You Mouse Overed me ',
                this.state.counter2,
                ' times!'
            )
        );
    }
}
ReactDOM.render(React.createElement(Context, null), document.getElementById('content'));
