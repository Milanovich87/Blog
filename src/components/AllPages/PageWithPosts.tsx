import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { AuthPageWrapper } from '../AuthPageWrapper/AuthPageWrapper'
import { Tabs } from '../Tabs/Tabs';
import { Blog } from '../Blog/Blog';
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { TABS } from '../Posts/constants';
import { Favorites } from '../Favorites/Favorites'


const getResultComponent = (activeTab: string) => {
    switch (activeTab) {
        case TABS.favorites: {
            return Favorites;
        }
        default: return Blog
    }
}

export const PageAllPosts = () => {
    const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    const ResultComponent = getResultComponent(activeTab)

    return (
        <>
            <AuthPageWrapper title={'Blog'}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>}>
                <Tabs />
                <ResultComponent />
            </AuthPageWrapper>
        </>
    )
}