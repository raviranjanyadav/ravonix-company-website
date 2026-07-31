const clients = [
  "Google",
  "Microsoft",
  "Amazon",
  "Oracle",
  "IBM",
  "Adobe",
  "SAP",
  "Stripe",
];

function TrustedClients() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Trusted By
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Businesses Around the World
          </h2>

          <p className="mt-4 text-slate-600">
            Helping startups and enterprises build scalable digital products.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">

          {clients.map((client) => (
            <div
              key={client}
              className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              py-5
              text-center
              font-semibold
              text-slate-600
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
              "
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedClients;