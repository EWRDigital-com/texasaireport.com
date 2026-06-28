---
title: "TRAIGA Compliance Checklist for Texas General Counsel"
dek: "TRAIGA has been in effect since January 1. The AG's complaint portal opens September 1. Here's what GCs and compliance owners need to do now — before the first CID lands."
section: policy
tags: ["TRAIGA", "compliance", "AI governance", "Texas AG", "NIST AI RMF"]
publishDate: 2026-06-25
keyPoints:
  - "Build an AI inventory first — shadow AI across hiring platforms, chatbots, and document review is the most common compliance gap."
  - "Disclosure duties under TRAIGA fall only on government agencies and healthcare providers, not on private non-healthcare businesses."
  - "A documented NIST AI Risk Management Framework review is an explicit statutory affirmative defense."
  - "The 60-day cure period may be too short to modify an AI system — making a notice of violation functionally a cease-and-desist."
faqs:
  - q: "If an end user or employee misuses an AI tool in a way that causes harm, is the company that deployed it liable under TRAIGA?"
    a: >-
      Not automatically. TRAIGA includes a third-party misuse carveout: a developer or deployer cannot be held
      liable simply because an end user or other third party uses an AI system for a prohibited purpose.
      Liability turns on the intent behind how the system was developed or deployed, not on downstream misuse
      by others. The carveout does not, however, relieve the deployer of having documented the system's
      intended safeguards.
  - q: "Does TRAIGA require companies to use the NIST AI Risk Management Framework?"
    a: >-
      No — the NIST AI RMF is not mandatory. But conducting a documented internal review using it is one of
      TRAIGA's explicit statutory affirmative defenses. A company that can show it ran that review has a
      defense against enforcement even if a violation occurred. The other affirmative defenses are red-teaming
      or adversarial testing, compliance with state-agency guidance, and acting on feedback from developers,
      deployers, or stakeholders.
sources:
  - label: "Norton Rose Fulbright — TRAIGA Deep Dive"
    url: "https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act"
  - label: "Baker Botts — TRAIGA: What Companies Need to Know"
    url: "https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-enacts-responsible-ai-governance-act-what-companies-need-to-know"
  - label: "Latham & Watkins — Texas Signs TRAIGA"
    url: "https://www.lw.com/en/insights/texas-signs-responsible-ai-governance-act-into-law"
  - label: "CTTS — Making TRAIGA Compliance Workable"
    url: "https://www.cttsonline.com/2026/06/23/managed-it-services-texas-making-traiga-compliance-workable-for-your-business-in-2026/"
modalpointRelevant: true
draft: false
---

The Texas AG's complaint portal has a September 1, 2026 statutory deadline. Once it opens, consumers can file TRAIGA complaints directly, and the enforcement clock starts moving faster. A GC who hasn't run a compliance baseline yet is already behind. Here's the work, in the order that matters.

## Step 1: Build an AI inventory

The first enforcement exposure isn't a prohibited use — it's not knowing what AI you're running. TRAIGA applies to any entity that develops, deploys, or promotes AI products to Texas consumers, and the statutory definition of "AI system" is broad: any machine-based system that infers from inputs to generate content, decisions, predictions, or recommendations.

In practice, the footprint surprises people. Hiring platforms, document-review tools, email scheduling assistants, and chatbots all qualify. Audit your stack, vendor SaaS included. For each tool, two threshold questions drive everything downstream: Is it consumer-facing? Is it making or influencing a decision?

**One caution on disclosure:** if your entity is a private non-healthcare company, TRAIGA imposes no consumer-facing AI disclosure requirement. Disclosure obligations fall separately on government agencies (before or at the time of AI interaction, in plain English, no dark patterns) and on healthcare providers (at the time of service, or as soon as practicable). Don't conflate the two, and don't take on private-sector disclosure costs you don't owe.

## Step 2: Lean on the NIST safe harbor — and document it

TRAIGA provides explicit affirmative defenses, and the most accessible is an internal review conducted using the NIST AI Risk Management Framework. This isn't boilerplate. Run it, date it, file it. The other defenses — red-teaming or adversarial testing, compliance with state-agency guidance, and acting on stakeholder feedback — work the same way: they only help if there's a paper trail.

Build that trail now, not in response to a civil investigative demand. A CID under [§ 552.103](https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149F.pdf) can require AI system descriptions, intended-use documentation, training-data categories, performance metrics, known limitations, post-deployment monitoring records, and user-safeguard measures — plus anything else the AG deems relevant. If you can't produce that on short notice, the gap itself becomes the exposure.

## Step 3: Understand the penalty tiers and the cure problem

Penalties are tiered, not flat:

- **Curable violations:** $10,000–$12,000 per violation
- **Uncurable violations:** $80,000–$200,000 per violation
- **Continuing violations:** $2,000–$40,000 per day

The statute never defines what makes a violation curable versus uncurable. Per Norton Rose Fulbright's Marc Collier and Ethan Glenn, that distinction "will be developed by experts, the courts and the resulting common law." For now, you're operating without a clear line.

More pressing: the 60-day cure period after a notice of violation may not be enough time to materially change an AI system. As Collier and Glenn put it, "a notice of violation will effectively function as a cease and desist order" when the cure requires reprogramming. That is the argument for pre-enforcement compliance over reactive scrambling.

There is no private right of action under TRAIGA; the AG has exclusive enforcement authority. But the AG's data-privacy enforcement team is already built out, and the complaint pipeline opens in September.

## The September 1 inflection point

The complaint portal is expected to open by September 1, 2026 — the statutory deadline under Section 8 of HB 149. No publicly reported TRAIGA enforcement actions had been filed as of late June 2026, but the office has been assembling enforcement infrastructure since the law was signed. The window to close documentation gaps is before the portal opens, not after the first complaint triggers a CID.
