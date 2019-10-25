import React from 'react';
import { Grid, List } from 'semantic-ui-react';


export default class Footer extends React.Component {

  render() {
    return (
        <div className="footer-background">
          <Grid columns="five">
            <Grid.Column width={4}>
              <b>About</b>
              <List>
                <List.Item>Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating over-accessorized
                  branding and focusing primarily on letting the quality of the product speak for itself. Read
                  more
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b> Address</b>
              <List>
                <List.Item>Singel 465</List.Item>
                <List.Item>1012 WP Amsterdam</List.Item>
                <List.Item>The Netherlands</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b> Contact</b>
              <List>
                <List.Item>Email us</List.Item>
                <List.Item>+31 (0) 202 615 614</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b>Info</b>
              <List>
                <List.Item>Shipping info</List.Item>
                <List.Item>Contact</List.Item>
                <List.Item>Careers</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b>Follow us</b>
              <List>
                <List.Item>Instagram</List.Item>
                <List.Item>Facebook</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
