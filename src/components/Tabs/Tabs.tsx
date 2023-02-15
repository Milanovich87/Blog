import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import './Tabs.scss'
import { TABS } from '../Posts/constants'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';
import { IStore } from '../../redux/types'
import { setActiveTab } from '../../redux/actionCreators/settingsActionCreators'
// interface TabsType {
//     className?: string
// }

export const Tabs = () => {
    const { theme } = useContext(ThemeContext)
    const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    const dispatch = useDispatch();
    return (
        <div className={`tabs--${theme}`}>
            <div className='wrapper'>
                <div className='tabs__body'>
                    {
                        Object.values(TABS).map((tab) =>
                            <Button
                                className='tabs__btn'
                                onClick={() => dispatch(setActiveTab(tab))}>
                                {tab}
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
