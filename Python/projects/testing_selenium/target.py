from typing import final
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import random, string, re
from utils import create_msg

def change_driver(status_signal, loc):
    fin = open(loc, 'rb')
    data = fin.read()
    val = "$" + "".join(random.choices(string.ascii_lowercase, k=3)) + "_" + \
        "".join(random.choices(string.ascii_letters + string.digits, k=22)) + "_"

    result = re.search(b"[$][a-z]{3}_[a-zA-Z0-9]{22}_", data)

    if result is not None:
        try:
            status_signal.emit(create_msg("Changing value in Chromedriver", "normal"))
            data = data.replace(result.group(0), val.encode())
            fin.close()
            fin = open(loc, 'wb')
            fin.truncate()
            fin.write(data)
            fin.close()
        except:
            status_signal.emit(create_msg("Error modifying chromedriver", "error"))
    else:
        fin.close()

options = webdriver.ChromeOptions()
driver = webdriver.Chrome()

url = "https://www.target.com/p/pokemon-pikachu-pillow-buddy/-/A-79832816#lnk=sametab"
email = 'application4742@gmail.com'
password = "MyTestAccount1"
cvv = '770'

driver.maximize_window()

driver.get(url)


try:
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[4]/div/div[2]/div[3]/div[1]/div/div[3]/div[1]/div[2]/button"))).click()
    # driver.implicitly_wait(4)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[18]/div/div/div/div/div/div/div[2]/div[3]/button"))).click()
    # driver.implicitly_wait(4)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[4]/div[1]/div[2]/div/div/div/div[2]/button"))).click()
    # driver.implicitly_wait(4)
    email_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "username")))
    # driver.implicitly_wait(4)
    email_input.click()
    email_input.send_keys(email)
    password_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "password")))
    password_input.click()
    password_input.send_keys(password)
    # driver.implicitly_wait(4)
    password_input.send_keys(Keys.ENTER)
    # WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "account"))).click()
    # WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[13]/div/div/ul/li[1]/a"))).click()
    
    # email_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "ap_email")))
    # email_input.click()
    # email_input.send_keys(email)
    # email_input.send_keys(Keys.ENTER)
finally:
    print("woo")

def change_driver(status_signal, loc):
    fin = open(loc, 'rb')
    data = fin.read()
    val = "$" + "".join(random.choices(string.ascii_lowercase, k=3)) + "_" + \
          "".join(random.choices(string.ascii_letters + string.digits, k=22)) + "_"

    result = re.search(b"[$][a-z]{3}_[a-zA-Z0-9]{22}_", data)

    if result is not None:
        try:
            status_signal.emit(create_msg("Changing value in Chromedriver", "normal"))
            data = data.replace(result.group(0), val.encode())
            fin.close()
            fin = open(loc, 'wb')
            fin.truncate()
            fin.write(data)
            fin.close()
        except:
            status_signal.emit(create_msg("Error modifying chromedriver", "error"))
    else:
        fin.close()
