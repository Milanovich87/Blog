import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Button } from '../Button/Button'
import { FormResertPassword } from '../Form/FormResertPassword/FormResertPassword';
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageResertPassword = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper title={'Reset Password'}
                button={
                    <Button className='button__home' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Reset Password</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormResertPassword />
            </AuthPageWrapper>
        </>
    )
}