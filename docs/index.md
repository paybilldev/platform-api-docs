---

title: Introduction
sidebar_label: Introduction
---------------------------

# Platform Documentation

## What is Platform?

Platform is an open-source cloud application platform designed to accelerate the development, deployment, and operation of modern multi-tenant SaaS and enterprise applications.

Built around a catalog of reusable services, infrastructure automation, and operational tooling, Platform provides developers and organizations with the foundational building blocks required to launch cloud-native applications quickly and consistently across private and public cloud environments.

The Platform architecture draws inspiration from the design principles of the Supabase control plane, which is currently closed source. While influenced by these proven architectural patterns, Platform is an independent implementation focused on providing an open, extensible, and cloud-agnostic foundation for building and operating SaaS products at scale.

---

## Platform Architecture

Platform is organized into three core layers that work together to provide a complete application platform:

* **Platform UI (Control Plane)**
* **Infrastructure as Code (IaC)**
* **Platform API (Application Services)**

Together, these components provide everything required to provision infrastructure, manage tenants, operate services, and build cloud-native applications.

![](/img/assets/stack.svg)

---

## 1. Platform UI

Platform UI serves as the control plane for the entire platform.

Inspired by modern cloud platforms, it provides a centralized interface for managing organizations, projects, environments, infrastructure resources, and tenant lifecycle operations.

Key capabilities include:

* Tenant onboarding and provisioning
* Organization and project management
* Subscription and billing management
* Environment and deployment management
* Infrastructure monitoring and observability
* Security and compliance controls
* API and service management
* Role-based access control
* Resource governance and automation

Platform supports multiple tenancy models, including:

* **Silo** – dedicated infrastructure per tenant
* **Bridge** – shared infrastructure with isolated resources
* **Pool** – fully shared multi-tenant infrastructure

The control plane provides both graphical and programmatic interfaces, enabling teams to manage platform resources through the web interface or APIs.

👉 [Get Started with Platform UI](./ui/)

---

## 2. Infrastructure as Code (IaC)

The Infrastructure layer provides reusable Terraform modules and reference architectures for provisioning and managing cloud infrastructure.

Platform IaC enables teams to deploy consistent, secure, and scalable environments across cloud providers and private infrastructure.

Capabilities include:

* Cloud infrastructure provisioning
* Kubernetes platform deployment
* Networking and security automation
* Identity and access management
* Monitoring and observability
* Disaster recovery and resilience patterns
* Multi-environment deployments

The infrastructure modules are built using opinionated best practices and are designed to support organizations ranging from startups to large enterprises.

👉 [Get Started with Platform IaC](./iac)

---

## 3. Platform API

Platform API provides a collection of reusable backend services and application building blocks that accelerate software development.

Rather than repeatedly implementing common platform functionality, development teams can leverage pre-built services for authentication, authorization, auditing, notifications, payments, file storage, workflow orchestration, and more.

Benefits include:

* Faster development cycles
* Consistent service patterns
* Built-in security controls
* Event-driven integrations
* Scalable microservice architecture
* Reduced operational complexity

Platform API enables teams to focus on delivering business value while relying on proven platform capabilities.

👉 [Get Started with Platform API](./api)

---

## Why Platform?

Building a production-ready SaaS platform requires far more than writing application code. Teams must solve challenges around infrastructure, tenant management, security, provisioning, monitoring, governance, and operational automation.

Platform provides a unified solution to these challenges by combining:

* Open-source technologies
* Proven SaaS architecture patterns
* Infrastructure automation
* Tenant management capabilities
* Reusable application services
* Cloud-native operational tooling

The result is a platform that enables organizations to build, launch, and scale modern SaaS applications significantly faster while maintaining operational excellence and architectural consistency.

Whether you are building an internal platform, launching a new SaaS product, or modernizing existing systems, Platform provides the foundation needed to move from idea to production with confidence.
