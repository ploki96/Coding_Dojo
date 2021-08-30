from typing import final
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


options = webdriver.ChromeOptions()
driver = webdriver.Chrome()

url = "https://www.bestbuy.com/site/pokemon-tcg-sword-shield-vivid-voltage-sleeved-booster/6437565.p?skuId=6437565"
email = 'timmywang4742@gmail.com'
password = "4N2:5D:TKmFnwe-"
cvv = '770'

driver.maximize_window()

driver.get(url)

try:
    # logging in
    click_account_btn = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "account-button")))
    click_account_btn.click()
    click_sign_in_btn = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "sign-in-btn")))
    click_sign_in_btn.click()
    email_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "fld-e")))
    email_input.click()
    email_input.send_keys(email)
    password_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "fld-p1")))
    password_input.click()
    password_input.send_keys(password)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "cia-form__controls__submit"))).click()

    # checking out
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "add-to-cart-button"))).click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[8]/div/div[1]/div/div/div/div/div[1]/div[3]/a"))).click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/main/div/div[2]/div[1]/div/div[1]/div[1]/section[2]/div/div/div[4]/div/div[1]/button"))).click()
    cvv_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "cvv")))
    cvv_input.click()
    cvv_input.send_keys(cvv)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div/div[2]/div[1]/div[1]/main/div[2]/div[2]/div/div[4]/div[3]/div/div[2]/button"))).click()



    # /html/body/div[1]/div[2]/div/div[2]/div[1]/div[1]/main/div[2]/div[2]/div/div[4]/div[3]/div/div[2]/button
    
finally:
    driver.close()


# driver.implicitly_wait(10)
# click_account_btn = driver.find_element_by_class_name("account-button").click()
# driver.implicitly_wait(10)
# click_sign_in_btn = driver.find_element_by_class_name("sign-in-btn").click()
# click_sign_in_btn = driver.find_element_by_xpath('//*[@id="shop-account-menu-d3f8e0b0-21aa-4483-8840-a9641dfaa1c6"]/div/div/div/div/a[1]').click()




