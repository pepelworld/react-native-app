import * as React from 'react';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from '../../components/Styled';
import Search from '../../components/Styled/Search/Search';
import { PlusIcon } from '../../constants/icons';
import { COLORS, SIZES } from '../../constants/theme';
import { headerRightContainerStyle } from '../../navigation/styles/headerStyles';
import { Props } from './ReportsScreen.types';
import ProfileService from '../../service/ProfileService/ProfileService';
const CustomAccordion = React.lazy(
    () =>
        import(
            '../../components/CustomAccordion/CustomAccordion/CustomAccordion'
        ),
);
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';

const ReportsScreen = ({ navigation }: Props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [reportList, setReportList] = useState([]);
    const [pageReport, setPageReport] = useState(1);
    const [stopFetchMore, setStopFetchMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    let params = {
        limit: 20 * pageReport,
        page: 1,
    };

    const handleOnStopFetchMore = () => {
        setStopFetchMore(false);
    };

    useEffect(() => {
        ProfileService.getWorkReportListReq({ params }).then(res =>
            setReportList(res.data.data),
        );
    }, []);

    const handleOnEndReached = () => {
        setLoadingMore(true);
        if (!stopFetchMore) {
            setPageReport(pageReport + 1);
            ProfileService.getWorkReportListReq({ params }).then(res => {
                setReportList(res.data.data);
                setLoadingMore(false);
            });
            setStopFetchMore(true);
        }
        setLoadingMore(false);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Добавить отчет')}
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
                <Suspense fallback={<LoadSpinner />}>
                    <CustomAccordion
                        reportList={reportList}
                        searchPhrase={searchPhrase}
                        onEndReached={handleOnEndReached}
                        stopFetchMore={handleOnStopFetchMore}
                        loadingMore={loadingMore}
                    />
                </Suspense>
            </Container>
        </Container>
    );
};

export default ReportsScreen;
