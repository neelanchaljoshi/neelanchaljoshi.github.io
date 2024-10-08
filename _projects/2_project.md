---
layout: page
title: ML in solar physics
description: generating magnetograms using supervised GANs
img: assets/img/magnetogram.jpg
importance: 2
category: work
---

Over the last 100 years, the field of solar physics has seen an unprecedented amount of data being generated. Space  and ground based telescopes provide long-term, continuous coverage of the sun. Naturally, with such an explosion of information, our ability to extract meaningful science is also enhanced. In parallel, the field of machine learning has also burgeoned in the last few years, allowing a harmonic amalgamation of these two fields. 

The Kodaikanal Solar Observatory (KSO) has been taking daily images of the sun since 1904. Long term continuous coverage of the sun is essential in understanding the solar dynamo and studying the 22 year solar cycle. Studying this phenomenon is not only crucial in understanding solar dynamics, but also in understanding its effects on space weather and consequently, on Earth. 

The project aimed to generate high resolution magnetograms from Ca-II-K images from the Kodaikanal Dataset. 

## image to image translation
Image to image translation is a machine learning problem that aims to learn the relation between a set of images and their corresponding output images and using these output images for various tasks such as style transfer etc.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/i2i_gan.png" title="Image to Image " class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of style transfer using an unsupervised generative adversarial network (Credits: Unpaired Image-to-Image Translation Using Cycle-Consistent Adversarial Networks(ICCV 2017))
</div>

For our purpose, we used a supervised conditional generative adversarial network developed by Nvidia, in collaboration with UC Berkeley, called the pix2pixHD. In the following sections, I will describe these jargons. Don't worry.

*** Side note: Nobel prize in Physics for 2024 is awarded for the development of artificial neural networks!!!

## Conditional Generative Adversarial Networks
Now, the first very fundamental question that might arise is - Wha... Whattt?\
Yep. Good Question.


Well, cGANs basically are a type of generative adversarial networks that generate outputs based on a set of conditions. And GANs are special types of neural networks (well, two networks) that perform this task in a very special way. One of the networks, called the Generator, generates images using an input latent vector while the second network, called the Discriminator, tries to distinguish the fake image from the real one.  


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/cgan.jpeg" title="cGAN" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example schematic of how a conditional GAN works vs how a standard GAN works (Credits: https://learnopencv.com/conditional-gan-cgan-in-pytorch-and-tensorflow/)
</div>

Now, a very special type of cGAN that we used for this project is the pix2pixHD cGAN developed by Nvidia and UC Berkeley. This is a high resolution cGAN that can generate images based on semantic maps. You can read the paper [here.](https://tcwang0509.github.io/pix2pixHD/)