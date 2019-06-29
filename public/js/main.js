$(document).ready(function(){
    $('#SearchControl').on('keyup', function(e) {
        let username = e.target.value;

        $.ajax({
            url: 'https://api.github.com/users/'+ username,
            data :{
                client_id: 'github_client_id',
                client_secret: 'github_client_secret'
            }
        }).done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/'+username+'/repos',
                data: {
                    client_id: 'githu_client_id',
                    client_secret: 'github_client_secret'
                }

            }).done(function (repos){
                 $.each(repos, function (index, repo) {
                     $('#repos').append(`
                     <div class="jumbotron">
                     <div class="row">
                     <div class="col-md-7">
                     <strong>${repo.name}</strong> : ${repo.description}
                     </div>
                     <div class="col-md-3">
                     <span class="i1">Forks: ${repo.forks_count}</span>
                     <span class="i2">Watchers : ${repo.watchers_count}</span>
                     <span class="i3">Stars : ${repo.stargazers_count}</span>
                     </div>
                     <div class="col-md-2">
                     <a href="${repo.html_url}" target="_black" class="i4">View Page</>
                     </div>
                     </div>
                     </div>  `)
                 })
            })
            $('#profile').html(`
             <div class="panel panel-default">
                <div class="panel-heading">
                  <h3>${user.login}</h3>
                </div>
                <div class="panel-body">
                   <div class="row">
                     <div class="col-md-4">
                       <img class="avatar thumbnail" src="${user.avatar_url}">
                       <a class="btn btn-info view btn-block" href=" ${user.html_url}" target="_black">View Profile</a>
                     </div>
                     <div class="col-md-8">
                        <button type="button" class="btn btn-warning">Location:${user.location}</button>
                        <button type="button" class="btn btn-primary">Followers:${user.followers}</button>
                        <button type="button" class="btn btn-success">Following:${user.following}</button>
                        <button type="button" class="btn btn-info">Repos:${user.public_repos}</button>

                         <ul class="list-group">
                            <li class="list-group-item">Blog: ${user.blog}</li>
                            <li class="list-group-item">Compnay: ${user.compnay}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                             <li class="list-group-item">User Since: ${user.created_at}</li>
                        </ul> 
                     </div>
                   </div>
                </div>
            </div>
            <h3>Reposatories </h4>
            <div id="repos"></div>
            `)
        }) 
    })
})
