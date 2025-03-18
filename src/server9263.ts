
const express = require('express')
import {handler9263} from "./handler9263";
const app = express()
app.get('/9263', handler9263)
app.listen(3000, () => {})
        