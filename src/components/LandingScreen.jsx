
function LandingScreen() {


    function AddTheSubject() {

    }


    return(
        <div id="landing-screen" className="h-screen w-screen border-2 flex flex-col justify-center items-center" >

            <div className="border-2 h-1/5 w-1/3 flex flex-col justify-around">
                
                <div className="text-center">
                    <h1 className=" text-3xl">Geekster Education Planner</h1>
                </div>
                
                <div className="flex justify-center gap-2">
                    <div>
                        <input type="text" name="" placeholder="Subject" id="" className="h-full w-full px-2" />
                    </div>

                    <div className="border-2 w-1/4">
                        <input type="number" name="" placeholder="Hours" id="" className="w-full px-2"/>
                    </div>

                    <div className="w-20 text-center">
                        <input type="button" onClick={AddTheSubject} value="Add" className=" hover:cursor-pointer hover:bg-cyan-500 w-full rounded-md bg-blue-500" />
                    </div>
                </div>

            </div>

            <div id="results" className="border-2 flex w-1/3 justify-around">
                
                {TempPara.map((item) => {
                        return(
                            <p>{item}</p>
                        );
                    })}
                <div>
                    <p>Subject</p>
                    <p></p> {/* subject value from input field */}
                </div>
                    
                <div>
                    <p>Hours</p>
                    <p></p> {/* hrs value from input field */}
                </div>

                <div>
                    <p>(+)</p>
                    
                </div>

                <div>
                    <p>(-)</p>
                </div>
            </div>
        


        </div>
    );
}

export default LandingScreen;