
function UserMap() {

    const userData = [
        {
            name: "Nazir Ahmad",
            lastName: "Khan",
            email: "nazir@gmail.com",
            contactNo: "03007654321",
            id: "1"
        },

        {
            name: "Idress Ahmad",
            lastName: "Khan",
            email: "idress@gmail.com",
            contactNo: "03005432167",
            id: "2"
        },

        {
            name: "Usman",
            lastName: "Khan",
            email: "usman@gmail.com",
            contactNo: "03001234567",
            id: "3"
        },

        {
            name: "Shakil",
            lastName: "Ahmad",
            email: "shakil@gmail.com",
            contactNo: "03009876543",
            id: "4"
        },

        {
            name: "Mohsin",
            lastName: "Khan",
            email: "mohsin@gmail.com",
            contactNo: "03007654321",
            id: "5"
        },
    ]
    return (
        <>
            <h1>Loop in JSX with Map Function</h1>

            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Contact No</td>
                    </tr>
                </thead>
                <tbody>
                   {
                    userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.contactNo}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </>
    )
}
export default UserMap;