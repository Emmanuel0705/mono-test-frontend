/* This example requires Tailwind CSS v2.0+ */

const Tracker = () => {
    const expensesHeight = [
        5, 4, 5, 5, 3, 5, 3, 3, 5, 3, 5, 5, 2, 5, 3, 5, 3, 2, 5, 9, 5,
    ];

    return (
        <div className="py-8">
            <div className="flex justify-center items-center py-10">
                <p className="text-lg font-bold">Expense Tracker</p>
            </div>
            <div
                id="main-chart"
                className="h-36 sm:p-2 md:p-0 overflow-hidden flex items-end space-x-1 lg:space-x-1 xl:space-x-2 2xl:space-x-2.5  "
            >
                {expensesHeight.map((height) => (
                    <div className=" relative">
                        <div
                            className={`w-4 sm:w-6 md:w-6 lg:w-5 2xl:w-8  h-${
                                height * 4
                            } ${
                                height < 9
                                    ? "bg-[#9DC8ff] opacity-20"
                                    : " bg-[#157AFF]"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tracker;
