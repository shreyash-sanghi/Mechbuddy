import React from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import Locationtoggle from '../components/Navbars/Locationtoggle'
class Locationdialog extends React.Component {
  

  
  render() {
    return (
      <div>
        {/* <button onClick={this.openBox}>Open ReactDialogBox </button> */}

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
              headerBackgroundColor='red'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              headerText='Title'
            >
              <div>
                <Locationtoggle></Locationtoggle>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default Locationdialog