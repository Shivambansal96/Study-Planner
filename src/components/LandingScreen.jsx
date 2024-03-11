import { useState } from "react";

function LandingScreen() {

    const [fullData, setFullData] = useState([])
    const [subjectName, setSubjectName] = useState("")
    const [hoursPeriod, setHoursPeriod] = useState(0)

    function AddTheSubject() {

        if(hoursPeriod == 0) alert('Add some Hours to Study!')
        if(hoursPeriod < 0) alert('Study time cannot be (-)Negative !')



        if(hoursPeriod > 0 ) {

        document.getElementById('results').style.display ='block';
            
        const collectedData= {
            name: subjectName,
            hours: hoursPeriod
        }
            const finalData = [...fullData, collectedData]
            setFullData([...finalData]);
        }

        setSubjectName("");
        setHoursPeriod(0);

        // console.log(finalData);

        
    }

    function updateButton(e, index) {

        let tempData = [...fullData];

        // console.log(tempData)

        let value = Number(tempData[index].hours);

        console.log(value);

        if(e.target.value == '+') {
            tempData[index].hours = value + 1;
        }

        if(e.target.value == '-') {
            if(value > 0) 
            tempData[index].hours = value - 1;
        }

        setFullData([...tempData]);
    }

    return(
        <div id="landing-screen" className="h-screen w-screen border-2 flex flex-col justify-center items-center" >

            <div className="border-2 h-1/5 w-1/3 flex flex-col justify-around">
                
                <div className="text-center">
                    <h1 className=" text-3xl">Geekster Education Planner</h1>
                </div>
                
                <div className="flex justify-center gap-2">
                    <div>
                        <input type="text" name="" onChange={(e) => {setSubjectName(e.target.value)}} value={subjectName} placeholder="Subject" id="subject-name" className="h-full w-full px-2 border-2" />
                    </div>

                    <div className="border-2 w-1/4">
                        <input type="number" name="" onChange={(e) => {setHoursPeriod(e.target.value)}} value={hoursPeriod} placeholder="Hours" id="hours-period" className="w-full px-2"/>
                    </div>

                    <div className="w-20 text-center">
                        <input type="button" onClick={AddTheSubject} value="Add" className=" hover:cursor-pointer hover:bg-cyan-500 w-full rounded-md bg-blue-500" />
                    </div>
                </div>

            </div>

            <div id="results" className=" flex flex-col w-1/3 border-2 py-5" style={{display:'none'}}>

                <div className="flex justify-around text-fuchsia-700 text-lg underline pb-5">
                    <p>Subject</p>
                    <p>Hours</p>
                    <p>Increase</p>
                    <p>Decrease</p>
                </div>

                {fullData.map((items, index) => {
                    return (

                        <div id="table" className="flex w-full justify-around" key={index} onClick={(e) => {updateButton(e, index)}}>
                            <div>
                                <p>{items.name}</p>
                            </div>

                            <div>
                                <p>{items.hours}</p>
                            </div>

                            <div className="h-10 w-10 border-2 flex justify-center items-center hover:cursor-pointer bg-green-700 rounded-md" > 
                                <input type="button" value="+" />
                            </div>

                            <div className="h-10 w-10 border-2 flex justify-center items-center bg-red-600 rounded-md">
                                <input type="button" value="-" />
                            </div>
                        </div>
                    );
                })}
               
            </div>
        


        </div>
    );
}

export default LandingScreen;