export interface INavigation {
  name: string;
  icon: string;
  type: "navigation" | "dropdown";
  path?: string;
  subItems?: INavigation[];
}

export const generateNavigationItems = (userId?: string): INavigation[] => {
  const baseItems: INavigation[] = [
    {
      name: "Home",
      icon: "material-symbols:home-outline",
      type: "navigation",
      path: "/",
    },
    {
      name: "Trending",
      icon: "mdi:fire",
      type: "navigation",
      path: "/trending",
    },
    {
      name: "Settings",
      icon: "material-symbols:settings-outline",
      type: "navigation",
      path: "/settings",
    },
    {
      name: "Help",
      icon: "material-symbols:help-outline",
      type: "navigation",
      path: "/help",
    },
  ];

  // Include "Your Channel" only if userId is available
  const channelItem: INavigation | undefined = userId
    ? {
        name: "Your Channel",
        type: "dropdown",
        icon: "mdi:user-outline",
        subItems: [
          {
            name: "Your Profile",
            type: "navigation",
            icon: "mdi:user-outline",
            path: `/profile/${userId}`,
          },
          {
            name: "Subscriptions",
            icon: "mdi:youtube-subscription",
            type: "navigation",
            path: `/subscriptions/${userId}`,
          },
          {
            name: "Watch History",
            type: "navigation",
            icon: "material-symbols:history",
            path: `/history/${userId}`,
          },
          {
            name: "Your Videos",
            type: "navigation",
            icon: "ph:video",
            path: `/user-videos/${userId}`,
          },
          {
            name: "Liked Videos",
            type: "navigation",
            icon: "mdi:like-outline",
            path: `/liked-videos/${userId}`,
          },
          {
            name: "Your Tweets",
            type: "navigation",
            icon: "ic:outline-post-add",
            path: `/liked-videos/${userId}`,
          },
        ],
      }
    : undefined;

  // Include "Sign In" only if userId is absent
  const signInItem: INavigation | undefined = userId
    ? undefined
    : {
        name: "Sign In",
        type: "navigation",
        icon: "mdi:login",
        path: "/signin",
      };

  return [...baseItems, channelItem, signInItem].filter(
    Boolean
  ) as INavigation[];
};

export default generateNavigationItems;
