import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Init" />
    

    <h1>Initial Commit</h1>
    <h2>What is Spire</h2>
    <p>Another learning blog. Just trying to learn a bit of everything (or anything). They say learning through writing is the fastest way. Or was it learning through teaching. </p>
    <p>The name Spire is inspired by the game Slay The Spire. The idea of trying to get to the top, failing and trying again is probably
      the closest to the principles of success overall and learning something useful in particular.</p>
    <p>For my first attempt, or better called run, I will try to get into the world of quants. A bit of python, a bit of finances, a bit of data science.
      Should be useful and maybe even help me build a good portfolio. Both stocks and resume kind.</p>
    <p>Also gatsby and writing. Why limit yourself to just one overly complicated task when you can fail at four at a time. 
      The sooner you fail the sooner you can get to wailing in self-pity and I got no time to waste.</p>    
    <h2>Python and Finances First Step</h2>
    <p>Apparently being quant is super easy! Just go to <a href="https://www.quantopian.com">Quantopian</a>! </p>    
    <p>Seriously Quantopian is awesome, it easy, has more than enough datasets to start you up with probably anything. It has nice backtests with plenty of attributes. 
      Basically free environment to run it all without the hassle.</p>
    <p>Also it has it's own small community of nerds, which is very nice to get you going.</p>
    <p>It doesn't let you trade though and is pretty slow, so sooner or later I assume it will be a time to go. Still it's a very nice tool to quickly build and test out your idea 
      without bothering with setup and available from anywhere.</p>

    <p>For example the idea I tried just now. What if we took well behaved algorithm and add Insider Conviction as one of the factors. 
      I reckon top managers working in the company must have pretty good idea when to buy shares of their company.</p>
      <img src={'./backtest2.png'} alt="Backtest2" />;
    <p>Oh hell, it does perform! 677% More than double of benchmark $SPY</p>
    <p>But the algorithm I based it off performed even better :(</p>
    <img src={'./backtest1.png'} alt="Backtest1" />;
    <p>Either I'm potato or top managers of companies have no clue when their company is a good investment.</p>
    <p>Quick googling shows it's the former since my algorithm took simplest "at what companies people buy their stocks more and sell less". 
      Supposedly <a href="https://en.wikipedia.org/wiki/Peter_Lynch">Peter Lynch</a> said, "insiders might sell their shares for any number of reasons, 
      but they buy them for only one: they think the price will rise."</p>
    <p>So maybe in future I'll try to weight insiders momentum: if insiders suddenly started buying shares in droves, <i>something must be up</i></p>
    <p><a href="https://www.investopedia.com/articles/02/121002.asp">Investopedia</a> as usual has a few good advices. Plus this book 
      <a href="https://www.amazon.com/Investment-Intelligence-Insider-Trading-Press/dp/0262692341">Investment Intelligence from Insider Trading</a> 
      does in-depth analysis of the topic. </p>
    <p>In the end let me share you the same algo, but without any of my additions.</p>
    <img src={'./backtest3.png'} alt="Backtest3" />;
    <p>HollyShitByOliver.jpg</p>
    <p>Jokes aside, it will be a good exercise to debug the results find out it's so obviously broken.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
