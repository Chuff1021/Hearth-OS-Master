import Link from "next/link";

const cards = ["Active Bids", "Saved Contractor Pricing", "Plan Uploads", "Orders in Progress", "Approved Accounts", "Messages"];

export default function ContractorDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7efe3] px-4 py-16 text-[#111111] md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b91806]">Portal Dashboard</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.05em]">Contractor command center.</h1>
        <p className="mt-4 max-w-3xl text-[#5f5140]">Dashboard shell for approved builders. Next phase adds login, account approval, pricing tiers, saved quotes, and order history.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card} className="border border-[#c8d8e8] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">{card}</h2>
              <p className="mt-3 text-sm text-[#5f5140]">Coming in the functional portal buildout.</p>
            </div>
          ))}
        </div>
        <Link href="/contractor-portal" className="mt-8 inline-flex rounded-full bg-[#e8b900] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black">Portal Home</Link>
      </div>
    </main>
  );
}
