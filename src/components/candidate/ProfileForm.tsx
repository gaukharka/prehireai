import React, { useState } from "react";
import { type Experience } from "./interface";
import { type Project } from "./interface";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

export const ProfileForm = () => {

    const [step,setStep] = useState(1)
    const [profile, setProfile] = useState<any>({
    rolePreference: "",
    locationPreference: "",
    skills: "",
    experience: [] as Experience[],
    projects: [] as Project[],
    hobbies: "",
    education: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    alert("Profile saved!");
  };

    return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Candidate Profile - Step {step}</h2>

      {step === 1 && (
        <>
          <Input
            label="Preferred Role"
            name="rolePreference"
            value={profile.rolePreference}
            onChange={handleChange}
          />
          <Input
            label="Preferred Location"
            name="locationPreference"
            value={profile.locationPreference}
            onChange={handleChange}
          />
          <Input
            label="Skills (comma-separated)"
            name="skills"
            value={profile.skills}
            onChange={handleChange}
          />
        </>
      )}

      {step === 2 && (
        <>
          <Input
            label="Education"
            name="education"
            value={profile.education}
            onChange={handleChange}
          />
          <Input
            label="Hobbies"
            name="hobbies"
            value={profile.hobbies}
            onChange={handleChange}
          />
        </>
      )}

      {step === 3 && (
        <>
          {/* Basic single project and experience input (can extend to multiple) */}
          <Input
            label="Most Recent Company"
            name="company"
            onChange={(e) =>
              setProfile({
                ...profile,
                experience: [{ ...profile.experience[0], company: e.target.value }],
              })
            }
          />
          <Input
            label="Project Title"
            name="projectTitle"
            onChange={(e) =>
              setProfile({
                ...profile,
                projects: [{ ...profile.projects[0], title: e.target.value }],
              })
            }
          />
        </>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <Button onClick={() => setStep(step - 1)} label="Back" />
        )}
        {step < 3 ? (
          <Button onClick={() => setStep(step + 1)} label="Next" />
        ) : (
          <Button onClick={handleSubmit} label="Submit Profile" />
        )}
      </div>
    </div>
  );
}