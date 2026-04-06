---
title: "When Should AI Explain Itself?"
date: "2026-04-06"
summary: "When AI operates as a supervised tool, human professionals retain full accountability and can demand explanations as needed. However, autonomous AI agents in high-stakes domains must be architecturally required to document their reasoning, serving as a substitute accountability mechanism and enabling error detection and correction."
tags:
  [
  "artificial intelligence",
  "AI explainability",
  "autonomous agents",
  "responsible AI",
  "software engineering ethics",
  "reliable computing",
  "accountability",
  "black box systems",
  "AI safety",
  "social implications of cs",
  "professional ethics"
]
published: true
author: "Yash Barve"
category: "Explore"
coverImage: "/blog/when-should-ai-explain-itself.png"
coverImageCreditText: "Alice Bot"
coverImageCreditLink: "https://alicebot.org/wp-content/uploads/2026/04/ai-black-box-transparency-feature-image.jpeg"

---

## Introduction

The integration of Artificial Intelligence into professional domains like medicine, law, and software engineering is now a reality, and represents a significant technological shift. As these AI models transition from passive search tools to active generators of complex logic, the 'black box' nature of these tools has become a critical point of concern. Neil Postman (1998) warns that every technology is simultaneously a burden and a blessing, and that society tends to see only the gifts while remaining blind to the costs. This is now increasingly evident in AI-assisted code generation, where the productivity gains hide the erosion of professional accountability. A fundamental ethical and technical question has emerged: under what conditions should these systems be required to explain their logic to their human users? This essay delves deeper into this problem, and makes the case for agency-based explainability. When a human uses AI as a tool, the professional takes the moral and legal responsibility. However, when an AI operates as an autonomous agent, it should be required to provide detailed documentation and reasoning for its actions, just as a human professional is accountable for the decisions they make.

## The Need for Explainability

A 'black box' system is one where the internal logic is hidden from its human users. The fundamental danger of such systems is the erosion of reliable computing and the subsequent creation of an accountability gap (Parnas, 1985). When a system provides an output without a verifiable rationale, it forces the human professionals into a position of blind trust. The human gatekeeper is no longer an active supervisor, but just a passive observer. Without a mandatory requirement for explainability, we risk deploying systems that are technically sophisticated but socially irresponsible. This would leave professionals unable to diagnose, correct, or take liability for the outcomes of the tools they employ.

The lack of transparency in autonomous AI-based systems also complicates the process of error detection and system evolution. Software integrity relies on the ability to audit the origin and intent of logic. If an automated system fails, but its logic remains inaccessible, it becomes impossible to determine the cause of the error. This is particularly dangerous in AI-generated code, where a syntactically valid but logically flawed function can pass surface-level review and silently deploy into production. By forcing the 'black box' to explain its state, engineers can use the 'thought traces' to refine the reward functions of future models and prevent the amplification of errors.

The historic cost of this opacity is documented in tragedies like the Therac-25 radiation accidents and the Boeing 737 Max crisis. In the case of the Therac-25, the software provided cryptic "Malfunction 54" error codes rather than explaining the race conditions occurring between the operator's input and the hardware's configuration (Leveson & Turner, 1993). The machine could not explain its failure. But, the human operators continued to trust the tool, leading to lethal radiation overdoses. Similarly, the Boeing 737 Max demonstrated the danger of an autonomous agent (MCAS) acting on hidden logic, leaving pilots unable to diagnose why the aircraft was nose-diving in real-time (U.S. House of Representatives, 2020). It is important to note that neither of these are AI systems in the modern sense. However, they represent an issue that is only magnified in AI systems: when a system cannot explain its reasoning, the human operator cannot intervene effectively.

## AI as a Supervised Tool

In the current landscape of software development, tools like Cursor, Claude Code, or GitHub Copilot function as sophisticated coding assistants. They are given access to a codebase, and their job is to help the developer write code given the existing code and specific functional targets. However, the responsibility for the generated output rests entirely with the human developer. If a developer grants an AI access to a codebase, they are delegating a task and not transferring their legal or ethical liability. Therefore, the burden remains on the human's experience and skill to interrogate the AI for an explanation whenever required.

Computer programming is a high-discipline craft requiring deep internal understanding. A programmer who cannot explain their code has not truly understood it (Dijkstra, 1975). If a developer pushes AI-generated code to production without personal verification, they have bypassed the professional standards of Reliable Computing (Parnas, 1985). In doing so, they will have also violated the ACM Code of Ethics (2018), which mandates that professionals strive for high quality and accept full responsibility for their work. In this scenario, forcing AI to generate documentation is often redundant because what matters is whether the human responsible for it can vouch for its correctness, safety, and intent.

## AI as an Autonomous Agent

The ethical and technical arguments shift fundamentally when AI systems operate without continuous human oversight. In high-stakes domains like medicine, infrastructure, and law, an autonomous agent may generate and deploy logic without a human intermediary to catch errors in real-time. Unlike the supervised tool scenario, autonomous systems remove the developer's judgment as the primary audit mechanism.

In these scenarios, the AI must be held to the same standards as that of a human professional. However, because the AI cannot be held personally liable, the documentation it produces becomes the substitute mechanism for accountability. Without this enforcement, the system essentially becomes a 'black box'. For instance, if an AI-driven diagnostic tool suggests a high-risk surgery, a detailed documentation of its reasoning is required for medical malpractice insurance and patient safety. This requirement also serves as a mechanism for error detection. The detailed 'thought traces' create a critical feedback loop, allowing engineers to identify systemic hallucinations and refine the reward functions for future models.

This requirement for documentation should also extend to autonomous coding agents, like Devin or Claude-based CLI agents that operate independently within a developer's environment. The critical distinction between these agents and standard LLM interfaces like ChatGPT or Cursor is the degree of agency and privileged access they are given. While standard tools require human-initiated prompts and operate for a limited duration, autonomous agents are often granted the permissions to execute multi-step actions, modify filesystems, and deploy services without constant oversight. A supervised tool that produces a flawed suggestion is caught at the moment of human review. But, an autonomous agent that makes a flawed decision mid-pipeline may propagate that error across multiple downstream actions before anyone becomes aware. Therefore, these agents must be architecturally mandated to generate a reasoning log for every non-trivial action. Without this verifiable rationale, the human overseer inherits full liability for a system they did not meaningfully supervise, violating the foundational principles of reliable computing that Parnas (1985) identified as essential to professional software engineering.

## What Constitutes Appropriate Documentation?

For documentation to serve as a professional audit log, it must satisfy three specific criteria:

1. **Logical Intent** describes the 'why' behind a decision. An autonomous agent must justify its choices against alternatives. It should explain not just what it did, but why that approach best met the system's safety and performance requirements. This allows human supervisors to verify decisions against predefined requirements and constraints rather than simply trusting the output.

2. **Software Traceability** requires that documentation include the origin of the code. This helps in identifying whether a pattern was derived from a deprecated library, a copyleft-licensed repository, or a source with known vulnerabilities. If an autonomous agent injects a dependency, it must document why that specific version was chosen and verify its integrity. Without this, the human supervisor is blind to supply-chain attacks and algorithmic bias.

3. **Edge-Case Analysis** demands that documentation explicitly outline what the code cannot do. By documenting its constraints, the AI provides a 'warning' that prevents humans from over-trusting the system.

## Conclusion

The requirement for AI explainability is no longer just an obligation, but a functional necessity tied to the agency granted to the system. As this essay has argued, when a software professional utilizes AI as a supervised tool, they remain the primary audit trail, assuming all legal and ethical liability through their own rigorous testing and documentation. However, as we move toward 'digital employees' and autonomous agents across domains, we must enforce a higher architectural standard of inbuilt transparency. By mandating a verifiable rationale for autonomous actions, particularly in AI-generated code, we ensure that technological progress does not come at the cost of professional integrity, human safety, or the foundational principles of reliable computing (Parnas, 1985).

## References

1. ACM Council. (2018). *ACM Code of Ethics and Professional Conduct*. Association for Computing Machinery. https://www.acm.org/code-of-ethics

2. Dijkstra, E. W. (1975). *Craftsman or Scientist?* (EWD 480). Edsger W. Dijkstra Archive, Center for American History, University of Texas at Austin. https://www.cs.utexas.edu/~EWD/transcriptions/EWD04xx/EWD480.html

3. Leveson, N. G., & Turner, C. S. (1993). An Investigation of the Therac-25 Accidents. *Computer, 26*(7), 18–41. https://www.cs.columbia.edu/~junfeng/08fa-e6998/sched/readings/therac25.pdf

4. Postman, N. (1998). *Five Things We Need to Know About Technological Change*. [Address to the Denver Public Schools]. University of Waterloo CS492 Course Materials. https://student.cs.uwaterloo.ca/~cs492/papers/neil-postman--five-things.html

5. Parnas, D. L. (1985). Software Aspects of Strategic Defense Systems (The Limits of Correctness). *Communications of the ACM, 28*(12), 1326–1335. https://web.stanford.edu/class/cs99r/readings/parnas1.pdf

6. U.S. House of Representatives. (2020). *The Investigative Report on the Design, Development, and Certification of the Boeing 737 MAX*. Committee on Transportation and Infrastructure. https://www.congress.gov/event/116th-congress/house-event/110066/text