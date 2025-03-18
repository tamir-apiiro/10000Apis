
const express = require('express')
import {handler9267} from "./handler9267";
const app = express()
app.get('/9267', handler9267)
app.listen(3000, () => {})
        