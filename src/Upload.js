import { useState, useEffect } from 'react'
import axios from 'axios'

const Upload = () => {
    const [file, setFile] = useState(null)
    const [img, setImg] = useState(null)

    const onChange = (e) => {
        setFile(e.target.files[0])
    }

    const addImg = (e) => {
        setImg(e.target.files[0])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', img)
        formData.append('audio', file)
        formData.append('release_title', 'alright')
        formData.append('artist_name', 'mike')
        formData.append('language', 'en')
        formData.append('type', 'single')
        formData.append('explicit', true)

        submit(formData)
    }

    const submit = async (value) => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNWIxYjFjOGI1MjljOTE0MjNlZDVlIn0sImlhdCI6MTY2NDQ4MTk2NywiZXhwIjoxNjY1MDg2NzY3fQ.DmPG1OiOrxcpQ0zEe4py6IR7USBDmddgIOl34X1nDQY'
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/api/store/upload', value, config)
            const data = res.data
            console.log(data)
        } catch (err) {
            console.log(err.response.data)
        }
    }

    const callme = (value) => {
        let obj = {
            name: 'sam',
            male: 'human',
            female: 'female'
        }
        obj[value] = 'Arnold'
        console.log(obj[value])
    }

    useEffect(() => {
        callme('male')
    }, [])

    return (
        <div>
            <h1>Upload</h1>
            <br />
            <input type="file" name="upload" id="" onChange={onChange} />
            <br />
            <br />
            <input type="file" name="upload" id="" onChange={addImg} /> <span>Img</span>
            <br />
            <br />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Upload