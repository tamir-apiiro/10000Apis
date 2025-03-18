
const express = require('express')
import {handler9366} from "./handler9366";
const app = express()
app.get('/9366', handler9366)
app.listen(3000, () => {})
        