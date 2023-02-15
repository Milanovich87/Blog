
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSignIn } from '../Form/FormSignIn/FormSignIn';
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SelectPost } from '../SelectedPost/SelectedPost';

export const PageSignIn = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper
                button={
                    <Button className='button__home' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Post 12345</Breadcrumb.Item>
                </Breadcrumb>}>
                <SelectPost />
            </AuthPageWrapper>
        </>
    )
}