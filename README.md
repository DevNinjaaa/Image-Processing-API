# Image-Processing-API
  ![Image_Processing_API_📷 (1)](https://user-images.githubusercontent.com/72484475/165179988-eb09cd6e-5419-4e99-a756-81f826c0b63d.png)


SIMPLE API RESIZE IMG ACCORDING TO THE CLIENT INPUTS ANd PUT IT IN A FOLDER



![carbon (1)](https://user-images.githubusercontent.com/72484475/165180571-9978c94b-aeb9-40c4-a21d-4a524f7b1d86.png)

---get access to the static folder(images) using express 


![carbon (2)](https://user-images.githubusercontent.com/72484475/165180899-0a34892c-0b73-4f9f-9e5b-aa419e5cc347.png)


make an array of the images in the folder(images)



![carbon (4)](https://user-images.githubusercontent.com/72484475/165181295-ba1d8efc-717a-4ab7-a496-54b5c6f57b26.png)

mapping if the name assigned from the user is valid or not.


![carbon (5)](https://user-images.githubusercontent.com/72484475/165181398-f233dff2-aebb-4f82-8d04-6397009f9438.png)


-- handling the width and the height error if exist for a valid width and heigh
-- using sharp to resize the images
------------------------------------------------------------------------------
-- description:-
--it is a simple web API that resizes images from a static folder then redirects the user to the resized image
--when you assign negative or don't fill correct dimensions, it sends a message to tell you about the problem
--you can not get access to any other images outside the images folder.
--If you resize the image two times, the new one will replace the old image.
