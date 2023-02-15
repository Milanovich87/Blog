
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSignUp } from '../Form/FormSignUp/FormSignUp';
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageSignUp = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper title={'Sign Up'}
                button={
                    <Button className='btn' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Sign Up</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormSignUp />
            </AuthPageWrapper>
        </>
    )
}