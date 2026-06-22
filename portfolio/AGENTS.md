# AGENTS.md

## What lives here
This repository is built and maintained with the help of AI coding agents.

## Models in use
- Gemini (cloud) — used for content generation, brainstorming.
- Gemma 4 2B via Ollama or LM Studio (local) — used for offline work and code review.

## Responsible AI rules
- Every model output is reviewed by a human before it is merged.
- No personal data, credentials, or proprietary code is sent to a public model.
- AI assistance is disclosed in PR descriptions and in the README footer.
- Known limitations: small local models may hallucinate citations; we verify every citation against the source PDF.
- High-risk changes (auth, payments, student records) require a second human reviewer.

## Escalation
If a model produces something that looks wrong, stop and ask a human.