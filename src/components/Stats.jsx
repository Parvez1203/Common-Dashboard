function Stats() {
  return (
    <div className="container mx-auto px-0 py-20 ">
      <p className="text-2xl mb-16 max-w-2xl font-semibold">
        <span className="text-[#ACA296] ">We are a team of entrepreneurs</span>{" "}
        trained in operations, design,architecture, contruction, accounting, and
        finance-with the common interest
      </p>

      <div className="grid grid-cols-2 gap-8 items-center mb-16 text-left">
        <div className="grid grid-cols-3 gap-8 ">
          <div>
            <p className="text-lg text-[#ACA296] mb-2">Lorem ipsum</p>
            <p className="text-6xl font-semibold">85%</p>
          </div>
          <div>
            <p className="text-lg text-[#ACA296] mb-2">Lorem ipsum</p>
            <p className="text-6xl font-semibold">760+</p>
          </div>
          <div>
            <p className="text-lg text-[#ACA296] mb-2">Lorem ipsum</p>
            <p className="text-6xl font-semibold">15k</p>
          </div>
        </div>
        <div className="container mx-auto px-6 py-8 text-right">
          <div className="flex justify-end">
            <p className="text-[#ACA296] text-lg max-w-lg text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
