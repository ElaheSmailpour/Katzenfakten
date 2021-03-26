import React from 'react'
import { connect } from 'react-redux'
import {holeKatzenfakten} from "../thunks/katzenthunk"
class KatzenFakten extends React.Component {
    
    componentDidMount(){
        this.props.holeKatzenfakten()
    }
    render() {
        return (
            <div className="KatzenFakten">
              { this.props.fehler ? 
            <p className="fehler">{this.props.grund}</p>
            : 
            <p className="fakt">{this.props.fakt}</p>
            }
                

                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fakt: state.fakt,
    grund: state.grund,
    fehler: state.fehler
})

export default connect(mapStateToProps, {holeKatzenfakten})(KatzenFakten)