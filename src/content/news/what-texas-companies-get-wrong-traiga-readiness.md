---
title: "What Texas Companies Get Wrong About TRAIGA Readiness"
dek: "The biggest TRAIGA risk isn't the headline penalties. It's process: no AI inventory, no paper trail, no time to re-engineer a system inside a 60-day cure window."
section: policy
tags: ["TRAIGA", "compliance", "AI governance", "AI policy", "Texas AI law"]
publishDate: 2026-06-26
keyPoints:
  - "Most TRAIGA exposure is process-related: no written AI policy, incomplete AI inventory, and no documentation trail if the AG comes calling."
  - "TRAIGA's intent standard pulls product and engineering teams into the compliance program — legal alone cannot carry it."
  - "The 60-day cure period may be too short to re-engineer a non-compliant system; in practice, a violation notice can function as a cease-and-desist."
  - "The statute requires the AG's complaint portal to be live by September 1, 2026 — it may already be open — the moment consumer complaints start flowing directly to enforcement."
faqs:
  - q: "If a vendor's AI tool causes a TRAIGA violation, does liability fall on the vendor or the company that deployed it?"
    a: >-
      TRAIGA's third-party misuse carveout means a developer or deployer can't be held liable simply because
      an end user or other third party uses an AI system for a prohibited purpose. But that carveout doesn't
      shield a deployer from liability for its own choice to use a vendor's system. If the deploying company's
      configuration or use of a vendor tool results in prohibited conduct, the deployer carries the exposure —
      which is why vendor documentation of purpose, training data, inputs, outputs, and safeguards is a
      compliance requirement, not optional due diligence.
  - q: "Is a spreadsheet enough to track TRAIGA compliance?"
    a: >-
      It's a weak foundation. A spreadsheet can't demonstrate the systematic implementation of the NIST AI
      Risk Management Framework — one of TRAIGA's four explicit statutory affirmative defenses. The NIST safe
      harbor turns on showing a documented, structured review process, and an ad hoc spreadsheet inventory is
      unlikely to satisfy that standard when the AG issues a Civil Investigative Demand.
sources:
  - label: "Norton Rose Fulbright — TRAIGA Deep Dive"
    url: "https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act"
  - label: "CTTS — Making TRAIGA Compliance Workable (June 2026)"
    url: "https://www.cttsonline.com/2026/06/23/managed-it-services-texas-making-traiga-compliance-workable-for-your-business-in-2026/"
  - label: "Baker Botts — What Companies Need to Know"
    url: "https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-enacts-responsible-ai-governance-act-what-companies-need-to-know"
  - label: "Duane Morris — TRAIGA and Employers (May 2026)"
    url: "https://www.duanemorris.com/alerts/texas_new_ai_law_is_now_in_effect_what_employers_need_to_know_about_traiga2_0526.html"
modalpointRelevant: true
draft: false
---

TRAIGA has been in effect since January 1, 2026, and no enforcement actions have been reported. Some Texas companies are reading that silence as permission to wait. It isn't.

The headline penalties — up to $200,000 per uncurable violation — are real enough. But the practitioners advising Texas companies right now keep landing on the same point: the actual exposure isn't mostly about what your AI does. It's about whether you can prove, on short notice, that you knew what your AI was doing.

## The process gaps that create real risk

Start with shadow AI. In [one 2026 estimate cited by managed-IT firm CTTS](https://www.cttsonline.com/2026/06/23/managed-it-services-texas-making-traiga-compliance-workable-for-your-business-in-2026/), 57% of employees use consumer generative AI at work, roughly a third paste sensitive company data into those tools, and shadow-AI incidents add an average of about $670,000 in breach costs. Treat the specific figures as directional rather than gospel — but the structural problem they point at is real: most companies are surprised by how many AI tools are quietly running across hiring platforms, document workflows, email, and analytics, tools they never formally deployed and can't currently inventory.

That inventory gap compounds fast. On investigation, the Texas AG can issue a Civil Investigative Demand requiring comprehensive documentation — AI system descriptions, training-data categories, inputs and outputs, performance metrics, known limitations, and post-deployment monitoring records. A company that can't respond faces exposure on top of whatever triggered the inquiry.

The second gap is organizational. TRAIGA's liability standard turns on intent — whether a system was developed or deployed *with the intent* to harm, manipulate, or discriminate. That sounds like a high bar until you realize the flip side: demonstrating intent-to-comply requires documented design decisions. And documented design decisions live with the product and engineering teams, not with legal. Treat TRAIGA as a legal-department problem and you leave the people who actually build and configure the AI outside the compliance perimeter.

The third gap is vendor documentation. If your HR platform, contract-review tool, or customer-service chatbot runs AI under the hood, TRAIGA's obligations attach to you as the deployer. A vendor that can't produce documentation of its system's purpose, training data, and safeguards on short notice is a direct compliance gap — one a CID will expose.

## The 60-day cure period is shorter than it looks

TRAIGA gives companies 60 days to cure a violation after notice from the AG. Plenty of compliance programs treat that window as a safety net. It may not be one.

Norton Rose Fulbright's Marc Collier and Ethan Glenn wrote in March 2026: "given the complexity of AI systems, 60 days may be insufficient time to 'cure' a violation of TRAIGA, particularly because a 'cure' might mean that the party must substantially modify an AI system... If this 60-day window is not sufficient time to alter an AI system's programming or functionality, then a notice of violation will effectively function as a cease and desist order."

The statute also never defines what makes a violation "curable" versus "uncurable" — the line between a $10,000–$12,000 penalty and an $80,000–$200,000 one. As Norton Rose Fulbright put it, that will be "developed by experts, the courts and the resulting common law." Early enforcement writes those rules. The first companies to receive violation notices become the case law.

## What to do before September 1

The complaint portal must be live by September 1, 2026 — and may already be open — so consumer complaints could be reaching enforcement now. The quiet period is ending. Five things matter most:

1. **Run a complete AI inventory.** Every tool, every platform, every workflow — not just the ones IT sanctioned. Shadow AI belongs on the list.
2. **Write and distribute an AI policy.** As CTTS observed, "common exposure for most owners is process related rather than substantive: not having a written policy, not knowing which employees are using which tools, and not being able to show a paper trail if an investigation begins."
3. **Align with the NIST AI Risk Management Framework.** TRAIGA provides an explicit safe harbor for a documented NIST AI RMF review — one of four affirmative defenses, and the one most directly in your control.
4. **Document red-team and adversarial testing.** The safe harbor also covers violations discovered through adversarial testing. Dated records of testing and remediation are the paper trail that makes a regulatory response defensible.
5. **Audit your vendors.** Review every material AI vendor relationship. If a vendor can't produce documentation of its system's inputs, outputs, and safeguards, escalate — or replace it.

The enforcement calendar is no longer abstract. September 1 is nine weeks out.
