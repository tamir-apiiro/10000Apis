
const express = require('express')
import {handler9545} from "./handler9545";
const app = express()
app.get('/9545', handler9545)
app.listen(3000, () => {})
        