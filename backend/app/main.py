from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

app = FastAPI(title="JobPilot API", version="0.1.0")

allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in allowed_origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GenerateRequest(BaseModel):
    name: str | None = None
    role: str | None = None
    experience: list[str] | None = None
    job_description: str | None = None

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/generate/resume")
def generate_resume(payload: GenerateRequest):
    resume = f"""Resume — {payload.name or 'Candidate'}
Target Role: {payload.role or 'N/A'}

Experience:
- {('\n- ').join(payload.experience or ['Add experience bullets here'])}

Highlights:
- Tailored for JD: {bool(payload.job_description)}
"""
    return {"resume": resume}

@app.post("/generate/cover-letter")
def generate_cover_letter(payload: GenerateRequest):
    letter = f"""Dear Hiring Manager,

I’m excited to apply for the {payload.role or 'role'} position. My experience includes:
{('\n').join(f'- {e}' for e in (payload.experience or ['Add experience bullet']))}

Sincerely,
{payload.name or 'Your Name'}
"""
    return {"cover_letter": letter}
