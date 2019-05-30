import React, { Component } from "react";
import { Grid, Placeholder, Segment } from "semantic-ui-react";

export default class RecipeCardPlaceholder extends Component {
  render() {
    return (
      <div>
        <h2>Cooking in progress..</h2>
        <div id="cooking">
          <div class="bubble" />
          <div class="bubble" />
          <div class="bubble" />
          <div class="bubble" />
          <div class="bubble" />
          <div id="area">
            <div id="sides">
              <div id="pan" />
              <div id="handle" />
            </div>
            <div id="pancake">
              <div id="pastry" />
            </div>
          </div>
        </div>
      </div>
      // <Grid columns={3} stackable>
      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>

      //   <Grid.Column>
      //     <Segment raised>
      //       <Placeholder>
      //         <Placeholder.Header image>
      //           <Placeholder.Line />
      //           <Placeholder.Line />
      //         </Placeholder.Header>
      //         <Placeholder.Paragraph>
      //           <Placeholder.Line length="medium" />
      //           <Placeholder.Line length="short" />
      //         </Placeholder.Paragraph>
      //       </Placeholder>
      //     </Segment>
      //   </Grid.Column>
      // </Grid>
    );
  }
}
