/**
 * Opens a new window with a link to my resume in the specified language.
 *
 * @param {'zh-TW' | 'en-US'} lang - The language of the resume.
 */
export const cvHref = (lang: 'zh-TW' | 'en-US') => {
  window.open(
    lang === 'en-US'
    ? 'https://drive.google.com/file/d/12dUF1QSWYwSRFKkwQqeBhpnlh_z_bUFr/view?usp=sharing'
    : 'https://drive.google.com/file/d/1R7mmJz8kMIhvWxDg64K8N2T9WsDdpFRB/view?usp=sharing',
    '_blank'
  );
};
