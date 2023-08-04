

function Login() {
    return (
        <div className="flex justify-center">
            <div className='flex justify-center flex-col  w-3/5'>
            <h1 className="text-4xl text-white">Sign in</h1>
            <form className="flex flex-col">
                <label htmlFor="username">Name</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="age">Age</label>
                <input type="text" id="age" name="age" />
                <label htmlFor="gender">Gender</label>
                <input type='text' id='gender' name='gender' />
            </form>
        </div>
        </div>
    )
}

export default Login