import { generateStaticParams as generateShiftStaticParams } from "./generateStaticParams"
import ShiftDetailPageClient from "./ShiftDetailPageClient"

// This is a Server Component.
// It generates static params and then renders the Client Component.
export function generateStaticParams() {
  return generateShiftStaticParams()
}

export default function ShiftDetailPage({ params }: { params: { id: string } }) {
  return <ShiftDetailPageClient params={params} />
}
