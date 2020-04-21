import React from 'react';
import Day from './Day';
import { Segment } from 'semantic-ui-react';

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro Artesan Market",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton Farmer's Market",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

function MarketList() {
  return (
    <Segment>
      {marketSchedule.map((day, index) => 
      <Day day = {day.day}
        location = {day.location}
        hours = {day.hours}
        booth = {day.booth} />
      )}
    </Segment>
  );
}

export default MarketList;