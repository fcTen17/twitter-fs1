export const checkStatus = (response) => {
    if (response.ok) {
      // .ok returns true if response status is 200-299
      return response;
    }
    throw new Error('Request was either a 404 or 500');
  }

export const json = (response) => response.json()

export const  readURL = (input) => {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#image-preview').attr('src', e.target.result);
      $('#image-preview').show();
    }

    reader.readAsDataURL(input.files[0]);
  }
}