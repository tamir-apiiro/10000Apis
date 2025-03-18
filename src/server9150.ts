
const express = require('express')
import {handler9150} from "./handler9150";
const app = express()
app.get('/9150', handler9150)
app.listen(3000, () => {})
        