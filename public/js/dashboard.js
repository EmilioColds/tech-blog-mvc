document.querySelectorAll('.edit-post-form').forEach(form => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const postID = form.dataset.id;
        const title = form.querySelector('input[name="title"]').value.trim();
        const content = form.querySelector('textarea[name="content"]').value.trim();

        if(title && content) {
            const response = await fetch(`/dashboard/update/${postID}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title,
                    content
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.ok) {
                document.location.reload();
            } else {
                alert('Update fail!');
            }
        }
    });

    form.querySelector('.delete').addEventListener('click', async (event) => {
        const postID = button.dataset.id;
        const confDelete = confirm('Are you sure?');
        if(confDelete) {
            const response = await fetch(`/dashboard/delete/${postID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.ok) {
                document.location.reload(); 
            } else {
                alert('Delete fail!');
            }
        }
    });
});