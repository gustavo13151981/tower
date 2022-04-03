import React, {useEffect, useState} from 'react'
import landing_logo from '../../images/landing_logo.png'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import four from '../../images/4.png'
import arrow from '../../images/arrow.png'
import './landing.scss'
import '../sidebar/sidebar.scss'

/* eslint-disable no-unused-expressions */

const Landing = (props) => {
  useEffect(()=>{
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy ,
        dayMonth = "04/13/",
        birthday = dayMonth + yyyy;
    
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
    
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;
    
          document.getElementById("days").innerText = Math.floor(distance / day),
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
    
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "Presale Live";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
    
  },[])

  return (
      <>
       
    <div>
    <div className='complete'>
    <div className='outer'>
    <div className='dash'>
      <div className='center_div'>
        <div className='logo_landing'>
        <img src={landing_logo} className="landing_logo"/>
        </div>
        <p className="english_text" style={{display: props.data ? 'block' : 'none' }}> Welcome to The Tower Of God Ecosystem.
An community driven platform, where smart investors become degens and anime fans. empowering people of all ages and cultures to be in control their own wealth opportunities to either lose or make money.  The $TOG token is our medium, it was built on the Binance blockchain (BEP-20) with a smart code that makes it safe to invest and beneficial to hold.</p>
<p className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >欢迎来到神之塔生态系统。
一个社区驱动的平台，聪明的投资者在这里变成了德原和动漫迷。使所有年龄和文化的人能够控制自己的财富机会，要么失去要么赚钱。 $TOG 代币是我们的媒介，它建立在 Binance 区块链 (BEP-20) 之上，带有智能代码，可确保投资安全并有益于持有
Huānyíng lái dào shén zhī tǎ shēngtài xìtǒng.
Yīgè shèqū qūdòng de píngtái, cōngmíng de tóuzī zhě zài zhèlǐ biàn chéngle dé yuán hé dòngmàn mí. Shǐ suǒyǒu niánlíng hé wénhuà de rén nénggòu kòngzhì zìjǐ de cáifù jīhuì, yàome shīqù yàome zhuànqián. $TOG dài bì shì wǒmen de méijiè, tā jiànlì zài Binance qū kuài liàn (BEP-20) zhī shàng, dài yǒu zhìnéng dàimǎ, kě quèbǎo tóuzī ānquán bìng yǒuyì yú chí yǒu</p>
      </div>
      <div class="container_timer">
    <h1 id="headline">PRESALE IN</h1>
    <h1 id="headline" className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >预售</h1>
    <div id="countdown">
      <ul class="count_ul">
        <li className="english_text" ><span id="days"></span>days</li>
        {/* <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} ><span id="days" ></span>天</li> */}
        <li className="english_text" ><span id="hours"></span>Hours</li>
        {/* <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} ><span id="hours" ></span>小时</li> */}
        <li className="english_text"  ><span id="minutes"></span>Minutes</li>
        {/* <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} ><span id="minutes" ></span>分钟</li> */}
        <li className="english_text" ><span id="seconds"></span>Seconds</li>
        {/* <li  className="chinese_text" style={{display: props.data ? 'none' : 'block' }} ><span id="seconds"></span>秒</li> */}
      </ul>
    </div>
    <div id="content" class="emoji">
      <span>🥳</span>
      <span>🎉</span>
      <span>🎂</span>
    </div>
  </div>

      <div>
      </div>
    </div>

    
    </div>
    
    </div>


    <div className='dash_tokenomics' id='features'>
            <h2 className="english_text" style={{display: props.data ? 'block' : 'none' }}>Features</h2>
            <h2 className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >特征</h2>
            <div className='tokenomics_outer'>
              <div className='box1'>
                <div className='icon_box'>
                <img src={one} alt='icon1'/>
                </div>
                <div className='content_box'>
                <h2 className='english_text' style={{display: props.data ? 'block' : 'none' }}>Buyback</h2>
                <h2 className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >回购</h2>
                <p className='english_text' style={{display: props.data ? 'block' : 'none' }}>Percentage of taxes will go to the buyback wallet, with activated tokens will be bought to raised the floor price, during moments of low volume.</p>
                <p className='chinese_text' style={{display: props.data ? 'none' : 'block' }}>税收的百分比将进入回购钱包，在交易量低的时候，将购买激活的代币以提高底价。</p>
               
                </div>
              </div>
              <div className='box1'>
              <div className='icon_box'>
                <img src={two} alt='icon1'/>
                </div>
                <div className='content_box'>
                <h2 className='english_text'style={{display: props.data ? 'block' : 'none' }}>Jackpot</h2>
                <h2 className='chinese_text'style={{display: props.data ? 'none' : 'block' }}>头奖</h2>
                <p className='english_text' style={{display: props.data ? 'block' : 'none' }}>The prize will be split between the Top 3 in the leaderboard, those you have the most betting volume will be shown.</p>
                <p className='chinese_text' style={{display: props.data ? 'none' : 'block' }}>奖金将在排行榜中的前 3 名之间平分，将显示您投注量最大的那些。</p>
                </div>
              </div>
              <div className='box1'>
              <div className='icon_box'>
                <img src={four} alt='icon1'/>
                </div>
                <div className='content_box'>
                <h2 className='english_text' style={{display: props.data ? 'block' : 'none' }}>AntiBot</h2>
                <h2 className='chinese_text' style={{display: props.data ? 'none' : 'block' }}>反机器人</h2>
                <p className='english_text' style={{display: props.data ? 'block' : 'none' }}>Blocks set with A high tax, to deter liquidity snipers.</p>
                <p className='chinese_text' style={{display: props.data ? 'none' : 'block' }}>设置高税收的街区，以阻止流动性狙击手。</p>
                </div>
              </div>
              <div className='box1'>
              <div className='icon_box'>
                <img src={three} alt='icon1'/>
                </div>
                <div className='content_box'>
                <h2 className="english_text" style={{display: props.data ? 'block' : 'none' }}>Play2Earn</h2>
                <h2 className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >玩赚</h2>
                <p className="english_text" style={{display: props.data ? 'block' : 'none' }}>Our platform provides its players with a chance to earn any form of in-game assets or bnb that can be transferred to the real world as a valuable resource.</p>
                <p className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >我们的平台为玩家提供了赚取任何形式的游戏内资产或 bnb 的机会，这些资产可以作为宝贵的资源转移到现实世界。</p>
                </div>
              </div>
            </div>
            
            <h2 className='roadmap english_text' id='roadmap' style={{display: props.data ? 'block' : 'none' }}>Roadmap</h2>
            <h2 className='roadmap chinese_text' id='roadmap' style={{display: props.data ? 'none' : 'block' }} >路线图</h2>
            <div className='tokenomics_outer roadmap_outer'>
              <div className='box1'>
                <div className='icon_box'>
                </div>
                <div className='content_box'>
                <h2 className="english_text" style={{display: props.data ? 'block' : 'none' }}>Phase 1: Ground Level</h2>
                <h2 className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >第一阶段：地面</h2>
                <p>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Website Launched</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Contract Deployed</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Private sale</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}> Community growth 5,000- 10,000 telegram members</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}> Game Development</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >网站上线</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >已部署合同</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >私人销售</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} > 社区成长 5,000- 10,000 个电报会员</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} > 游戏开发</li>
                  </p>
                </div>
              </div>
              <div className='box'>
              
              </div>


              <div className='arrow_box'>
              <img src={arrow} alt='arrow' className='arrow' />
              </div>

            </div>

            <div className='tokenomics_outer roadmap_outer'>
            <div className='box1'>
                <div className='icon_box'>
                </div>
                <div className='content_box'>
                <h2 className="english_text" style={{display: props.data ? 'block' : 'none' }}>Phase 2: Sky High</h2>
                <h2 className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >第二阶段：天高</h2>
                <p>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Whitelist/ public sale</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}> Pancakeswap listing </li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Game Release</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Listing Coingecko and Coinmarketcap</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}> Post launch Marketing begins </li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}> Social media marketing/ Twitter 2,000 holders </li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >白名单/公开发售</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} > 煎饼交换上市 </li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >游戏发布</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >上市 Coingecko 和 Coinmarketcap</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} > 发布后营销开始 </li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} > 社交媒体营销/ Twitter 2,000 名持有者 </li>
                  </p>
                </div>
              </div>
              <div className='box'>
              
              </div>


              <div className='arrow_box'>
              <img src={arrow} alt='arrow' className='arrow' />
              </div>

            </div>


            <div className='tokenomics_outer roadmap_outer'>
            <div className='box1'>
                <div className='icon_box'>
                </div>
                <div className='content_box'>
                <h2 className="english_text" style={{display: props.data ? 'block' : 'none' }}>Phase 3:  Moon</h2>
                <h2 className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >第三阶段：月亮</h2>
                <p>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>$TOG Pool (Swapping and Staking) </li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>YouTube marketing</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Massive Asian market outreach</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}>Eth Launch</li>
                  <li className="english_text" style={{display: props.data ? 'block' : 'none' }}> Key Strategic Partnerships</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >$TOG 矿池（交换和质押） </li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >YouTube 营销</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >大规模的亚洲市场拓展</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >以太坊启动</li>
                  <li className="chinese_text" style={{display: props.data ? 'none' : 'block' }} >关键战略伙伴关系</li>
                  </p>
                </div>
              </div>
              <div className='box'>
              
              </div>

            </div>
    </div>
    </div>
    </>
  )
}

export default Landing