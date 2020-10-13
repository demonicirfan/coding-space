import React, {useState} from 'react';
import {useAuth} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

const SignedInLinks = ({profile}) => {
    const {githubSignOut} = useAuth();
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    
    const logout = async () => {
        try {
            setLoading(true)
            await githubSignOut();
            history.push("/roadmaps");
        } catch {
            console.log('signed out');
        }
        setLoading(false)
    }
    return (
        <div className="mr-3 mt-4 absolute top-0 right-0">
            <button onClick={() => setIsOpen(!isOpen)} className="block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none">
                <img className=" h-full w-full object-cover cursor-pointer" src={profile} alt="Avatar"/>
            </button>
            {isOpen &&
            <div class="absolute right-0 mt-1 shadow-xl bg-white rounded-lg py-2">
                <button disabled={loading} onClick={logout} className="block px-4 py-1 text-black">Logout
                </button>
            </div>
            }
        </div>
    )
}

export default SignedInLinks
