export function Sign_out() {
    fetch("https://csc.csc648team06.com/api/user/Sign-out")
    // fetch('/api/user/Sign-out')
            .then(
                response => response.json()
            ).then(
                data => {
                    console.log(data)
                }
            )
            .catch(console.log)
            
}