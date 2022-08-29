/* This example requires Tailwind CSS v2.0+ */

const Balance = (props: any) => {
    const { accounts, setUnlink, handleConnect } = props;
    const summaries = [
        { name: "Food and Drinks", amount: "872.400" },
        { name: "Shopping", amount: "1378.200" },
        { name: "Housing", amount: "928.500" },
        { name: "Transportation", amount: "420.700" },
    ];

    const percentage = (value: number) => {
        let total = 0;
        summaries.forEach((summary) => {
            total = Math.round(total + Number(summary.amount));
        });
        return (value * 100) / total;
    };

    const totalBalance = () => {
        let bal = 0;
        accounts.forEach((el: any) => {
            bal = el.balance + bal;
        });
        return bal;
    };
    return (
        <div className="bg-white flex flex-col col-span-4 xl:px-10 pt-16 items-center  ">
            <div className="px-8 w-[94%] flex flex-col items-center justify-center rounded-lg">
                <p className="text-xl font-semibold">TOTAL BALANCE</p>
                <p className="text-5xl font-bold py-4 ">{totalBalance()}</p>
                <p className="text-[#404852] text-sm font-light">
                    Your balance across all Banks
                </p>
                <div className="flex py-8 ">
                    {accounts.map((acc: any) => (
                        <img
                            className="h-8 w-8 -ml-2 rounded-full"
                            src={acc.bankLogo}
                            alt={acc.name}
                        />
                    ))}

                    <img
                        onClick={() => handleConnect()}
                        className="h-8 w-8 ml-2 rounded-full cursor-pointer"
                        src="../addbank.svg"
                        alt="add"
                    />
                </div>
                <button
                    onClick={() => setUnlink(true)}
                    type="submit"
                    className="w-full bg-[#FFF4F4] my-4 py-4 uppercase text-md rounded-lg text-[#F22828] font-semibold"
                >
                    UNLINK BANK ACCOUNT{" "}
                </button>
            </div>
            <div className="w-full px-8 pt-8">
                {" "}
                <div className="flex items-center justify-between mb-6  p-4 border-b border-gray-200">
                    <p className="text-lg font-light leading-none text-gray-900">
                        Where your money go?{" "}
                    </p>
                    <div className="p-2 ">
                        <p className="text-lg ml-4 cursor-pointer text-gray-300 font-extrabold leading-6 ">
                            . . .
                        </p>
                    </div>
                </div>
                <div className="">
                    {summaries.map((summary) => (
                        <div className="flex space-y-4 flex-col mb-6">
                            {" "}
                            <div className="flex justify-between">
                                <p className="font-medium text-md">
                                    {summary.name}
                                </p>
                                <p className="font-normal">{summary.amount}</p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 ">
                                <div
                                    className="bg-[#FFB1B1] h-1.5 rounded-full "
                                    style={{
                                        width: `${Math.round(
                                            percentage(Number(summary.amount))
                                        )}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Balance;
