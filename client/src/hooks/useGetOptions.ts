import { useAppSelector } from "./redux";


const useFetchOptions = ()=>{
    const { garanties } = useAppSelector((state) => state.garanteeReducer);
    const { countries } = useAppSelector((state) => state.countryReducer);
    const { colors } = useAppSelector((state) => state.colorReducer);
    const { materials: materialsArc } = useAppSelector(
      (state) => state.materialArcReducer,
    );
    const { materials: materialsBottom } = useAppSelector(
      (state) => state.materialBottomReducer,
    );
    const { placecounts } = useAppSelector((state) => state.placecountReducer);
    const { seasons } = useAppSelector((state) => state.seasonReducer);

    return {garanties, countries, colors, materialsArc, materialsBottom, placecounts, seasons}
}

export default useFetchOptions;