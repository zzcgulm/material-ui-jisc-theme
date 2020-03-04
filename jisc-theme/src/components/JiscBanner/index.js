import React from 'react';
import Container from '@material-ui/core/Container';

const JiscBanner = () => {
  return (
    <div class="jiscBanner">
      <Container>
        <div class="jiscBanner-Inner">

          <a class="jiscBanner-Brand" href="https://www.jisc.ac.uk/" title="Go to the Jisc homepage">
            <img class="jiscBanner-Brand_Img" src="TODO" alt="Jisc logo" />
          </a>

          <p class="jiscBanner-Login">
            <span class="jiscBanner-Login_Heading">Jisc login:</span>
            <a class="jiscBanner-Login_Link" href="TODO">Log in</a>
          </p>

        </div>
      </Container>
    </div>
  );
}

export default JiscBanner;
