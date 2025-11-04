"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { userDataService } from "@/lib/user-data-service";
import { Activity } from "@/types";
import { ActivityCard } from "./ActivityCard";

export default function ActivityView() {
  const { isArtist, user } = useAuth();
  const [activities, setActivities] = useState<Activity[]>([]);

  // Load activities for the current user
  useEffect(() => {
    if (user) {
      const userActivities = userDataService.getActivitiesForUser(user);
      setActivities(userActivities);
    }
  }, [user]);

  return (
    <div className="p-4 pb-6 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-xl font-bold mb-4 text-white">Activity</h1>

      {activities.length > 0 ? (
        <div className="space-y-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-gray-300 font-medium">
            You don't have any notifications yet
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {isArtist()
              ? "Interactions with your followers will appear here"
              : "Updates from artists you follow will appear here"}
          </p>
        </div>
      )}
    </div>
  );
}
