
const express = require('express')
import {handler9812} from "./handler9812";
const app = express()
app.get('/9812', handler9812)
app.listen(3000, () => {})
        