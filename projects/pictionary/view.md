---
layout: default
title: Pictionary View
permalink: /projects/pictionary/view/
---

<section class="project-content" style="max-width: 900px; margin: 2rem auto; padding: 2rem; background: white; box-shadow: 0 2px 8px rgb(0 0 0 / 0.1); border-radius: 8px; text-align: center;">
  <h1 style="font-weight: 700; font-size: 2rem; margin-bottom: 1rem; color: #222;">
    Watch the drawing
  </h1>

  <canvas id="canvas" style="
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100vw;
    max-width: 100%;
    height: calc(100vw * 0.75);
    max-height: 600px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    display: block;
    margin: 0 auto;
  "></canvas>
</section>

<script type="module" src="/projects/pictionary/view.js"></script>
