function Profile() {
  return (
    <div className="min-h-[600px] bg-[#eaeded] p-8">

      <h1 className="mb-6 text-3xl font-bold">
        Your Profile
      </h1>

      <div className="max-w-lg bg-white p-8">

        <h2 className="mb-5 text-xl font-bold">
          Account Information
        </h2>

        <p className="mb-3">
          Name: Guest User
        </p>

        <p className="mb-3">
          Email: guest@example.com
        </p>

        <button className="rounded bg-yellow-400 px-6 py-2 font-semibold">
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;