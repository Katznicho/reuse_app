export interface commentInterface {
    imageURL: string;
    time: string;
    comment: string;
    rating: number;
  }
  
  export interface TabInterface {
    name: string;
    screen: string;
  }
  
  export interface partnerGymInterface {
    id: number;
    name: string;
    location: string;
    rating: number;
    imageURL: string;
    packageType: string;
    desc: string;
  }
  
  export interface NotificationInterface {
    type: string;
    description: string;
    time: string;
    id: number;
  }
  
  export interface PackageInterface {
    item:{
      id: number;
      name: string;
      description: string;
      image?: string;
      price: string;
      sessions: number;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      activities?: {
        id: number;
        gym_package_id: number;
        gym_activity_id: number;
        created_at: string;
        updated_at: string;
        deleted_at: string | null;
        activity: {
          id: number;
          name: string;
          description: string;
          image: string;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
      }[];
    }
    packageContainerStyles?:{},
    packageImageStyles?:{},
    packageTypeStyle?:{}
  }
  
  