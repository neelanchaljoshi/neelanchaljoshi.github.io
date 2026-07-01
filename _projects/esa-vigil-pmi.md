---
layout: page
title: esa vigil/pmi instrument
description: characterising the instrument before it launches
img: assets/img/project_imgs/Space_Shuttle_Columbia_launching.jpg
importance: 1
category: work
---

## The mission

ESA's **Vigil** mission will station a spacecraft at the **L5 Lagrange point**, roughly 60° behind Earth in its orbit around the Sun. This vantage point is unique: it lets Vigil observe regions of the Sun several days before they rotate into view from Earth, giving forecasters early warning of solar activity that could threaten power grids, satellites, and communication infrastructure on Earth.

One of Vigil's key instruments is the **PMI** (Photospheric Magnetic field Imager), which will continuously image the Sun's surface to track magnetic fields and surface flows. Like any space instrument, PMI has to be designed and validated long before launch — which raises a practical question: **what will this instrument actually be able to measure, and under what operating conditions?**

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_imgs/l5_orbit_diagram.png" title="L5sun" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class='caption'>
    A simple Sun–Earth–L5 geometry diagram: the Sun, Earth's orbit, and the L5 point marked 60° behind Earth, with an arrow indicating the early-warning view of approaching solar regions.
</div>


## The question I worked on

Different solar flows live at very different physical scales:

<table class="table table-sm table-bordered" style="max-width:600px; margin: 1.5rem auto;">
  <thead class="thead-dark">
    <tr>
      <th>Flow</th>
      <th>Typical amplitude</th>
      <th>Spatial scale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Differential rotation</td>
      <td>~2 km/s</td>
      <td>Global</td>
    </tr>
    <tr>
      <td>Supergranulation</td>
      <td>~300 m/s</td>
      <td>~30 Mm cells</td>
    </tr>
    <tr>
      <td>Active region flows</td>
      <td>~50 m/s</td>
      <td>Local</td>
    </tr>
  </tbody>
</table>

Each of these requires a different combination of **image resolution**, **observing cadence**, and **observation duration** to be reliably recovered. Before PMI is built and launched, mission planners need to know: for a given set of operational parameters, which of these flows can actually be measured — and which can't?

This is a question that's very hard to answer with real data, because the instrument doesn't exist yet. So I built a **digital twin** instead.

## Building the digital twin

The approach starts from existing, high-quality observations and works backward to simulate what a *lower-quality, future* instrument would see:

1. **Start with real data.** I used high-resolution magnetogram and Dopplergram images from **SDO/HMI**, an instrument currently in operation, as a stand-in for "ground truth" solar flows.
2. **Model the optics.** I built **PSF (point spread function) and Airy-disk models** representing how PMI's optics will blur and degrade an image, based on its planned aperture and design parameters.
3. **Generate synthetic PMI data.** Applying these optical models — along with realistic noise and resolution degradation — to the HMI images produces synthetic datasets that approximate what PMI itself would observe, across a range of possible operational configurations.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_imgs/pmi_hmi_comparison_mag.png" title="overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class='caption'>
    A before/after image pair: a sharp HMI image next to the same image after applying the PSF/Airy-disk degradation model, simulating what PMI would actually see.
</div>


4. **Recover flows with Local Correlation Tracking.** I ran the same flow-tracking pipeline I use elsewhere in my research (see my [inertial modes work](https://neelanchaljoshi.github.io/projects/inertial_modes/)) on these synthetic datasets, to see how well each flow category could actually be recovered.
5. **Map out the trade-offs.** By repeating this across a grid of operational parameters — cadence, resolution, observation duration — I could map out which combinations of settings allow which flows to be measured, and where the limits are.


## What it told ESA

The output of this work wasn't just a set of plots — it translated directly into **operational guidance** for the mission:

- Concrete recommendations on the **downlink cadence, image resolution, and observation duration** needed to recover each category of solar flow
- A clear statement of which scientific goals are **achievable within the mission's real operational constraints**, and which are not
- A reference point for the broader solar physics community on what PMI will and won't be able to contribute, ahead of launch

This is, in essence, simulation used to catch a design problem *before* it becomes an expensive one — informing decisions while the mission is still on paper, rather than discovering the limitations once the spacecraft is already in space.

## Why this approach matters

Space missions are enormously expensive and effectively impossible to "patch" after launch. A digital twin lets you stress-test an instrument's capabilities against many possible designs and operating modes cheaply, in software, long before any hardware is built. The same logic applies far beyond solar physics — anywhere a complex physical system needs to be characterised, validated, or calibrated before it's trusted with a real, costly measurement.

---

*This work forms the second strand of my doctoral thesis, alongside my study of [solar inertial modes](https://neelanchaljoshi.github.io/projects/inertial_modes/). A first-author paper describing this analysis is currently in preparation.*
