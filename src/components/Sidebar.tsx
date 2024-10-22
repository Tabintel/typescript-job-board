import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

interface SidebarProps {
  isMobileFilterOpen: boolean;
  salaryRange: number[];
  setSalaryRange: (range: number[]) => void;
}

export function Sidebar({ isMobileFilterOpen, salaryRange, setSalaryRange }: SidebarProps) {
  return (
    <aside className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-md ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input id="search" className="pl-10" placeholder="Search jobs..." />
          </div>
        </div>
        <div>
          <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select id="job-type" className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#007ACC] focus:ring focus:ring-[#007ACC] focus:ring-opacity-50">
            <option>All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <Input id="location" placeholder="Enter location" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
          <Slider
            defaultValue={[80000, 200000]}
            max={200000}
            min={0}
            step={10000}
            value={salaryRange}
            onValueChange={setSalaryRange}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${salaryRange[0].toLocaleString()}</span>
            <span>${salaryRange[1].toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Switch id="remote" />
          <label htmlFor="remote" className="ml-2 text-sm font-medium text-gray-700">Remote Only</label>
        </div>
      </div>
    </aside>
  )
}