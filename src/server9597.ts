
const express = require('express')
import {handler9597} from "./handler9597";
const app = express()
app.get('/9597', handler9597)
app.listen(3000, () => {})
        