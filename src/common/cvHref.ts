/**
 * Opens a new window with a link to my resume in the specified language.
 *
 * @param {'zh-TW' | 'en-US'} lang - The language of the resume.
 */
export const cvHref = (lang: 'zh-TW' | 'en-US') => {
  window.open(
    lang === 'en-US'
    ? 'https://drive.google.com/file/d/147CWcvyH0o-VCIuxT6-3RpB_TxR_F2gs/view?usp=sharing'
    : 'https://drive.google.com/file/d/1V3q3MEwaY5FHqdYxGGZu4Q_clysQ8hg_/view?usp=sharing',
    '_blank'
  );
};
