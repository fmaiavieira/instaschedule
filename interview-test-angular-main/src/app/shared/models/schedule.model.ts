export class Schedule{
    id: number;
    created_at: Date;
    status: string;
    now: boolean;
    date: Date;
    caption: string;
    ig_code: null;
    is_history: boolean;
    is_album: boolean;
    is_igtv: boolean;
    is_reels: boolean;
    ig_image_url: string;
    type: string;
    media_type: string;
    image: {
        id: number;
        filename: string;
        is_album: boolean;
        url:string;
        type: string;
    };
    channel: {
        id: number;
        username: string;
        profile_pic: string;
    };
    socials: any[];
}