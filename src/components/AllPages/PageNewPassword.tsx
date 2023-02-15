import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper'
import { FormNewPassword } from '../Form/FormNewPassword/FormNewPassword';
import { Button } from '../Button/Button';

export const PageNewPassword = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper title={'New Password'}
                button={
                    <Button className='button__home' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>New Password</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormNewPassword />
            </AuthPageWrapper>
        </>
    )
}
