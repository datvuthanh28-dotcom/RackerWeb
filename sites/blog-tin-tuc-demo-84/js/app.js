const query = document.getElementById('query');
const topic = document.getElementById('topic');
if (query && topic) {
  const results = document.getElementById('results');
  const articles = [...document.querySelectorAll('article[data-topic]')];
  const fold = value => value.toLocaleLowerCase('vi-VN').normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/đ/g, 'd');
  const params = new URLSearchParams(location.search);
  const selected = params.get('muc');
  if ([...topic.options].some(option => option.value === selected)) topic.value = selected;
  query.value = params.get('q') || '';

  function filter() {
    const term = fold(query.value.trim());
    let matching = 0;
    for (const article of articles) {
      article.hidden = Boolean((topic.value && topic.value !== article.dataset.topic) || !fold(article.textContent).includes(term));
      if (!article.hidden) matching++;
    }
    results.textContent = matching ? matching + ' bài viết' : 'Không có bài viết phù hợp.';
  }

  query.addEventListener('input', filter);
  topic.addEventListener('change', filter);
  filter();
}
