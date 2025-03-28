---
layout: page
title: inertial modes
description: detecting inertial modes and characterizing the eigenfunctions
img: assets/img/sun.jpg
importance: 1
category: work
---

The first detection of the 5 minute "acoustic" oscillations in the sun happened in the 1960s. There exist millions of these modes which are restored by the buoyancy in the sun and are excited by convective turbulence. But it has long been theorised that other types of oscillations exist in stars. With the influx of long term continuous observations of the sun, we can now detect and study a whole new class of modes in the sun called inertial modes.
Inertial modes are low-frequency oscillations in the sun restored by the Coriolis force. These were first detected by [Loeptien et. al. (2017)](https://www.nature.com/articles/s41550-018-0460-x) and were then categorized into three sets by [Gizon (2021)](https://www.aanda.org/articles/aa/full_html/2021/08/aa41462-21/aa41462-21.html). 

My PhD project involves looking for the signatures of these inertial modes using a flow measurement technique called Local Correlation Tracking. The basic concept involves imaging a feature of interest at two different times, assuming that the feature does not evolve in this time interval (lifetime of feature $$>>$$ time difference), and correlating these two images to find the distance by which this feature has moved. This in turn gives us the velocity of that feature. 

This technique is well-known and widely used in Solar Physics and in engineering fields. Using this technique we can image convective and magnetic features on the solar surface and measure horizontal flows. Since 2010, we have high-cadence continuous white light images and magnetograms of the sun, which allow us to study large-scale low frequency modes of oscillations such as the inertial modes.

Previous observations of these inertial modes have used helioseismic techniques such as [Ring-Diagram Analysis](https://iopscience.iop.org/article/10.1086/306765/fulltext/38895.text.html) and [Time Distance Helioseismology](http://soi.stanford.edu/results/td.html#:~:text=The%20goal%20of%20time%2Ddistance,of%20the%20cavity%20and%20back.) which suffer have lower signal-to-noise ratio at higher latitudes. This is where LCT is beneficial. We can use LCT to track features such as the magnetic networks that are persistent and long lasting features allowing us to better probe the higher latitudes with sufficient SNR. 

For our analysis, we use granules and magnetic network features to generate the flow maps. These flow maps are then cleaned and processed for systematic effects and Fourier transformed in time and longitude. This gives us a cube in $$\theta, m, \omega$$. Now, we can actually look for the inertial modes!

Inertial modes, as the name suggests, lie in the inertial frequency range which is $$[-2\Omega, 2\Omega]$$ where $$\Omega$$ is the reference rotation rate of the sun. 

