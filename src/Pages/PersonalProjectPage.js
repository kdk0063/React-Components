import Link from "../Components/Link";

function PersonalProjectPage() {
    return (
        <>
            <div className="p-5">
                <div className="flex flex-col">
                    <h1 className="flex justify-center">Personal Project</h1>

                    <div className="flex justify-center mt-5">
                        <ul>
                            <li>
                                <Link className="no-underline cursor-pointer" to={"/scatterCssPage"}>
                                    custom intro css effect
                                </Link>
                            </li>

                            <li>
                                <Link className="no-underline cursor-pointer" to={'/calculator'}>
                                    Calculator
                                </Link>
                            </li>


                            {/* <li>Reusable custom component with tailwind css</li>

                        <div>If you are a dev, you need a calculator app...</div>
                        <li>calculator</li>

                        <div>And.... weather app using api as well...</div>
                        <li>weather app</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PersonalProjectPage;