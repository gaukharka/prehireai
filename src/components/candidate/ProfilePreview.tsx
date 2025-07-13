import { type ProfilePreviewProps } from "./interface";



export const ProfilePreview = ({ profile }: ProfilePreviewProps) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
        <p className="text-sm text-gray-600">{profile.email}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Preferred Role</h3>
        <p>{profile.rolePreference}</p>
        <h3 className="text-xl font-semibold">Preferred Location</h3>
        <p>{profile.locationPreference}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {profile.experience.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Experience</h3>
          {profile.experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{exp.role} @ {exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {profile.projects.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Projects</h3>
          {profile.projects.map((proj, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{proj.title}</p>
              <p className="text-sm text-gray-500">{proj.techStack}</p>
              <p className="text-sm">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {profile.education && (
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <p>{profile.education}</p>
        </div>
      )}

      {profile.hobbies && (
        <div>
          <h3 className="text-xl font-semibold">Hobbies</h3>
          <p>{profile.hobbies}</p>
        </div>
      )}
    </div>
  );
}
