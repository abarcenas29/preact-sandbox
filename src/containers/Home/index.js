import { h, Component } from 'preact'
import { Grid, Header } from 'semantic-ui-react'

export default class Home extends Component {
  render () {
    return (
      <Grid>
        <Grid.Column width={16}>
          <Header as='h1'>
            This is the header
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}
