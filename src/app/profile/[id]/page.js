import React from 'react'

const Updateprofile = ({params}) => {
    console.log(params)
  return (
    <>
    <div >
        <form className="">
          <div className="container cona">
            <h1 className="form-title">Update profile</h1>

            <div className="main-user-info">
              <div className="user-input-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="title"
                //   {...register("title")}
                  name="title"
                  placeholder="Enter title"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  id="name"
                //   {...register("question")}
                  name="question"
                  placeholder="Enter question"
                />
              </div>

              <div className="user-input-box">
                <label htmlFor="username">Password</label>
                <input
                  type="text"
                  id="answer"
                //   {...register("answer")}
                  name="answer"
                  placeholder="Enter answer"
                />
              </div>
            </div>

            <div>
              <button type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Updateprofile