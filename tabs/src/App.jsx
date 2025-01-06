import { useEffect, useState } from 'react'
import data from './data'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState([data])
  const [currentItem, setCurrentItem] = useState(0)
  console.log(jobs[0])

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs[0]}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
