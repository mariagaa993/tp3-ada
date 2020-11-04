const deleteUser = (user) => {
  const eliminarConfirmado = async () => {
      try{
          await axios.delete(`${BASE_URL}/${user.id}`)
          const row = document.getElementById(user.id);
          row.remove();
          closeDeleteModal();
      } catch(err){
          console.error(err);
      }
  }

  openDeleteModal(user, eliminarConfirmado)
}
