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
        [{ 'font': [] }],
        [{ 'size': ['small', 'normal', 'large', 'huge'] }],   
        ['bold', 'italic', 'underline', 'strike'],    
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'align': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      
        [{ 'header': 1 }, { 'header': 2 }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['blockquote', 'code-block'],             
        [{ 'list': 'ordered' }, { 'list': 'bullet' }], 
        ['task-list'], 
        [{ 'indent': '-1' }, { 'indent': '+1' }],           
        [{ 'direction': 'rtl' }],   
        ['link', "image", 'video', 'formula'], 
        ['clean']                                        
      ];
}