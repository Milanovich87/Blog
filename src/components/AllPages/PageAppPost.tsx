import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper'
import { FormAddPost } from '../Form/FormAddPost/FormAddPost';
import { Button } from '../Button/Button';

export const PageAddPost = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper title={'Add post'}
                button={
                    <Button className='button__home' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Add post</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormAddPost />
            </AuthPageWrapper>
        </>
    )
}


