export const modules = {
    toolbar:[
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false] }],  // custom dropdown
        [{ 'header': [4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ],

}

export const formats = [
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', // toggled buttons
  'link', 'image', 'video', 'formula', // link, image, video, formula
  'header', 'list', 'bullet', 'check', // custom button values
  'script', 'indent', // superscript/subscript, outdent/indent
  'direction', // text direction
  'size', // custom dropdown
  'color', 'background', // color and background color
  'font', // font family
  'align', // text alignment
  'clean' // remove formatting button
];