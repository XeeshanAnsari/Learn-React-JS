let helloWorldContent = <h1>Hello World!!</h1>
class HelloWorld extends React.Component{
    render(){
        return <div>
        {helloWorldContent},
        {helloWorldContent}
        </div>
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
    
)


