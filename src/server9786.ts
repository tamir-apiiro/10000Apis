
const express = require('express')
import {handler9786} from "./handler9786";
const app = express()
app.get('/9786', handler9786)
app.listen(3000, () => {})
        