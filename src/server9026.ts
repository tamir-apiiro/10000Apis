
const express = require('express')
import {handler9026} from "./handler9026";
const app = express()
app.get('/9026', handler9026)
app.listen(3000, () => {})
        