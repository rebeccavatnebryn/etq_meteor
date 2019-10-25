import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


export default class MiddlePartTwo extends React.Component {

  render() {
    return (
        <div className="threePics">
          <Grid container verticalAlign="middle">
            <Grid.Row columns="three">
              <Grid.Column>
                <Image
                    src="
                 https://www.etq-amsterdam.com/wp-content/uploads/2019/08/low-1-white-fitpic-1x1-816x816-c-default.jpg"
                    alt="pic1"/>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://www.etq-amsterdam.com/wp-content/uploads/2019/09/1568624438.jpg" alt="pic1"/>
              </Grid.Column>
              <Grid.Column>
                <Image
                    src="
                 https://www.etq-amsterdam.com/wp-content/uploads/2019/07/96A3122-e1565613801664-816x816-c-default.jpg"
                    alt="pic1"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
