import React from 'react'
import { Logo } from '../sketch-legacy/sketch/logo/logo.js'

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h2 className={'title'}>bob stoute</h2>
        <h4 className={'no-margin'}>media programming</h4>
        <Logo />
        <h5>FRONTEND</h5>
        <h5>Js / React / Next / Css</h5>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Cv
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('music')
            }}
          >
            Music
          </button>
        </li>
        {typeof window !== 'undefined' && !window.location.hostname.match('bobstoute.nl') && (
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('variations')
              }}
            >
              Animator
            </button>
          </li>
        )}
      </ul>
    </nav>
  </header>
)

export default Header
