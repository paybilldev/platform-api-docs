---
title: Infrastructure
sidebar_label: Infrastructure
---

# Infrastructure as Code (IaC)

Platform Infrastructure as Code (IaC) was created to simplify the deployment and operation of Platform API across cloud and containerized environments. While initially focused on AWS, Google Cloud, Microsoft Azure, and Kubernetes, Platform API is fundamentally platform-agnostic, running on Docker and Node.js. As a result, the infrastructure patterns and modules we provide can be adopted across most modern cloud ecosystems.

Our reference architectures are based on proven cloud design patterns and industry best practices. On AWS, for example, they are designed to align with the principles of the AWS Well-Architected Framework. Platform IaC consists of a collection of high-level Terraform modules that implement these reference architectures in a consistent and repeatable manner.

These modules provide standardized interfaces for managing common infrastructure concerns such as:

* Networking
* Security
* Identity and access management
* Monitoring and observability
* Compute and application hosting

The modules follow opinionated design patterns that minimize dependencies between components, improve composability, and simplify long-term maintenance. By developing and maintaining Platform-aligned Terraform modules, we retain complete control over the infrastructure lifecycle, enabling faster iteration, proactive updates, and consistent standards across environments and teams.

Combined with our reference architecture repositories, Platform IaC provides a strong foundation for projects of any size. Whether you're building a proof of concept or deploying a large-scale SaaS platform, teams can rapidly provision production-ready infrastructure with minimal operational overhead.

To maintain security and compliance, all infrastructure code is continuously analyzed using Snyk Infrastructure as Code and SonarCloud.

# Why Platform IaC

Platform IaC provides a ready-to-use control plane that accelerates the development and operation of modern SaaS applications. Similar to how our application services provide reusable building blocks for business functionality, Platform IaC delivers reusable infrastructure capabilities that help organizations build, launch, and scale multi-tenant solutions faster.

Key benefits include:

* Faster time to market
* Infrastructure built on industry best practices
* Plug-and-play architecture components
* Standardized deployment patterns
* Reduced operational complexity
* Flexibility to customize and extend based on business requirements
* Alignment with proven SaaS architecture principles inspired by AWS SaaS Factory patterns

Platform IaC is designed to support SaaS workloads while remaining adaptable to the unique needs of each organization.

# Architecture Overview

At a high level, Platform IaC consists of two primary layers:

## Control Plane

The Control Plane is the operational foundation of a multi-tenant SaaS platform. It provides the centralized services required to manage, provision, monitor, and operate tenants through a unified experience.

The Control Plane follows a three-tier architecture consisting of:

* User Interface (UI) and administrative tools
* APIs and orchestration services
* Data and persistence services

These services coordinate tenant lifecycle management, onboarding, configuration, authentication, billing integration, monitoring, and other cross-cutting platform capabilities.

Although the Control Plane manages tenants, it is not itself multi-tenant. Instead, it acts as a shared administrative layer that serves all tenants across the platform.

An administrative application, whether delivered as a web application, command-line interface, or API, enables platform operators to manage and govern the SaaS environment efficiently.

## Application Plane

The Application Plane contains the actual business applications and tenant workloads.

This layer hosts the multi-tenant functionality consumed by end users. Depending on the deployment model, tenants may share infrastructure resources or operate within isolated environments while still being governed through the centralized Control Plane.

# Repository Scope

This repository focuses on the Control Plane components of the SaaS architecture, providing the infrastructure, services, and operational tooling required to manage tenant environments at scale.

# What We Offer

The Control Plane serves as the operational backbone of your SaaS platform.

With Platform IaC, you can:

* Streamline tenant onboarding and provisioning
* Monitor tenant environments from a single location
* Manage platform-wide configuration and governance
* Standardize operational processes
* Improve visibility, security, and compliance
* Scale confidently as your customer base grows

By centralizing these capabilities, Platform IaC enables teams to focus on delivering business value rather than managing infrastructure complexity.

# Logical Architecture

![Control Plane Architecture](https://raw.githubusercontent.com/paybilldev/platform-api/refs/heads/main/apps/platform-api/public/images/control-plane.png)

![High-Level Architecture](https://github.com/paybilldev/platform-api/blob/main/apps/platform-api/public/images/high-level-arch.png?raw=true)

# Consulting

Looking to accelerate your next SaaS platform or cloud-native project?

Our team can help you design, implement, and operate scalable multi-tenant architectures using Platform IaC and industry-proven cloud practices.

Contact us:

https://paybill.ke/contact/sales/
