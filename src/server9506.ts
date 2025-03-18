
const express = require('express')
import {handler9506} from "./handler9506";
const app = express()
app.get('/9506', handler9506)
app.listen(3000, () => {})
        