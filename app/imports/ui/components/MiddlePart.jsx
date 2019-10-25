import React from 'react';
import { Grid } from 'semantic-ui-react';


export default class MiddlePart extends React.Component {

  render() {
    return (
        <div>
          <Grid container className="middleText">
            <Grid.Row className ="text01">
              Fall Winter - 2019 PT 03
            </Grid.Row>
            <Grid.Row className="text02">
              Explore the new collection
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}
