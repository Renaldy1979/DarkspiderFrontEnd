import { shade } from 'polished';
import styled from 'styled-components';

import {
  IoCheckmarkCircleSharp,
  IoAlertCircleSharp,
  IoChatboxEllipses,
} from '../../styles/icons';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Container = styled.div`
  background: var(--white);
  // box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  button {
    font-size: 14px;
    padding: 10px;
    color: var(--white);
  }

  .vertical-timeline * {
    box-sizing: border-box;
  }

  .vertical-timeline {
    :before {
      /* this is the vertical line */
      content: '';
      position: absolute;
      top: 32px;
      left: 18px;
      height: 92%;
      width: 0px;
      border-right: 1px dashed var(--gray);
    }
    margin: 0 auto;
    position: relative;
    padding: 2em 0;
    width: 100%;
    :after {
      /* clearfix */
      content: '';
      display: table;
      clear: both;
    }
  }

  .vertical-timeline.vertical-timeline--one-column-right::before {
    right: 18px;
    left: unset;
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns {
      width: 90%;
    }
    .vertical-timeline.vertical-timeline--two-columns:before {
      left: 50%;
      margin-left: -2px;
    }
  }

  .vertical-timeline-element {
    position: relative;
    margin: 2em 0;
  }
  .vertical-timeline-element > div {
    min-height: 1px;
  }
  .vertical-timeline-element:after {
    content: '';
    display: table;
    clear: both;
  }
  .vertical-timeline-element:first-child {
    margin-top: 0;
  }
  .vertical-timeline-element:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline-element {
      margin: 2em 0;
    }
    .vertical-timeline-element:first-child {
      margin-top: 0;
    }
    .vertical-timeline-element:last-child {
      margin-bottom: 0;
    }
  }

  .vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .vertical-timeline--one-column-right .vertical-timeline-element-icon {
    right: 0;
    left: unset;
  }

  .vertical-timeline-element-icon svg {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -12px;
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns .vertical-timeline-element-icon {
      width: 60px;
      height: 60px;
      left: 50%;
      margin-left: -30px;
    }
  }

  /* Icon animations */
  .vertical-timeline-element-icon {
    /* Force Hardware Acceleration in WebKit */
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  .vertical-timeline--animate .vertical-timeline-element-icon.is-hidden {
    visibility: hidden;
  }
  .vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }

  @-webkit-keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.5);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale(1.2);
    }

    100% {
      -webkit-transform: scale(1);
    }
  }
  @-moz-keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      -moz-transform: scale(0.5);
    }

    60% {
      opacity: 1;
      -moz-transform: scale(1.2);
    }

    100% {
      -moz-transform: scale(1);
    }
  }
  @keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
    }

    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
  .vertical-timeline-element-content {
    position: relative;
    margin-left: 50px;
    background: var(--sucess);
    border-radius: 0.25em;
    padding: 10px 0.5em 0.5em 0.5em;

    p {
      margin: 0.5em 0 0;
    }
  }

  .vertical-timeline--one-column-right .vertical-timeline-element-content {
    margin-right: 60px;
    margin-left: unset;
  }

  .vertical-timeline-element--no-children .vertical-timeline-element-content {
    background: transparent;
    box-shadow: none;
  }
  .vertical-timeline-element-content:after {
    content: '';
    display: table;
    clear: both;
  }
  .vertical-timeline-element-content h2 {
    color: #303e49;
  }
  .vertical-timeline-element-content p,
  .vertical-timeline-element-content .vertical-timeline-element-date {
    font-size: 13px;
    font-size: 0.8125rem;
    font-weight: 500;
  }
  .vertical-timeline-element-content .vertical-timeline-element-date {
    display: inline-block;
  }
  .vertical-timeline-element-content p {
    margin: 1em 0 0;
    line-height: 1.6;
  }

  .vertical-timeline-element-title {
    margin: 0;
    font-weight: 400;
    color: var(--text-body-dark);
  }

  .vertical-timeline-element-subtitle {
    margin: 0;
  }

  .vertical-timeline-element-date {
    padding: 0;
  }
  .vertical-timeline-element-work {
    p {
      font-weight: 300;
    }
    h1 {
      color: var(--text-body-dark);
    }
  }

  .vertical-timeline-element-content .vertical-timeline-element-date {
    float: left;
    padding-top: 10px;
    opacity: 0.7;
  }
  .vertical-timeline-element-content-arrow {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid white;
  }

  .vertical-timeline--one-column-right
    .vertical-timeline-element-content-arrow {
    content: '';
    position: absolute;
    top: 16px;
    right: unset;
    left: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-left: 7px solid white;
  }

  .vertical-timeline--one-column-right
    .vertical-timeline-element-content::before {
    left: 100%;
    border-left: 7px solid white;
    border-right: unset;
  }

  .vertical-timeline-element--no-children
    .vertical-timeline-element-content::before {
    display: none;
  }

  .vertical-timeline-element--no-children
    .vertical-timeline-element-content-arrow {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .vertical-timeline-element-content h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }
    .vertical-timeline-element-content p {
      font-size: 16px;
      font-size: 1rem;
    }
    .vertical-timeline-element-content .vertical-timeline-element-date {
      font-size: 14px;
      font-size: 0.875rem;
    }
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns .vertical-timeline-element-content {
      margin-left: 0;
      padding: 1.5em;
      width: 44%;
    }
    .vertical-timeline--two-columns .vertical-timeline-element-content-arrow {
      top: 24px;
      left: 100%;
      transform: rotate(180deg);
    }

    .vertical-timeline--two-columns
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      position: absolute;
      width: 100%;
      left: 124%;
      top: 6px;
      font-size: 16px;
      font-size: 1rem;
    }

    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content,
    .vertical-timeline--two-columns
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content {
      float: right;
    }
    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content-arrow,
    .vertical-timeline--two-columns
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content-arrow {
      top: 24px;
      left: auto;
      right: 100%;
      transform: rotate(0deg);
    }

    .vertical-timeline--one-column-right
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content-arrow,
    .vertical-timeline--one-column-right
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content-arrow {
      top: 24px;
      left: 100%;
      right: auto;
      transform: rotate(0deg);
    }

    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content
      .vertical-timeline-element-date,
    .vertical-timeline--two-columns
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      left: auto;
      right: 124%;
      text-align: right;
    }
  }

  /* Box animations */
  .vertical-timeline--animate .vertical-timeline-element-content.is-hidden {
    visibility: hidden;
  }
  .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }

  @media only screen and (min-width: 1170px) {
    /* inverse bounce effect on even content blocks */
    .vertical-timeline--two-columns.vertical-timeline--animate
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content.bounce-in,
    .vertical-timeline--two-columns.vertical-timeline--animate
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content.bounce-in {
      -webkit-animation: cd-bounce-2-inverse 0.6s;
      -moz-animation: cd-bounce-2-inverse 0.6s;
      animation: cd-bounce-2-inverse 0.6s;
    }
  }

  @media only screen and (max-width: 1169px) {
    .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
      visibility: visible;
      -webkit-animation: cd-bounce-2-inverse 0.6s;
      -moz-animation: cd-bounce-2-inverse 0.6s;
      animation: cd-bounce-2-inverse 0.6s;
    }
  }

  @-webkit-keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-100px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(20px);
    }

    100% {
      -webkit-transform: translateX(0);
    }
  }
  @-moz-keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      -moz-transform: translateX(-100px);
    }

    60% {
      opacity: 1;
      -moz-transform: translateX(20px);
    }

    100% {
      -moz-transform: translateX(0);
    }
  }
  @keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-100px);
      -moz-transform: translateX(-100px);
      -ms-transform: translateX(-100px);
      -o-transform: translateX(-100px);
      transform: translateX(-100px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }

    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @-webkit-keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      -webkit-transform: translateX(100px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(-20px);
    }

    100% {
      -webkit-transform: translateX(0);
    }
  }
  @-moz-keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      -moz-transform: translateX(100px);
    }

    60% {
      opacity: 1;
      -moz-transform: translateX(-20px);
    }

    100% {
      -moz-transform: translateX(0);
    }
  }
  @keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      -webkit-transform: translateX(100px);
      -moz-transform: translateX(100px);
      -ms-transform: translateX(100px);
      -o-transform: translateX(100px);
      transform: translateX(100px);
    }

    60% {
      opacity: 1;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .type-description {
    margin-top: 10px;
    text-transform: uppercase;
    border-radius: 10rem;
    font-size: 66%;
    font-weight: 500;
    line-height: 1;
    display: inline-block;
    padding: 0.5rem 0.5rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }
  #creater {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 4px;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    color: var(--text-body-dark);
    cursor: pointer;
    transition: all 300ms linear;
    svg {
      height: 20px;
      width: 20px;
    }
    :hover {
      background: ${shade(0.4, '#fff')};
    }
  }
`;

export const IconChangeStatus = styled(IoCheckmarkCircleSharp)``;
export const IconAlertStatus = styled(IoAlertCircleSharp)``;
export const IconDefaultStatus = styled(IoChatboxEllipses)``;
