
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSignIn } from '../Form/FormSignIn/FormSignIn';
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageSignIn = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper title={'Sign In'}
                button={
                    <Button className='button__home' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Sign In</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormSignIn />
            </AuthPageWrapper>
        </>
    )
}