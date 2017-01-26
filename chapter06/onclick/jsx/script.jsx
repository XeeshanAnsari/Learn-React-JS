class Context extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter1: 0,
            counter2: 0
        }
        
    }
    hendlerClick(event){
        this.setState ({counter1 : ++this.state.counter1})
    }
    hendlerMouseOver(event){
        this.setState ({counter2 : ++this.state.counter2})
    }
    render(){
      return(
         <div>
            <button 
             onClick={this.hendlerClick.bind(this)}>
             You Clicked me {this.state.counter1} times!
             </button>
             <button 
              onMouseOver={this.hendlerMouseOver.bind(this)}>
              You Mouse Overed me {this.state.counter2} times!
             </button>
       
         </div>          
    )
  }   
}
ReactDOM.render(
    <Context />,
    document.getElementById('content')
    
)