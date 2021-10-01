package timothywang.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HellohumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HellohumanApplication.class, args);
	}
	
	@RequestMapping("/")
	public String index(@RequestParam(value="f") String firstName, @RequestParam(value="l", required=false) String lastName, @RequestParam(value="times", required=false) Integer number) {
		if (number == null ) {
			if (lastName != null) {
				return "Hello " + firstName + " " + lastName;
			} else {
				return "Hello " + firstName;
			}
		}
		else {
			String returnString = "";
			for (var i=0; i< number;i++) {
				if(lastName ==null) {
					returnString = returnString + "Hello " + firstName + " ";
				}
				else {
					returnString = returnString + "Hello " + firstName + " " + lastName + " ";
				}
			}
			return returnString;
		}
	}
	
	
	@RequestMapping("/home")
	public String home() {
		return "home";
	}
}
