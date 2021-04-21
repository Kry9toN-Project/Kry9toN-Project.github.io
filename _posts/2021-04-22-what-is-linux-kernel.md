---
layout: blog
title:  "What is Linux Kernel?.."
date:   2021-04-22 01:36:00 +0700
categories: article
image: 
thum: 
author: KryPtoN
---

## What is Linux Kernel?

The Linux® kernel is the main component of a Linux operating system (OS) and is the core interface between a computer’s hardware and its processes. It communicates between the 2, managing resources as efficiently as possible.

The kernel is so named because—like a seed inside a hard shell—it exists within the OS and controls all the major functions of the hardware, whether it’s a phone, laptop, server, or any other kind of computer.

## What the kernel does
The kernel has 4 jobs:

- Memory management: Keep track of how much memory is used to store what, and where
- Process management: Determine which processes can use the central processing unit (CPU), when, and for how long
- Device drivers: Act as mediator/interpreter between the hardware and processes
- System calls and security: Receive requests for service from the processes
- The kernel, if implemented properly, is invisible to the user, working in its own little world known as kernel space, where it allocates memory and keeps track of where everything is stored. What the user sees—like web browsers and files—are known as the user space. These applications interact with the kernel through a system call interface (SCI).

Think about it like this. The kernel is a busy personal assistant for a powerful executive (the hardware). It’s the assistant’s job to relay messages and requests (processes) from employees and the public (users) to the executive, to remember what is stored where (memory), and to determine who has access to the executive at any given time and for how long.

## Where the kernel fits within the OS
To put the kernel in context, you can think of a Linux machine as having 3 layers:

- The hardware: The physical machine—the bottom or base of the system, made up of memory (RAM) and the processor or central processing unit (CPU), as well as input/output (I/O) devices such as storage, networking, and graphics. The CPU performs computations and reads from, and writes to, memory.
- The Linux kernel: The core of the OS. (See? It’s right in the middle.) It’s software residing in memory that tells the CPU what to do.
- User processes: These are the running programs that the kernel manages. User processes are what collectively make up user space. User processes are also known as just processes. The kernel also allows these processes and servers to communicate with each other (known as inter-process communication, or IPC).
- Code executed by the system runs on CPUs in 1 of 2 modes: kernel mode or user mode. Code running in the kernel mode has unrestricted access to the hardware, while user mode restricts access to the CPU and memory to the SCI. A similar separation exists for memory (kernel space and user space). These 2 small details form the base for some complicated operations like privilege separation for security, building containers, and virtual machines.

This also means that if a process fails in user mode, the damage is limited and can be recovered by the kernel. However, because of its access to memory and the processor, a kernel process crash can crash the entire system. Since there are safeguards in place and permissions required to cross boundaries, user process crashes usually can’t cause too many problems.
