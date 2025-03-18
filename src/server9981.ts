
const express = require('express')
import {handler9981} from "./handler9981";
const app = express()
app.get('/9981', handler9981)
app.listen(3000, () => {})
        