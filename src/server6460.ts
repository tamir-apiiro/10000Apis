
const express = require('express')
import {handler6460} from "./handler6460";
const app = express()
app.get('/6460', handler6460)
app.listen(3000, () => {})
        