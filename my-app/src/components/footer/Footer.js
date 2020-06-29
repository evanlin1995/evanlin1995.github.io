import React, { Component } from 'react';
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: block;
  width: 100%;
  height: 50px;
  color: white;
`;

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div>
                    {/*Footer component*/}
                </div>
            </StyledFooter>
        )
    }
}

export default Footer;