export interface BasicInfoProps {
    name?: string;
    email?: string;
    navigation: {
        navigate: (route: string) => void;
    };
}
