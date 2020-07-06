import React, { useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '@components/layout';
import SEO from '@components/seo';
import Img from 'gatsby-image';
import hollyshit from './jo.gif';
import { getImages } from '@components/images';

const SecondPage = (): JSX.Element => {
  const images = getImages('pages/page1');
  return (
    <Layout>
      <SEO title="What my algo does" />

      <h1>What my algo does</h1>
      <p>Another study blog. Learning through writing and teaching and so on. </p>
      <p>The name Spire is inspired by the game <a href="https://store.steampowered.com/app/646570/Slay_the_Spire/">Slay The Spire</a>. The idea of trying to get to the top, failing and trying again is probably
      the closest to the principles of success overall and learning something useful in particular.</p>
      <p>For my first attempt - or better called "run" - I will try to get into the world of quants. A bit of python, a bit of finances, a bit of data science.
      Should be useful and maybe even help me build a good portfolio. Both stocks and résumé kind.</p>
      <p>Also gatsby and writing. Why limit yourself to just one overly complicated task when you can fail at four at a time.
      The sooner you fail the sooner you can get to wailing in self-pity and I got no time to waste.</p>
      <h2>Python and Finances First Step</h2>
      <p>Apparently being quant is super easy! Just go to <a href="https://www.quantopian.com">Quantopian</a>! </p>
      <p>Seriously, Quantopian is awesome, it's simple, has more than enough datasets to start you up with probably anything. It has nice backtests with plenty of attributes.
      Basically free environment to run it all without the hassle.</p>
      <p>Also it has it's own small community of nerds, which is very nice to get you going.</p>
      <p>It doesn't let you trade though and is pretty slow, so I assume sooner or later it will be a time to go. Still it’s a very nice tool to quickly build and test out your idea
      without bothering with setup and it's available from anywhere.</p>

      <p>For example the idea I tried just now. What if we took well behaved algorithm and add Insider Conviction as one of the factors?
      I reckon top managers working in the company must have pretty good idea when to buy shares of their company.</p>
      <Img fluid={images.backtest2} alt="Backtest2" />
      <p>Oh hell, it does perform! 677%! More than double of $SPY!</p>
      <p>But the algorithm I based it off performed even better :(</p>
      <Img fluid={images?.backtest1} alt="Backtest1" />
      <p>Either I'm potato or top managers have no clue when their company is being a good investment.</p>
      <p>Quick googling shows it's the former since my algorithm took simplest approach: "find companies that insiders buy more than sell".
      Supposedly <a href="https://en.wikipedia.org/wiki/Peter_Lynch">Peter Lynch</a> said, "insiders might sell their shares for any number of reasons,
      but they buy them for only one: they think the price will rise."</p>
      <p>So maybe in future I'll try to weigh insiders momentum: if insiders suddenly started buying shares in droves, <i>something must be up</i></p>
      <p><a href="https://www.investopedia.com/articles/02/121002.asp">Investopedia</a> has a few more ideas what to include in the algorithm.
      Plus this book <a href="https://www.amazon.com/Investment-Intelligence-Insider-Trading-Press/dp/0262692341">Investment Intelligence from Insider Trading</a> does
      in-depth analysis of the topic. </p>
      <p>In the end let me share the same algo, but without any of my additions.</p>
      <Img fluid={images?.backtest3} alt="Backtest3" />

      <img src={hollyshit} alt="hollyshit" />
      <p>
        <strong>44.4% Annual returns! Eat this, Medallion fund! </strong>
      </p>
      <p>
        But jokes aside, it will be a good exercise to debug the results and find out why it's so obviously broken <sup>or become rich</sup></p>

      <Link to="/">Go back to the homepage</Link>
    </Layout>);
};

export default SecondPage;
