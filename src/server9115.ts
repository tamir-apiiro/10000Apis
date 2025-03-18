
const express = require('express')
import {handler9115} from "./handler9115";
const app = express()
app.get('/9115', handler9115)
app.listen(3000, () => {})
        