---
layout: default
title: Blog
---

<div id="page">
  <div class="blog section">
    <div id="sectionTitle">
      <h1 class="blog-title">
        Blog
      </h1>
      <hr class="hr-gradient">
    </div>
    <div class="main">
      <div class="blog-content">
        <ul class="post-list">
          {% for post in site.posts %}
            <li>
              <div class="blog-post">
                <span class="post-meta">{{ post.date | date: "%b , %Y" }}</span>

                <h2>
                  <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                </h2>
                <hr>

                  {{ post.excerpt}}
                <hr>
              </div>
            </li>
          {% endfor %}
        </ul>
        <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

      </div>

    </div>

  </div>
</div>
