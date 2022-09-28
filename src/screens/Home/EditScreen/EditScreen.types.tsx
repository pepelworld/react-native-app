export interface Props {
    route: string;
    navigation: {
        setOptions: ({}) => void;
        goBack: () => void;
    };
}
