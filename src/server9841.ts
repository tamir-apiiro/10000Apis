
const express = require('express')
import {handler9841} from "./handler9841";
const app = express()
app.get('/9841', handler9841)
app.listen(3000, () => {})
        