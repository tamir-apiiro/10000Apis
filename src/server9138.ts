
const express = require('express')
import {handler9138} from "./handler9138";
const app = express()
app.get('/9138', handler9138)
app.listen(3000, () => {})
        