package timothywang.daikichiroutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication

@RestController
@RequestMapping("/daikichi")
public class DaikichiroutesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DaikichiroutesApplication.class, args);
	}
	// 1. Annotation
    @RequestMapping("")
    // 3. Method that maps to the request route above
    public String hello() { // 3
            return "Welcome!";
    }
    @RequestMapping("/today")
    public String index(){
      return "Today you will find luck in all your endeavors!";
    }

    @RequestMapping("/tomorrow")
    public String world(){
      return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }
}
