
const express = require('express')
import {handler9184} from "./handler9184";
const app = express()
app.get('/9184', handler9184)
app.listen(3000, () => {})
        