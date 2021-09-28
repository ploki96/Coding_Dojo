import java.util.HashMap;
import java.util.Set;

public class MapUtil {
    HashMap<String, String> trackList = new HashMap<String, String>();
    
    public void addTrack(String track, String lyrics) {
        trackList.put(track, lyrics);
    }

    public void singleTrack (String track) {
        System.out.println(trackList.get(track));
    }

    public void allTracks () {
        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(key + " : " + trackList.get(key));
        }
    }
}
