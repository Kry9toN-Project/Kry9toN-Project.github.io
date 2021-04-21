---
layout: blog
title:  "How to Merge Tag Caf on Linux Kernel?"
date:   2021-04-22 01:54:00 +0700
categories: article
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zXyQ3kh41m96pRBQZB-BKeBuF1vN8yVupA&usqp=CAU
thum: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zXyQ3kh41m96pRBQZB-BKeBuF1vN8yVupA&usqp=CAU
author: KryPtoN
---

In this article I will be guiding you about how you can merge latest CAF tags in your CAF based kernel. Many people who just started compiling the kernels still don't know how to merge a CAF tag because there isn't any proper guide available. I will try to make the guide as simple as possible.

## What is CAF?
Code Aurora, a Linux Foundation Collaborative project. that host the tested open source code needed to provide upstream enablement for innovative, performance optimized support for system on a chip (SoC) products and related ecosystems, and also serves as a staging area for code that is submitted to upstream projects such as the Linux kernel and Android.

## Requirements:
- You should know how to compile a kernel
- The kernel should be for a Qualcomm device obviously
- You should know the CAF tag you kernel is currently on
- You should know basic stuffs of Git like commit, push, fixing conflicts etc.
- You should know the chipset of your device
- You should know your kernel version like 3.18.y, 4.4.y etc.

## Instructions:
Open this link ( https://wiki.codeaurora.org/xwiki/bin/QAEP/release ) in your browser.

Check for the chipset and the Android version here. Find the caf tag your device is on. Like in my case My device is Redmi Note 4 and it has msm8953 chipset and my kernel is for Android 8.1. So now I can easily know that which CAF tag I have to merge. In my case my kernel was on LA.UM.6.6.r1-07400-89xx.0 tag. The newer tag is LA.UM.6.6.r1-08300-89xx.0

Now you know which CAF tag you need to merge. Open your terminal and change the directory to your kernel directory.

Copy the URL from this list according to your kernel version. In my case the kernel version is 3.18 so I will copy the 3.18 URL.

Code:
```
3.10 -> https://source.codeaurora.org/quic/la/kernel/msm-3.10/
3.18 -> https://source.codeaurora.org/quic/la/kernel/msm-3.18/
4.4 -> https://source.codeaurora.org/quic/la/kernel/msm-4.4/
```
In terminal type git fetch <repo link> <tag> and paste the url in place of <repo link>and also the CAF tag you want to merge, in place of <tag>, just like given below and hit enter. It will fetch the tag. It will take some time depending on your internet speed.

Code:
```
git fetch https://source.codeaurora.org/quic/la/kernel/msm-3.18/ LA.UM.6.6.r1-08300-89xx.0
```
After fetching the tag, type below line and hit enter.

Code:
```
git merge FETCH_HEAD
```
Now you will see that your tag is being merged successfully. If it gets some conflicts then fix the conflicts and complete the merge by following commands.

Code:
```
git add .
git commit
```
After successfully merging the CAF tag, just push it to your github repository.

Code:
```
git push
```
Congratulations! You have successfully merged latest CAF tag in your kernel.


## Tips:
- Test each CAF tag
- Do not multiple tags at once without testing the previous one
- Bookmark all the links from this thread, even this thread.

## Credit:
- Original [post](https://forum.xda-developers.com/t/reference-merge-latest-caf-tag-in-kernel.3787564/)
