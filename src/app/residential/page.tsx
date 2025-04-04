import ResidentialSection from '@/components/ResidentialContent'
import ResidentialHero from "@/components/ResidentialHero"

export default function Residential() {
  return (
    <div className="min-h-screen">
      <ResidentialHero />
      <ResidentialSection />
    </div>
  )
}

