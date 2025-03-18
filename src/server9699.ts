
const express = require('express')
import {handler9699} from "./handler9699";
const app = express()
app.get('/9699', handler9699)
app.listen(3000, () => {})
        