
### TO DO:
- Revamp UI
- Add Preset  buttons for Social Media Resizing at a click of button



### Project live link:

https://saishivahariprasad.com/ImageResizer.html

### API guidelines
API URL: https://zhqqdj4ggf.execute-api.us-east-1.amazonaws.com/api/UploadImage/

API USAGE:

> if you need height(px) x width(px):

Example for image with 500px into 500px use following url:
>https://zhqqdj4ggf.execute-api.us-east-1.amazonaws.com/api/UploadImage/500X500

Image is sent using form data object using fetch.


### Useful Preset Dimensions:
- Facebook: 1200 x 628 pixels
- Twitter: 900 x 450 pixels
- Instagram: 1080 x 1080 pixels
- LinkedIn: 1350 x 440 pixels
- Facebook profile picture: 320 x 320 pixels
- Facebook posts: 720, 980, 2048 pixels width and the corresponding height in pixels
- Facebook and Instagram news feeds & right-hand column ads: 1080 x 1080 pixels
- Facebook and Instagram Stories: 1080 x 1920 pixels



# Things to Keep in mind
- UI needs to be responsive
- UI needs to be centered in desktopn- max width of 978px
- validations are neccessary to prevent sever overload


# Lambda Dashboardlink:
[Dashboard Link](https://cloudwatch.amazonaws.com/dashboard.html?dashboard=ImageResizer-lambda&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTA0NTUzMzMxNTQzNiIsIlUiOiJ1cy1lYXN0LTFfRUtWazFHTDVDIiwiQyI6IjQzNWw0NzFoaWNzMG91bDFpdWkzMDQzMTFuIiwiSSI6InVzLWVhc3QtMTplZWQ3NTRiZS1kYmZiLTQ3NmMtYmM5OS0xZTNkM2I0Yzc3NWQiLCJNIjoiUHVibGljIn0=)