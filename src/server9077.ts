
const express = require('express')
import {handler9077} from "./handler9077";
const app = express()
app.get('/9077', handler9077)
app.listen(3000, () => {})
        