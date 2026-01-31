// ==UserScript==
// @name        xnpm
// @namespace   https://github.com/tbeseda/xnpm-webextension
// @version     1.0.0
// @description Adds a link to view npm packages on npmx.dev
// @author      tbeseda
// @match       https://www.npmjs.com/package/*
// @grant       none
// @homepageURL https://github.com/tbeseda/xnpm-webextension
// ==/UserScript==

;(() => {
  const path = window.location.pathname
  const match = path.match(/^\/package\/((?:@[^/]+\/)?[^/]+)/)
  if (!match) return

  const heading = document.querySelector('#top h1') || document.querySelector('h1')
  if (!heading) return

  const is404 = heading.textContent.trim().toLowerCase() === 'not found'
  if (is404) return

  const style = document.createElement('style')
  style.textContent = `
    .xnpm-link {
      margin-left: 12px;
      padding: 5px 10px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.3px;
      color: #333;
      background: #f0f0f0;
      border-radius: 4px;
      text-decoration: none;
      transition: background 0.15s;
    }
    .xnpm-link:hover {
      background: #e0e0e0;
    }
  `
  document.head.appendChild(style)

  const packageName = decodeURIComponent(match[1])
  const npmxUrl = `https://npmx.dev/${packageName}`

  const link = document.createElement('a')
  link.href = npmxUrl
  link.target = '_blank'
  link.rel = 'noopener'
  link.className = 'xnpm-link'
  link.textContent = 'npmx.dev →'

  const headingParent = heading.parentElement
  if (!headingParent) return

  headingParent.appendChild(link)
})()
