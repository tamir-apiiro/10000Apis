
const express = require('express')
import {handler9569} from "./handler9569";
const app = express()
app.get('/9569', handler9569)
app.listen(3000, () => {})
        