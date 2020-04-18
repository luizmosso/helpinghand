import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  /* react-mobile-datepicker */
  .datepicker.default{
    max-width: 700px;
    position: relative;
    border-radius: 7px;
    margin: 10px;
  }

  .datepicker.default .datepicker-wheel {
      border: none;
      background: #4eccc4;
      color: white;
      border-radius: 5px;
  }

  .datepicker .datepicker-navbar-btn{
    color:  #127d77;
  }

  .datepicker .datepicker-navbar-btn:first-child{
    background: #4eccc4;
    border-radius: 7px;
    color: #07554f;
    font-weight: bold;
  }

  .datepicker.default .datepicker-scroll li{
    color: #07554f;
  }

  .datepicker.default .datepicker-caption-item {
    color: #07554f;
    font-weight: bold;
}
`;