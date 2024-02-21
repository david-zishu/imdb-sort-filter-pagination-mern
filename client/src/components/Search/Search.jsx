import styles from "./styles.module.css";

export const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      className={styles.search}
      placeholder="Search"
      onChange={({ currentTarget: input }) => setSearch(input.value)}
    />
  );
};
