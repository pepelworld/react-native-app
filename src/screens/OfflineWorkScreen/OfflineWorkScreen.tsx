import { Props } from '../OfflineWorkScreen/OfflineWorkScreen.types';
import { useEffect, useLayoutEffect, useState } from 'react';
import ProfileService from '../../service/ProfileService/ProfileService';
import { TouchableOpacity } from 'react-native';
import { BackIcon, PlusIcon } from '../../constants/icons';
import { COLORS } from '../../constants/theme';
import { headerRightContainerStyle } from '../../navigation/styles/headerStyles';
import { Container } from '../../components/Styled';
import Search from '../../components/Styled/Search/Search';
import * as React from 'react';
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion/CustomAccordion';

const OfflineWorkScreen = ({ navigation }: Props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [offlineReportList, setOfflineReportList] = useState([]);
    const [pageReport, setPageReport] = useState(1);
    const [stopFetchMore, setStopFetchMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    let yearAgo = new Date();
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);

    const params = {
        date_from: yearAgo.toLocaleString(),
        date_to: new Date().toLocaleString(),
        work_type: '1',
        project: 1,
        page: 1,
        limit: 20 * pageReport,
    };

    const handleOnStopFetchMore = () => {
        setStopFetchMore(false);
    };

    const handleOnEndReached = () => {
        setLoadingMore(true);
        if (!stopFetchMore) {
            setPageReport(pageReport + 1);
            ProfileService.getOfflineWorkList({ params }).then(res => {
                // setOfflineReportList(res.data.data);
                setLoadingMore(false);
            });
            setStopFetchMore(true);
        }
        setLoadingMore(false);
    };

    useEffect(() => {
        try {
            ProfileService.getOfflineWorkList({ params }).then(res =>
                // setOfflineReportList(res),
                console.log(res),
            );
        } catch (error) {
            throw error;
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                    <BackIcon fill={COLORS.lightAccent} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Добавить работу')}
                    style={{
                        width: 48,
                        height: 48,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                    <PlusIcon fill={COLORS.lightAccent} />
                </TouchableOpacity>
            ),
            headerRightContainerStyle: {
                ...headerRightContainerStyle,
                justifyContent: 'flex-end',
            },
        });
    }, [navigation]);

    return (
        <Container fl>
            <Container ph mt={10.5}>
                <Search
                    placeholderText={'Поиск'}
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                />
            </Container>
            <Container fl>
                <CustomAccordion
                    reportList={offlineReportList}
                    searchPhrase={searchPhrase}
                    onEndReached={handleOnEndReached}
                    stopFetchMore={handleOnStopFetchMore}
                    loadingMore={loadingMore}
                />
            </Container>
        </Container>
    );
};

export default OfflineWorkScreen;
