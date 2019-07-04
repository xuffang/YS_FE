function generateHTML(commitsInfo) {
	return `
	<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
				<style>
					html {
						overflow-y: scroll
					}
				
					html.touch .tooltip {
							display: none !important
					}
					
					body {
							padding-bottom: 20px
					}

					p {
						margin: 0 0 9px;
					}
					
					.container {
							padding-top: 0;
							z-index: 5
					}
					a {
						outline: none;
						color: #446e9b;
						text-decoration: none;
						background: transparent;
					}
					.container .content {
							margin: 0 0
					}
					.col-md-2 {
							width: 16.6666666667%
					}
					.col-md-8 {
						width: 66.6666666667%
					}
					ul.bordered-list li {
						padding: 5px 0;
						border-bottom: 1px solid #EEE;
						overflow: hidden;
						display: block;
						margin: 0px;
					}
					li.commit .commit-row-info {
						color: #777;
					}

					li.commit .commit-row-title .commit_short_id {
						min-width: 65px;
						font-family: "Menlo", "Liberation Mono", "Consolas", "Courier New", "andale mono", "lucida console", monospace;
					}

					li.commit .commit-row-title .commit-row-message {
						color: #333;
						font-weight: 500;
					}

					.pull-right {
						float: right !important;
					}

					.li.commit .commit-row-info {
						color: #777;
					}

					.str-truncated {
						display: inline-block;
						overflow: hidden;
						text-overflow: ellipsis;
						vertical-align: top;
						white-space: nowrap;
						max-width: 82%;
					}

					li.commit .commit-row-title {
						font-size: 14px;
						margin-bottom: 2px;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="content" style="margin-top: 30px">
						<div class="row commits-row">
							<div class="col-md-2">
								<h4>
									<span>${new Date().toLocaleString()}</span>
								</h4>
								<p>${commitsInfo.total_commits_count} commits</p>
							</div>
							<div class="col-md-10">
								<ul class="bordered-list">
									${commitsInfo.commits.map(commit => 
										`
											<li class="commit js-toggle-container">
												<div class="commit-row-title">
													<a class="commit_short_id" style="text-decoration: none" href="${formatUrl(commit.url)}">${commit.id}</a>
													&nbsp;
													<span class="str-truncated">
														<a class="commit-row-message" style="text-decoration: none;color: #333;font-weight: 500;" target="_blank" href="${formatUrl(commit.url)}">${commit.message}</a>
													</span>
													<a class="pull-right" style="text-decoration: none" target="_blank" href="${formatUrl(commit.url)}">Browse Code »</a>
													<div class="notes_count">
												</div>
												<div class="commit-row-info">
													<a style="text-decoration: none" class="commit-author-link has_tooltip" data-original-title="${commit.author.name}" href="#">
															<img alt="" class="avatar s16"
															src="http://www.gravatar.com/avatar/85163640e5f7fa5f93697a66dfec8350?s=16&amp;d=identicon"
															width="16">
														<span class="commit-author-name">${commit.author.name}</span>
													</a>
													<div class="committed_ago">
														<time class="time_ago" data-placement="top" data-toggle="tooltip"
															title="">${commit.timestamp}</time>
														&nbsp;
													</div>
												</div>
											</li>
										`
									).join(' ')}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	`;
}

function formatUrl(url) {
	return `http://192.168.5.142/${url.split('localhost/')[1]}`;
}

module.exports = {
	formatUrl,
	generateHTML
};