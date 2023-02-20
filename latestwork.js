$(function() {
    // Load the JSON data
    $.getJSON('latest-work.json', function(data) {
      var latestProjects = data.projects;
      var projects = latestProjects.slice(0, 3);

      // Iterate over the latest projects
      $.each(projects, function(index, project) {
        // Generate the HTML code for the project card
        var projectCard = '<div class="col-md-4">';
        projectCard += '<div class="card">';
        projectCard += '<img src="' + project.image + '" class="card-img-top" alt="' + project.title + '">';
        projectCard += '<div class="card-body">';
        projectCard += '<h5 class="card-title">' + project.title + '</h5>';
        projectCard += '<p class="card-text">' + project.description + '</p>';
        projectCard += '<a href="' + project.link + '" class="btn btn-primary">Learn more</a>';
        projectCard += '</div></div></div>';
        // Append the project card to the latest work row
        $('#latest-work-row').append(projectCard);
      });
    });
  });