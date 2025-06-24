import moment from "moment";

export const formatToDate = (data: string) => {
  return moment(data).format("DD.MM.YYYY");
};
