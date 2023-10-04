function totalExpense(){
    const [data, setData] = useState([{}])

    var email;

    var searchURL = "https://csc.csc648team06.com//api/transaction/expenseList?";
    // var searchURL = "/api/transaction/expenseList?";
    var emailAdded = false;


    var dateAdded = false;

    useEffect(() => {
        fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
        // fetch("/api/user/Get_Session_Data")
            .then(
                response => response.json()
            ).then(
                data => {
                    email = data.email.email;
                    if (!emailAdded) {
                        searchURL = searchURL + "email=" + email + '&';
                        emailAdded = true;
                    }

                    var tempDate = new Date("1 " + monthName.monthName);

                    var month = tempDate.getUTCMonth();
                    var year = tempDate.getUTCFullYear();

                    if (!dateAdded) {
                        searchURL = searchURL + "month=" + month + "&" + "year=" + year + "&";
                        dateAdded = true;
                    }


                    return Promise.resolve(searchURL);
                }
            ).then(
                searchURL => fetch(searchURL).then(
                    response => response.json()
                )
                    .then(
                        data => {
                            setBackendData(data)
                            console.log("this is the data: " + JSON.stringify(data));
                        }
                    )
            ).catch(setBackendData([{}]))
    }, [monthName])

    const listItems = Object.keys(backendData).map(expense => {
        backendData[expense].amount
        return (

            <div className="one">
                <img src={down_arrow} alt="" />
                <h3>{backendData[expense].category}</h3>
                <h3 className='amount'>-{backendData[expense].amount}</h3>
            </div>
        );
    })
    return (

        <div></div>
    )

}