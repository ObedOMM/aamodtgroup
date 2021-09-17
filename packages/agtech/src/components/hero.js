import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';
import arrow from '../images/arrow_right.svg';
import arrowWhite from '../images/arrow_right_white.svg';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <div className="wp-block-section__inner-container">
                    <h1>
                        Aamodt Group - Consultants in development and operations
                    </h1>
                    <p>
                        We help you with all your needs in development and
                        operation.
                    </p>
                </div>
            </HeroContainer>
        </>
    );
};

export default connect(Hero);

const HeroContainer = styled.div`
    background-color: #0077b5;
    height: calc(100vh - (47px * 2));
    width: 100%;
    margin: 47px 2rem;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        margin: 47px 7px;
        height: auto;
        padding: 4rem 0;
    }

    h1 {
        font-family: recoleta;
        font-weight: 500;
        margin-bottom: 1rem;
        color: #fff;
    }

    p {
        color: #fff;
        margin-bottom: 2rem;
    }

    .buttons .wp-block-button__link {
        margin-bottom: 1rem;
        margin-right: 2rem;
        position: relative;

        &.underline {
            background: transparent;
            color: var(--text);
            border-radius: 0px;
            border-bottom: 2px solid var(--text);
            padding: 0;
            padding-right: 1.875em;
            padding-bottom: 0.375em;
            font-size: 0.875rem;

            :after {
                content: '';
                position: absolute;
                top: 0.15rem;
                right: 0;
                width: 24px;
                height: 24px;
                transition: 0.25s ease;
                background-size: contain;
                background-position: 50%;
                background-repeat: no-repeat;
            }

            :hover:after {
                transform: translateX(3px);
            }
        }
    }
`;
