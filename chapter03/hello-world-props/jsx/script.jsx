class HelloWorld extends React.Component{
    render(){
        return <h1 {...this.props}> Hello {this.props.framework} World!!!</h1>
    }
}
ReactDOM.render(
    <div>
      <HelloWorld 
      id='angular'
      framework='angular.js'
      desp='nicely framework for js'
      />
    </div>,
    document.getElementById('content')
)