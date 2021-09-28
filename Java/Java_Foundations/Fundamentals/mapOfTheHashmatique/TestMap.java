import java.util.HashMap;

public class TestMap {
    public static void main(String[] args){
        MapUtil mapUtil = new MapUtil();

        mapUtil.addTrack("track1", "lyrics1");
        mapUtil.addTrack("track2", "lyrics2");
        mapUtil.addTrack("track3", "lyrics3");
        mapUtil.addTrack("track4", "lyrics4");

        String singleSong = "track2";
        mapUtil.singleTrack(singleSong);

        mapUtil.allTracks();




    }
}
