import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSuccess } from '../Form/FormSuccess/FormSuccess';
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageSuccess = ({ onClickBackToHome }: any) => {
    return (
        <>
            <AuthPageWrapper title={'Success'}
                button={
                    <Button className='button__home' onClick={onClickBackToHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Success</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormSuccess />
            </AuthPageWrapper>
        </>
    )
}