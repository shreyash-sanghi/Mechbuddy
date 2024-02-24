import noteContext from './noteContext';
import React, {  useState } from 'react';


const NoteState = (props) => {

    //modification starts
    const [loading1, setLoading1] = useState(false);
    const [url1, setUrl1] = useState("");
    const [image1, setImage1] = useState("");
    const [loading2, setLoading2] = useState(false);
    const [url2, setUrl2] = useState("");
    const [image2, setImage2] = useState("");
    const [loading3, setLoading3] = useState(false);
    const [url3, setUrl3] = useState("");
    const [image3, setImage3] = useState("");
    const [loading4, setLoading4] = useState(false);
    const [url4, setUrl4] = useState("");
    const [image4, setImage4] = useState("");

    const [loading5, setLoading5] = useState(false);
    const [url5, setUrl5] = useState("");
    const [image5, setImage5] = useState("");
    const [loading6, setLoading6] = useState(false);
    const [url6, setUrl6] = useState("");
    const [image6, setImage6] = useState("");
    const [loading7, setLoading7] = useState(false);
    const [url7, setUrl7] = useState("");
    const [image7, setImage7] = useState("");
    const [loading8, setLoading8] = useState(false);
    const [url8, setUrl8] = useState("");
    const [image8, setImage8] = useState("");

    const [vehicle_model, setVehicleModel] = useState('');
    const [style_description, setStyleDescription] = useState('');

    //modification end

    //payment start
    const [mode, setMode] = useState();
    const [option, setOptions] = useState();
    //payment end

    //cart start
    const [cartloading, setCartloading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        pincode: '',
        state: '',
        city: '',
        full_address: '',
        landmark: ''
    });
    const [amount,setAmount]=useState(0);
    //cart ends



    const [login,setLogin] = useState(null);
    const [name, setName] = useState('');
    const [cartCount, setCartCount] = useState(0);
    const [cartflag, setCartFlag] = useState(0);
    const initialcart = [];
    const [item, setItem] = useState(initialcart);
    //user authentication
    const fetchData = async () => {
        try {

            if (!localStorage.getItem('token')) {
                return;
            }

            const response = await fetch(`http://localhost:8000/api/auth/userinfo`, {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')

                }
            });
            const json = await response.json();
            if (json.success) {
                setLogin(true);
                setName(json.user.name)
            }
            /* console.log(json.user.name); */
        } catch (error) {
            console.error('Error:', error);
        }
    }
   
        
    const logoutUser = () => {   
      const token = localStorage.getItem('token');
      console.log('Token before removal:', token);
      setLogin(false);
      setName(' ')
      localStorage.removeItem('token');
    };  
     

    //getcart
    const handlegetcart = async (e) => {
       
        setCartloading(true);
        if (!localStorage.getItem('token')) {
            return;
        }
        try {
            const response = await fetch(`http://localhost:8000/api/cart/getcart`, {
                method: "GET",


                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                }



            });
            const json = await response.json();
            if (json.success) {
                setCartloading(false);
                setItem(json.cartItems)
                

            }
            else {
                setCartloading(false);
                alert("fail");

            }
        } catch (error) {
            console.log(error);
        }
    }

    //modifcation
    return (
        <noteContext.Provider value={{ logoutUser,fetchData, handlegetcart, cartloading,setName, item, setItem, cartflag, setCartFlag, login, name, cartCount, setCartCount, loading1, setLoading1, url1, setUrl1, image1, setImage1, loading2, setLoading2, url2, setUrl2, image2, setImage2, loading3, setLoading3, url3, setUrl3, image3, setImage3, loading4, setLoading4, url4, setUrl4, image4, setImage4, loading5, setLoading5, url5, setUrl5, image5, setImage5, loading6, setLoading6, url6, setUrl6, image6, setImage6, loading7, setLoading7, url7, setUrl7, image7, setImage7, loading8, setLoading8, url8, setUrl8, image8, setImage8, vehicle_model, setVehicleModel, style_description, setStyleDescription, mode, setMode, option, setOptions, formData, setFormData,amount,setAmount }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState ;