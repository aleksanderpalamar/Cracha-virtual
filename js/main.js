const linksSocialMedia = {
  usergithub: 'aleksanderpalamar',
  twitter: 'Palamar_Dev',
  facebook: 'nerd.palamar',
  youtube: '/channel/UC1kVcwC8jAtC0B1gfLLc7KQ',
  instagram: 'palamar_dev',
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')    
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.usergithub}`
  fetch(url).then(response => response.json()).then(data => {
    const { name, bio, html_url, avatar_url, login, blog  } = data
    userTitle.innerText = `${name}'s GitHub Profile`
    userName.innerText = name
    userBio.innerText = bio
    userLink.href = html_url
    userAvatar.src = avatar_url
    userLogin.innerText = login
    userSite.href = blog        
  }) 
      
}

getGitHubProfileInfo();