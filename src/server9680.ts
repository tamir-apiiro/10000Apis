
const express = require('express')
import {handler9680} from "./handler9680";
const app = express()
app.get('/9680', handler9680)
app.listen(3000, () => {})
        