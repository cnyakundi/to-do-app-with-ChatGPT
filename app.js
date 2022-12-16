$(document).ready(function() {
    // Add a task
    $('#todo-form').submit(function(e) {
        e.preventDefault();
        var taskName = $('#task-name').val();
        if (taskName) {
            var taskHTML = '<li class="list-group-item">' +
                '<span>' + taskName + '</span>' +
                '<button class="btn btn-danger btn-sm float-right delete-button">Delete</button>' +
                '<button class="btn btn-info btn-sm float-right edit-button mr-2">Edit</button>' +
                '</li>';
            $('#task-list').append(taskHTML);
            $('#task-name').val('');
        }
    });

    // Delete a task
    $(document).on('click', '.delete-button', function() {
        $(this).parent().remove();
    });

    // Edit a task
    $(document).on('click', '.edit-button', function() {
        var taskName = $(this).siblings('span').text();
        var taskHTML = '<form id="edit-form">' +
            '<div class="form-group">' +
            '<input type="text" class="form-control" value="' + taskName + '">' +
            '</div>' +
            '<button type="submit" class="btn btn-primary btn-block">Save</button>' +
            '</form>';
        $(this).parent().html(taskHTML);
    });

    // Save an edited task
    $(document).on('submit', '#edit-form', function(e) {
        e.preventDefault();
        var taskName = $(this).find('input').val();
        var taskHTML = '<span>' + taskName + '</span>' +
            '<button class="btn btn-danger btn-sm float-right delete-button">Delete</button>' +
            '<button class="btn btn-info btn-sm float-right edit-button mr-2">Edit</button>';
        $(this).parent().html(taskHTML);
    });
});