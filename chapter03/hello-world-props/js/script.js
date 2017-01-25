class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            ' Hello ',
            this.props.framework,
            ' World!!!'
        );
    }
}
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {
        id: 'angular',
        framework: 'angular.js',
        desp: 'nicely framework for js'
    })
), document.getElementById('content'));
