// import { useState } from 'react'

// import { Button } from '../../Button/Button'
// import { Input } from '../../Input/Input'
import './FormAddPost.scss'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
// import { useContext } from 'react'
// import { ThemeContext } from '../../Posts/contexts';
import { FileLoader } from '../../UpLoadImage/UpLoadImage'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../../redux/types'
import { addPost, setNewPostImage, setNewPostLesson, setNewPostText, setNewPostTitle } from '../../../redux/actionCreators/postsActionCreators';
import { ImageListType } from 'react-images-uploading';

export const FormAddPost = () => {
    // const [error, setError] = useState(false)
    // const onSubmit = (event: { preventDefault: () => any; target: any }) => {
    //     event.preventDefault()
    //     if (event.target < 0) {
    //         setError(true)
    //     } else {
    //         setError(false)
    //     }
    // }

    // const { theme } = useContext(ThemeContext)

    // const [inputTitle, setInputTitle] = useState('')
    // const [inputURL, setInputURL] = useState('')
    // const [inputPublish, setInputPublish] = useState('')
    // const [inputImage, setInputImage] = useState(null)
    // const [inputDescription, setInputDescription] = useState('')
    // const [inputText, setInputText] = useState('')
    // const handleDelete = () => {
    //     setInputTitle('')
    //     setInputURL('')
    //     setInputPublish('')
    //     setInputImage(null)
    //     setInputDescription('')
    //     setInputText('')
    // }


    const dispatch = useDispatch();

    const title = useSelector((state: IStore) => state.posts.newPostTitle)
    const text = useSelector((state: IStore) => state.posts.newPostText)
    const lesson = useSelector((state: IStore) => state.posts.newPostLesson)
    const image = useSelector((state: IStore) => state.posts.newPostImage);
    const handleChangeTitle = (e: any) => {
        dispatch(setNewPostTitle(e.target.value))
    }
    const handleChangeText = (e: any) => {
        dispatch(setNewPostText(e.target.value))
    }
    const handleChangeLesson = (e: any) => {
        dispatch(setNewPostLesson(e.target.value))
    }
    const handleImageChange = (imageList: ImageListType) => {
        dispatch(setNewPostImage(imageList[0]))
    }

    const handleAddPost = () => {
        dispatch(addPost({
            title,
            text,
            lesson_num: +(lesson || 0),
            image: image.file,
        }))
    }

    return (
        // <form className={`form-add-post--${theme}`} onSubmit={onSubmit}>
        //     <div className='form__main'>
        //         <Input
        //             className='form__input'
        //             label='Title'
        //             placeholder='Your title'
        //             type='text'
        //             value={inputTitle}
        //             onChange={(e) => setInputTitle(e.target.value)}
        //             error={error}
        //             errorText='Ошибка'
        //         />
        //         <Input
        //             className='form__input'
        //             label='URL'
        //             placeholder='URL'
        //             type='text'
        //             value={inputURL}
        //             onChange={(e) => setInputURL(e.target.value)}
        //             error={error}
        //             errorText='Ошибка'
        //         />
        //         <Input
        //             className='form__input'
        //             label='Publish at'
        //             type='text'
        //             placeholder='Date'
        //             value={inputPublish}
        //             onChange={(e) => setInputPublish(e.target.value)}
        //             error={error}
        //             errorText='Ошибка'
        //         />
        //         <FileLoader />
        //     </div>

        //     {/* <Input
        //         className='input__image'
        //         label='Image'
        //         type='file'
        //         placeholder='Image'
        //         // value={inputImage}
        //         onChange={(e) => setInputImage(null)}
        //         error={error}
        //         errorText='Ошибка'
        //     /> */}
        //     <Input
        //         className='form__input'
        //         label='Description'
        //         type='text'
        //         placeholder='Add your text'
        //         value={inputDescription}
        //         onChange={(e) => setInputDescription(e.target.value)}
        //         error={error}
        //         errorText='Ошибка'
        //     />
        //     <label className="add-form__text">
        //         <span>Text</span>
        //         <textarea
        //             placeholder="Add your text"
        //             value={inputText}
        //             onChange={(e) => setInputText(e.target.value)}
        //         ></textarea>
        //     </label>
        //     <div className="add-form__buttons">
        //         <div className="add-form__buttons-left">
        //             <Button className="btn-secondary2" children="Delete" onClick={handleDelete} />
        //         </div>
        //         <div className="add-form__buttons-right">
        //             <Button className="btn-secondary" children="Cancel" />
        //             <Button className="btn-primary" children="Add post" />
        //         </div>
        //     </div>
        // </form>

        <div>
            <Container>
                <h2>Add post</h2>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder='Enter title' value={title} onChange={handleChangeTitle} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='text'>
                            <Form.Label>Text</Form.Label>
                            <Form.Control as='textarea' placeholder='Enter Text' value={text} onChange={handleChangeText} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='lesson_num'>
                            <Form.Label>Lesson</Form.Label>
                            <Form.Control type='number' placeholder='Enter lesson number' value={lesson} onChange={handleChangeLesson} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <FileLoader image={image}
                            onChange={handleImageChange}
                            onRemove={() => dispatch(setNewPostImage(undefined))} />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={handleAddPost}>Add post</Button>
                </Row>
            </Container>
        </div>
    )
}