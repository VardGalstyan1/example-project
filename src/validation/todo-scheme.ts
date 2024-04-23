
import * as yup from "yup";

export const toDoScheme = yup.object({
    todo:yup.string().required().min(3)
})