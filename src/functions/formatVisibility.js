// 1,000
// 100
export const formatVisibility = (visibilityInMeters) => { 
    if (visibilityInMeters) {
        // Convert meters to kilometers if visibility is greater than 1000 meters
        if (visibilityInMeters >= 1000) {
          const visibilityInKilometers = visibilityInMeters / 1000;
          return [visibilityInKilometers.toFixed(1), "Km"];
        }
        // Otherwise, keep the visibility in meters
        else {
          return [visibilityInMeters, "M"];
        }
    }
} 