import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function AdminHome() {
  const { t, } = useTranslation();
  return (
    <div>
      <Button as={Link} to="/admin/home" variant="primary">{t("admin.shops")}</Button>{' '}
      <Button as={Link} to="/admin/maintain" variant="secondary">{t("admin.categories")}</Button>{' '}
      <Button as={Link} to="/admin/add" variant="success">{t("admin.add-product")}</Button>{' '}
      <Button as={Link} to="/admin/edit" variant="warning">{t("admin.edit-delete-product")}</Button>{' '}
      
    </div>
  )
}

export default AdminHome