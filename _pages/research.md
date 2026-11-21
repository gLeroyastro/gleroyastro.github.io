---
layout: single
permalink: /research/
title: "Research"
description: "Gavin Leroy's research: weak gravitational lensing, galaxy-cluster detection for Euclid, JWST COSMOS-Web dark-matter maps and self-interacting dark matter."
author_profile: true
---

My work is centred on **observational cosmology**, especially what **gravitational lensing** and **galaxy clusters** reveal about dark matter and the formation of structures in the Universe. I develop analysis methods that connect carefully calibrated images to scientifically useful maps and catalogues.

## Weak gravitational lensing and galaxy-cluster detection

Mass deflects light from distant galaxies. By measuring the coherent, extremely small distortions in the shapes of background galaxies, weak gravitational lensing enables us to map matter without assuming that it emits light. My PhD at **Université Paris-Saclay and CEA Saclay (2020–2023)** focused on building a catalogue of galaxy clusters detected through their weak-lensing signal for Euclid.

I developed and compared multiscale detection techniques for lensing mass maps, including a wavelet-based approach optimised for cluster detection. This work led to my 2023 first-author paper in *Astronomy & Astrophysics*. I then applied the method to real data from the Hyper Suprime-Cam Subaru Strategic Program (HSC-SSP).

With Alberto Manjón-García, I co-led a **three-year challenge comparing ten detection algorithms** within a Euclid working group, to select the methods that will run on real Euclid data. The resulting paper, on which I am an equal-contribution author, has been submitted.

[Read the 2023 paper](https://doi.org/10.1051/0004-6361/202346510) · [PhD thesis](https://theses.hal.science/tel-04536654)

## Euclid: cluster catalogues and instrumental calibration

Within the **Euclid Consortium**, I lead the key paper on constructing a galaxy-cluster catalogue from weak lensing in Euclid Data Release 1 (KP-DR1-CL7-1). I run a team of **about 15 researchers** applying the selected detection algorithms, working closely with the groups responsible for mass measurement, optical cluster detection and cluster morphology.

I also work in the Euclid VIS instrument ground-segment operational unit on **Charge Transfer Inefficiency (CTI)**. Radiation-induced charge-transfer effects can bias galaxy shapes and therefore precision weak-lensing measurements. My role includes correction, calibration, validation and quality control of the VIS processing chain, including the pipeline that tracks how CTI evolves over time. I validated the CTI correction for Euclid's first Quick Data Release (Q1).

## Dark-matter maps with JWST COSMOS-Web

I am part of the **COSMOS-Web collaboration**, contributing to the calibration and validation of galaxy-shape measurements and to dark-matter mass-map reconstruction. In our 2026 *Nature Astronomy* study, JWST data made it possible to map projected matter at exceptionally high resolution. I reconstructed the mass map with the improved KS+ method (the paper's main figure), applied my multiscale detection algorithm to produce the first catalogue of galaxy groups and clusters in it, and validated that catalogue against X-ray and optical data.

{% include compare-slider.html
   before="/images/massmap-base" after="/images/massmap-contours"
   before_label="Mass map" after_label="With contours"
   width="1800" height="1746"
   alt="Weak-lensing mass map of the COSMOS-Web field: bright blue peaks mark concentrations of mostly dark matter, connected by fainter filaments."
   caption="Projected matter in the COSMOS-Web field, reconstructed from JWST weak lensing with the KS+ method. Bright peaks are galaxy groups and clusters, mostly made of dark matter. **Drag the slider** (or use the arrow keys) to overlay the mass contours."
   credit="Scognamiglio, Leroy et al. 2026, Nature Astronomy" %}

[Read the Nature Astronomy paper](https://doi.org/10.1038/s41550-025-02763-9)

## Merging clusters and self-interacting dark matter

Galaxy-cluster mergers provide a way to investigate whether dark matter interacts with itself, beyond its gravitational effects. I co-lead Euclid's **DR1 key project on self-interacting dark matter in galaxy clusters** (KP-DR1-CL-8). It sits at the interface of **four working groups (about 30 researchers)**: I organise its regular meetings and steer the scientific preparation for the first year of Euclid data. I also lead the project's paper on merging clusters. Related projects with **SuperBIT** and **SLICE** combine weak-lensing mass reconstruction with other information to investigate cluster structure and dynamics.

## Signal processing and machine learning

My background in physics, signal processing and machine learning informs my research methods: multiscale image analysis, detection algorithms, quantitative comparison of pipelines, and careful treatment of observational systematics. I have also explored convolutional neural networks for finding clusters in convergence maps, and I represent postdocs on Durham's astrophysics machine-learning committee, where I run a training workshop for PhD students.

## Research collaborations

**Euclid Consortium · COSMOS-Web · SuperBIT · SLICE**

## Data, code and citation {#data}

<ul class="gl-data-list">
  <li><strong>Free-to-read papers:</strong> <a href="{{ site.author.arxiv }}">arXiv preprints</a> and my <a href="https://theses.hal.science/tel-04536654">PhD thesis on HAL</a> (open access).</li>
  <li><strong>Code:</strong> <a href="https://github.com/{{ site.author.github }}">GitHub</a>.</li>
  {% for release in site.data.data_releases %}
  <li><strong>{{ release.title }}:</strong> {{ release.description }} <a href="https://doi.org/{{ release.doi }}">doi:{{ release.doi }}</a></li>
  {% endfor %}
</ul>

{% if jekyll.environment == "development" and site.data.data_releases == nil %}
<p class="gl-draft-note"><strong>Preview only, hidden on the live site:</strong> once a dataset is public (for example the COSMOS-Web mass map and cluster catalogue on Zenodo), add it to <code>_data/data_releases.yml</code> and it will be listed here with its DOI.</p>
{% endif %}

### How to cite

If you use these results, please cite the papers below. Each entry has a ready-to-copy BibTeX record.

{% include cite-block.html key="scognamiglio2026" %}
{% include cite-block.html key="leroy2023" %}
{% include cite-block.html key="euclidq1vis2026" %}
{% include cite-block.html key="chappuis2026" %}
{% include cite-block.html key="leroy2023thesis" %}

For all papers, see [Publications](/publications/). For professional experience and responsibilities, see my [CV](/cv/).
