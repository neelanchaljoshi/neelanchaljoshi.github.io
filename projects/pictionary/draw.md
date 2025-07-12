---
layout: default
title: Pictionary Draw
permalink: /projects/pictionary/draw/
---

<section class="project-content" style="max-width: 900px; margin: 1rem auto; padding: 1rem; background: white; box-shadow: 0 2px 8px rgb(0 0 0 / 0.1); border-radius: 8px;">

  <div style="margin-bottom: 1rem;">
    <button id="wordBtn" class="btn-primary" style="margin-right: 1rem; padding: 0.5rem 1.5rem; font-weight: 600; font-size: 1rem; border-radius: 4px; border: none; background-color: #007acc; color: white; cursor: pointer;">
      Word
    </button>
    <button id="movieBtn" class="btn-primary" style="padding: 0.5rem 1.5rem; font-weight: 600; font-size: 1rem; border-radius: 4px; border: none; background-color: #007acc; color: white; cursor: pointer;">
      Movie
    </button>
  </div>

  <h1 style="font-weight: 700; font-size: 2rem; margin-bottom: 1rem; color: #222;">
    Draw the word: <span id="word" style="color:#007acc;">loading...</span>
  </h1>

  <button id="clearBtn" class="btn-primary" style="margin-bottom: 1.5rem; padding: 0.75rem 1.5rem; font-weight: 600; font-size: 1rem; border-radius: 4px; border: none; background-color: #007acc; color: white; cursor: pointer; transition: background-color 0.3s ease;">
    Clear Board
  </button>

  <canvas id="canvas" style="
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100vw;
    max-width: 100%;
    height: calc(100vw * 0.75);
    max-height: 600px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    touch-action: none;
    display: block;
  "></canvas>

</section>

<script type="module" src="/projects/pictionary/draw.js"></script>

<style>
  button.btn-primary:hover {
    background-color: #005f99;
  }

  @media (max-width: 600px) {
    .project-content {
      margin-top: 1rem !important;
      padding: 1rem !important;
    }
    h1 {
      font-size: 1.5rem !important;
    }
  }
</style>
