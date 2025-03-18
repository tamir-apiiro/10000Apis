
const express = require('express')
import {handler5450} from "./handler5450";
const app = express()
app.get('/5450', handler5450)
app.listen(3000, () => {})
        