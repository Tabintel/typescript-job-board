import { Job } from '@/types/job'
import { MapPin, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <span className="inline-block bg-[#007ACC] text-white text-sm px-3 py-1 rounded-full">{job.type}</span>
      </div>
      <div className="mt-4 flex items-center text-gray-600 space-x-4">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 mr-1" />
          <span>{job.salary}</span>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{job.description}</p>
      <div className="mt-6 flex justify-end">
        <Button className="bg-[#007ACC] text-white hover:bg-[#005A9E] transition-colors duration-300">
          Apply Now
        </Button>
      </div>
    </div>
  )
}