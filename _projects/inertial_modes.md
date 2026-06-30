---
layout: page
title: inertial modes
description: detecting inertial modes and characterizing the eigenfunctions
img: assets/img/sun.jpg
importance: 1
category: work
---

## Background

The first detection of the Sun's 5-minute "acoustic" oscillations dates back to the 1960s. Millions of these oscillation modes exist, restored by buoyancy and excited by convective turbulence near the solar surface — and their study, **helioseismology**, has become one of the most powerful tools for probing the Sun's interior.

But acoustic modes aren't the only oscillations a star like the Sun can support. With the arrival of long-term, continuous solar observations, an entirely different class of oscillation has become detectable: **inertial modes** — low-frequency oscillations restored not by pressure, but by the **Coriolis force** arising from the Sun's rotation. These were first observed by [Löptien et al. (2018)](https://www.nature.com/articles/s41550-018-0460-x) and later organised into distinct families by [Gizon et al. (2021)](https://www.aanda.org/articles/aa/full_html/2021/08/aa41462-21/aa41462-21.html).

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_imgs/m8_rvort_streamlines_35deg.png" title="overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class='caption'>
    Example of an equatorial Rossby mode with azimuthal wavenumber m = 8. The colourmap shows the vorticity while the streamlines indicate the horizontal velocity field.
</div>

## The measurement technique

My doctoral work searches for the signatures of these inertial modes using a flow-measurement technique called **Local Correlation Tracking (LCT)**. The basic idea is simple: image a solar feature at two closely spaced times, and — assuming the feature's lifetime is much longer than the time between the two images — cross-correlate the two snapshots to find how far it has moved. That displacement, divided by the elapsed time, gives a local velocity.

LCT is well established in solar physics and shares its underlying logic with techniques used widely in engineering and fluid dynamics, from particle image velocimetry to optical flow in computer vision. Applied to the Sun, it lets us track both convective granulation and magnetic network features to map horizontal flows across the solar surface. Since 2010, continuous high-cadence white-light images and magnetograms have made it possible to apply this technique to flows as large and as slow as inertial modes — something that simply wasn't feasible with earlier, shorter datasets.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_imgs/lct.png" title="overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class='caption'>
    A cartoon explaining local correlation tracking. A small patch on the Sun is imaged and apodized
    (highlighted by the white circle) to isolate features of interest. In the successive image, the
    features have moved. The horizontal flow velocity is determined by measuring the shift of the peak
    of the cross-correlation function between these images. From
    <a href="https://www.annualreviews.org/doi/10.1146/annurev-astro-081514-absence" target="_blank">Hanasoge et al. (2016)</a>.
</div>

## Why LCT, and not helioseismology alone

Inertial modes have previously been studied using established helioseismic techniques such as [ring-diagram analysis](https://iopscience.iop.org/article/10.1086/306765/fulltext/38895.text.html) and [time–distance helioseismology](http://soi.stanford.edu/results/td.html). Both methods, however, lose signal-to-noise toward higher latitudes.

This is where LCT offers a genuine advantage. By tracking long-lived magnetic network features — which persist far longer than individual granules — LCT can maintain good sensitivity even at high latitudes, complementing the regions where helioseismic methods are weakest.

## From flow maps to mode detections

The analysis pipeline proceeds in several stages:

1. **Flow maps.** Granules and magnetic network features are tracked with LCT to generate horizontal flow maps across the solar disk.
2. **Cleaning.** These maps are corrected for known systematic effects.
3. **Spectral decomposition.** The cleaned flow maps are Fourier-transformed in both time and longitude, producing a data cube indexed by latitude (θ), azimuthal order (*m*), and frequency (ω).
4. **Mode search.** Inertial modes occupy a specific frequency band, the *inertial range* $[-2\Omega, 2\Omega]$, where $\Omega$ is the Sun's reference rotation rate. Within this cube, we search for power excesses at frequencies and azimuthal orders consistent with theoretical predictions.

Each candidate mode is characterised by its **azimuthal order** *m* (how many oscillation cycles wrap around the Sun in longitude) and its **frequency** ω (how fast the pattern rotates). Once a mode is identified, its **eigenfunction** — the spatial pattern of the associated velocity field across latitude and depth — can be extracted directly from the data.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/project_imgs/ps_mag_gran_rossby.png" title="overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class='caption'>
    Power spectra of \(u_\theta^+\) from magnetic feature tracking (LCTMag; left) and granulation
    tracking (LCTGran; right) as a function of frequency and azimuthal wavenumbers \(m\) over the
    period 2010–2024. The power spectrum is averaged over latitudes within \(\pm 30°\). The orange
    curve shows the theoretical dispersion relation of sectoral Rossby waves,
    \(\omega = -2\Omega_\text{Carr}/(m+1)\), where \(\Omega_\text{Carr}\) is the Carrington
    rotation rate. The curve is limited to show the theoretical frequencies of the observed modes
    from \(m=3\) onwards.
</div>

## What the eigenfunctions tell us

These eigenfunctions are not just a confirmation that a mode exists — their detailed shape carries genuine physical information. They are sensitive to:

- The Sun's **internal differential rotation profile**
- The strength of **turbulent diffusion** in the convection zone
- The redistribution of **angular momentum by Reynolds stresses**

By comparing observed eigenfunctions against theoretical predictions, it becomes possible to place direct empirical constraints on these otherwise hidden properties of the solar interior.

A further strength of this approach is the use of **two independent tracers** — granules and magnetic network features — which allows flow measurements to be cross-validated against one another, adding confidence to each detection.

## Why this matters

Taken together, inertial modes open up a genuinely new observational window into the solar interior — one that probes regions and physical processes that are difficult, or impossible, to access with classical helioseismology alone. As continuous solar observations extend further in time, this window only gets clearer.

Further details, including the eigenfunction measurements themselves, can be found in my [publications](https://neelanchaljoshi.github.io/publications).
