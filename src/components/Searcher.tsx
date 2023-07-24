interface SeacherProps {
  setFilter: (filter: {
    name: string;
    status: string;
    gender: string;
    sort: string;
    delete: boolean;
  }) => void;
  filter: {
    name: string;
    status: string;
    gender: string;
    sort: string;
    delete: boolean;
  };
}

const Searcher = ({ setFilter, filter }: SeacherProps) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFilter({
      ...filter,
      name: e.target.value,
    });
  };

  const hadleSelectStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      status: e.target.value,
    });
  };

  const hadleSelectGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      gender: e.target.value,
    });
  };

  const hadleSelectSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      sort: e.target.value,
    });
  };

  const handleDeleteFilter = () => {
    setFilter({
      name: "",
      status: "",
      gender: "",
      sort: "",
      delete: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <form className="row row-cols-3 collapse navbar-collapse justify-content-center align-items-center">
          <input
            className="col form-control form-control-sm w-50"
            value={filter.name}
            type="search"
            onChange={handleChange}
            placeholder="Buscar personaje"
          />
          <div className="col d-flex">
            <select
              className="form-select form-select-sm"
              value={filter.status}
              onChange={hadleSelectStatus}
              name="selectedStatus"
            >
              <option disabled={true} value="">
                --Estado--
              </option>
              <option value="alive">Vivo</option>
              <option value="dead">Muerto</option>
              <option value="unknown">Desconocido</option>
            </select>
            <select
              className="form-select form-select-sm"
              value={filter.gender}
              onChange={hadleSelectGender}
              name="selectedGender"
            >
              <option className="dropdown-toggle" disabled={true} value="">
                --Genero--
              </option>
              <option value="female">Hembra</option>
              <option value="male">Macho</option>
              <option value="genderless">Sin género</option>
              <option value="unknown">Desconocido</option>
            </select>
            <select
              className="form-select form-select-sm"
              value={filter.sort}
              onChange={hadleSelectSort}
              name="selectedSort"
            >
              <option disabled={true} value="">
                --Ordenar--
              </option>
              <option value="asc">A -- Z</option>
              <option value="des">Z -- A</option>
            </select>
          </div>

          <div
            className="col btn-sm btn btn-outline-danger w-auto"
            onClick={handleDeleteFilter}
          >
            quitar filtros
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Searcher;
