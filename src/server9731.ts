
const express = require('express')
import {handler9731} from "./handler9731";
const app = express()
app.get('/9731', handler9731)
app.listen(3000, () => {})
        