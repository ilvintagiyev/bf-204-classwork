import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function DeleteToDo({ id, setTodos }) {
  function handleDelete() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setTodos((todos) => {
            return todos.filter((todo) => {
              return todo.id != id;
            });
          });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  }
  return <button onClick={handleDelete}>Delete</button>;
}

DeleteToDo.propTypes = {
  id: PropTypes.string,
  setToDos: PropTypes.func,
};

export default DeleteToDo;