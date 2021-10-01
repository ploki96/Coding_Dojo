package timothywang.hoppersReceipt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller
public class HoppersReceiptApplication {

	@RequestMapping("/")
	public String home (Model model) {
		model.addAttribute("name", "Hopper");
		return "index.jsp";
	}

}
