import React from 'react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Layout({children}) {
  const { t } = useTranslation()

  return (
    <div className="container">
      <Head>
        <title>{t('common:title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  )
}
