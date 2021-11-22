import React from 'react'

const withSetHeight = (WrappedComponent, targetHeight) => {
	class WithSetHeight extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				height: targetHeight
			}
		}

		updateHeight = (event) => {
			this.setState({height: event.target.value})
		}

        render() {
            console.log(this.state.height)
            return (
                    <WrappedComponent
                        height={this.state.height}
                        updateHeight={this.updateHeight}
                    />
            )
        }
	}
	return WithSetHeight
}

export default withSetHeight