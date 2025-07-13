import './App.css'
import { ProfileForm } from './components/candidate/ProfileForm'
import { ProfilePreview } from './components/candidate/ProfilePreview'

const mockdata  = {
  name: "Gaukhar",
    email: 'gaukhar.kashaganova@gmail.com',
    rolePreference: 'Front-end Engineer',
    locationPreference: 'Remote',
    skills: ['frontend', 'React.js'],
    hobbies: '',
    education: 'Industrial Engineering',
    experience: ['Frontend engineer'],
    projects: ['AG2R']
}

function App() {

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
            {/* <ProfileForm/> */}
            <ProfilePreview profile={mockdata}/>
        </div>
    </>
  )
}

export default App
