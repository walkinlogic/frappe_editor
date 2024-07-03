frappe.ui.form.ControlTextEditor.prototype.get_quill_options = function() {
    return {
        modules: {
           toolbar: this.get_toolbar_options(),
            table: true,
            imageResize: {},
            magicUrl: true, 
            history: {
                delay: 2000,
                maxStack: 500,
                userOnly: true
            },
            mention: this.get_mention_options(),
        },
        theme: "snow",
    };
}
frappe.ui.form.ControlTextEditor.prototype.get_toolbar_options = function () {
      
    return  [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }], ['task-list'],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
         
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['link', "image", 'video', 'formula'], 
        ['clean']                                         // remove formatting button
      ];
}