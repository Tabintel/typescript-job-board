"use client"

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sidebar } from './Sidebar'
import { JobList } from './JobList'
import { Job } from '@/types/job'

// Mock data for job listings
const jobListings: Job[] = [
  {
    id: 1,
    title: 'Senior TypeScript Developer',
    company: 'TechCorp',
    logo: '/placeholder.svg?height=40&width=40',
    location: 'San Francisco, CA',
    salary: '$120,000 - $160,000',
    description: 'We are seeking an experienced TypeScript developer to join our team and work on cutting-edge projects.',
    type: 'Full-time'
  },
  {
    id: 2,
    title: 'TypeScript Frontend Engineer',
    company: 'WebSolutions',
    logo: '/placeholder.svg?height=40&width=40',
    location: 'New York, NY',
    salary: '$100,000 - $140,000',
    description: 'Join our frontend team to build responsive and performant web applications using TypeScript and React.',
    type: 'Full-time'
  },
  {
    id: 3,
    title: 'TypeScript Backend Developer',
    company: 'ServerLogic',
    logo: '/placeholder.svg?height=40&width=40',
    location: 'Remote',
    salary: '$110,000 - $150,000',
    description: 'Help us develop scalable backend services using TypeScript, Node.js, and Express.',
    type: 'Contract'
  },
]

export function JobBoard() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [salaryRange, setSalaryRange] = useState([80000, 200000])

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-sans">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#007ACC]">TypeScript Job Board</h1>
          <Button variant="ghost" className="lg:hidden" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <Sidebar
          isMobileFilterOpen={isMobileFilterOpen}
          salaryRange={salaryRange}
          setSalaryRange={setSalaryRange}
        />
        <JobList jobs={jobListings} />
      </main>
    </div>
  )
}