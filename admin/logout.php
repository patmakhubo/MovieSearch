<?php 
session_start();
session_destroy();
echo 
'
<style>
.dots-group {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: white;
    filter: contrast(20);
  }
  h1 {
    left: 50%;
    position: absolute;
    text-align: center
  }
    .dot{
      position: absolute;
      width: 16px;
      height: 16px;
      top: 12px;
      
      filter: blur(4px);
      background: #000;
      border-radius: 50%;
      transform: translateX(0);
      animation: dot 2.8s infinite;
  }
    .dots {
      transform: translateX(0);
      margin-top: 12px;
      margin-left: 31px;
      animation: dots 2.8s infinite;
    }
      span{
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-left: 16px;
        filter: blur(4px);
        background: #000;
        border-radius: 50%;
      }
  @keyframes dot {
    50%{
      transform: translateX(96px);
  }}
  @keyframes dots{
    50%{
      transform: translateX(-31px);
    }}
</style>
<div class="dots-group">
  <span class="dot"></span>
  <div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
';
header("Refresh:5; index.html");
