declare module Profile {
  export interface RootObject {
    username: string;
    followers: number;
    following: number;
    description?: string;
    first_name?: string;
    last_name?: string;
    job_title?: string;
    profile_photo_url?: string;
  }
}

export default Profile;
