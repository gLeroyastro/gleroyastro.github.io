---
layout: gavin-home
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="gl-hero" aria-labelledby="gl-name">
  <div class="gl-hero__visual" data-map-reveal aria-label="A reconstructed dark-matter mass map. Hover or tap to reveal the corresponding contours.">
    <div class="gl-hero__map gl-hero__map--base" aria-hidden="true"></div>
    <div class="gl-hero__map gl-hero__map--contours" aria-hidden="true"></div>
    <div class="gl-hero__image-gradient" aria-hidden="true"></div>
    <span class="gl-hero__hint" data-map-hint>Move over the map to reveal contours</span>
  </div>
  <div class="gl-hero__content">
    <p class="gl-hero__eyebrow">POSTDOCTORAL RESEARCHER · ASTROPHYSICS & COSMOLOGY</p>
    <h1 id="gl-name">Gavin Leroy</h1>
    <p class="gl-hero__lead">Mapping the invisible Universe</p>
    <p>I am a postdoctoral researcher at <strong>Durham University</strong>, working with the Institute for Computational Cosmology and the Centre for Extragalactic Astronomy.</p>
    <p>I study <strong>gravitational lensing, galaxy clusters and dark matter</strong>. My research combines astronomical observations, signal processing and machine learning to map the matter distribution in the Universe and detect clusters in next-generation surveys.</p>
    <div class="gl-hero__actions">
      <a class="gl-button gl-button--primary" href="{{ '/research/' | relative_url }}">Explore my research</a>
      <a class="gl-button gl-button--ghost" href="{{ '/publications/' | relative_url }}">Publications</a>
    </div>
    <p class="gl-hero__collabs">Euclid · JWST COSMOS-Web · SuperBIT · SLICE</p>
  </div>
</section>

<div class="gl-below-hero">
  <aside class="sidebar gl-profile-sidebar" aria-label="Academic profile">
    {% include author-profile.html %}
  </aside>

  <div class="gl-content">
  <section class="gl-section" aria-labelledby="gl-research-heading">
    <p class="gl-section__eyebrow">RESEARCH</p>
    <h2 id="gl-research-heading">From galaxy shapes to maps of dark matter</h2>
    <p class="gl-section__intro">Galaxy clusters are powerful laboratories for understanding dark matter, how cosmic structures form and how the Universe evolves. I develop and apply gravitational-lensing methods to measure their mass and find them in astronomical surveys.</p>
    <div class="gl-card-grid">
      <article class="gl-card">
        <p class="gl-card__number">01</p>
        <h3>Weak-lensing galaxy clusters</h3>
        <p>Building methods and catalogues to detect galaxy clusters through their weak gravitational-lensing signal in Euclid data.</p>
      </article>
      <article class="gl-card">
        <p class="gl-card__number">02</p>
        <h3>Dark-matter cartography</h3>
        <p>Reconstructing the projected distribution of matter in the COSMOS-Web field, using space-telescope observations and multiscale analysis.</p>
      </article>
      <article class="gl-card">
        <p class="gl-card__number">03</p>
        <h3>Dark-matter physics</h3>
        <p>Investigating merging galaxy clusters and their potential to constrain self-interacting dark matter.</p>
      </article>
    </div>
  </section>

  <section class="gl-section gl-section--split" aria-labelledby="gl-methods-heading">
    <div>
      <p class="gl-section__eyebrow">METHODS & COLLABORATIONS</p>
      <h2 id="gl-methods-heading">From pixels to cosmology</h2>
    </div>
    <div>
      <p>My work spans the full analysis chain: image calibration and systematic effects in Euclid VIS, galaxy-shape measurements, weak-lensing mass reconstruction, and signal-processing and machine-learning methods for cluster detection.</p>
      <p>I contribute to the <strong>Euclid Consortium</strong>, <strong>COSMOS-Web</strong>, <strong>SuperBIT</strong> and <strong>SLICE</strong>, collaborating across international teams to turn new observations into reliable measurements of cosmic structure.</p>
      <a class="gl-text-link" href="{{ '/research/' | relative_url }}">Learn more about my research →</a>
    </div>
  </section>

  <section class="gl-section gl-section--contact" aria-labelledby="gl-contact-heading">
    <p class="gl-section__eyebrow">CONNECT</p>
    <h2 id="gl-contact-heading">Research, collaborations & outreach</h2>
    <p>I welcome opportunities to discuss gravitational lensing, dark-matter mapping, collaborations and science communication.</p>
    <div class="gl-inline-links">
      <a href="{{ '/press/' | relative_url }}">Press & media</a>
      <a href="{{ '/outreach/' | relative_url }}">Outreach</a>
      <a href="{{ '/cv/' | relative_url }}">Academic CV</a>
      <a href="https://github.com/gLeroyastro">GitHub</a>
    </div>
  </section>
</div>
</div>

<script defer src="{{ '/assets/js/gavin-map-reveal.js' | relative_url }}"></script>
