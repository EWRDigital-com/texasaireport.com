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

TRAIGA has been in effect since January 1, 2026. No enforcement actions have been reported. Some Texas companies are reading that silence as permission to wait. They shouldn't be.

The headline penalty numbers — up to $200,000 per uncurable violation — are real. But according to practitioners advising Texas companies right now, the actual exposure isn't primarily about what your AI does. It's about whether you can prove, on short notice, that you knew what your AI was doing.

## The process gaps that create real risk

Start with shadow AI. According to one 2026 industry estimate cited by managed IT firm CTTS, 57% of employees use consumer generative AI at work, and roughly one-third paste sensitive company data into those tools. The same source attributes an average of approximately $670,000 in added breach costs to shadow-AI incidents. Whether or not those figures hold up to scrutiny in your organization, the underlying problem is structural: most companies are surprised by how many AI tools are running across their hiring platforms, document workflows, email, and analytics — tools they didn't formally deploy and can't inventory.

That inventory problem compounds fast. The Texas AG, on investigation, can issue a Civil Investigative Demand requiring comprehensive documentation: AI system descriptions, training data categories, inputs and outputs, performance metrics, known limitations, and post-deployment monitoring records. Companies that cannot respond face additional exposure on top of whatever triggered the inquiry.

The second gap is organizational. TRAIGA's liability standard turns on intent — whether an AI system was developed or deployed *with the intent* to harm, manipulate, or discriminate. That sounds like a high bar until you realize that demonstrating intent-to-comply requires documented design decisions. As practitioners at matthew-clarke.com have noted, "the intent standard requires documented design decisions, which means product and engineering teams must be part of the compliance programme — not consulted after the fact." Treating TRAIGA as a legal-department problem leaves the people who actually build and configure AI systems outside the compliance perimeter.

The third gap is vendor documentation. If your HR platform, contract-review tool, or customer-service chatbot uses AI under the hood, TRAIGA's obligations attach to you as the deployer. Vendors that cannot produce documentation of their system's purpose, training data, and safeguards on short notice represent a direct compliance gap — one that a CID will expose.

## The 60-day cure period is shorter than it looks

TRAIGA gives companies 60 days to cure a violation after receiving notice from the AG. Many compliance programs are built around that window as a safety net. It may not be one.

Norton Rose Fulbright's Marc Collier and Ethan Glenn wrote in March 2026: "given the complexity of AI systems, 60 days may be insufficient time to 'cure' a violation of TRAIGA, particularly because a 'cure' might mean that the party must substantially modify an AI system... If this 60-day window is not sufficient time to alter an AI system's programming or functionality, then a notice of violation will effectively function as a cease and desist order."

The statute also doesn't define what makes a violation "curable" versus "uncurable." That line — the difference between a $10,000–$12,000 curable penalty and an $80,000–$200,000 uncurable one — will, as Norton Rose Fulbright put it, be "developed by experts, the courts and the resulting common law." Early enforcement will write those rules. The first companies to receive violation notices become the case law.

## What to do before September 1

The statute requires the AG's public complaint portal to be live by September 1, 2026 — and it may already be open — so consumer complaints could be flowing directly to enforcement now. The quiet period is ending.

Five actions that matter now:

1. **Run a complete AI inventory.** Every tool, every platform, every workflow — not just the ones IT sanctioned. Shadow AI belongs on the list.
2. **Write and distribute an AI policy.** As CTTS observed, "common exposure for most owners is process related rather than substantive: not having a written policy, not knowing which employees are using which tools, and not being able to show a paper trail if an investigation begins."
3. **Align with the NIST AI Risk Management Framework.** TRAIGA provides an explicit safe harbor for companies that conduct internal review using the NIST AI RMF. That's one of four affirmative defenses in the statute — and the one most directly in your control.
4. **Document red-team and adversarial testing.** The safe harbor also covers companies that discover violations through adversarial testing. Dated records of testing and remediation are the paper trail that creates defensible regulatory responses.
5. **Audit your vendors.** Review every material AI vendor relationship. If a vendor can't produce documentation of their system's inputs, outputs, and safeguards, escalate — or find a vendor who can.

The enforcement calendar is no longer abstract. September 1 is nine weeks away.
