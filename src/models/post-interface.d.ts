interface Post {
  id: number;
  author: Profile;
  created_at: string; //time entry
  description: string;
  is_liked: boolean;
  likes_count: number;
  photos: Photo[];
}

interface Photo {
  id: number;
  url: string;
}
