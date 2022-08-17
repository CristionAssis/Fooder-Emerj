import React from "react";
import styled from "styled-components";

const Container = styled.div`
    .footer {
        background-color: #0c344c;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #fefefe;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
    .footer a {
        color: #fefefe;
        text-decoration: none;
    }

    `;

const Footer = () => {
    return (
        <Container>
            <footer className="footer">
                <div className="container">
                    <div className="content">
                        <p>
                        <strong>Fooder</strong> by <a href="https://www.emerj.com.br/site/" target="_blank">EMERJ</a>. The source code is licensed <a href="" target="_blank">MIT</a>. The website content is licensed <a href="" target="_blank">CC BY 4.0</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;