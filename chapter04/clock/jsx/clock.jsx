class Clock extends React.Component{
    constructor(props){
        super(props)
        this.launchClock()
        this.state = {currentTime: ( new Date().toLocaleString())}
    }
    launchClock(){
        setInterval(()=>{
            console.log('Updating Time ... ')
            this.setState({
                currentTime:(new Date().toLocaleString())
            })
        },1000)
    }
    render(){
        console.log ('Rendering Time')
        return <div style={{color: 'blue', fontSize: '2em'}}>{this.state.currentTime}</div>
    }
} 