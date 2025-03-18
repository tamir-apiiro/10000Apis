
const express = require('express')
import {handler9765} from "./handler9765";
const app = express()
app.get('/9765', handler9765)
app.listen(3000, () => {})
        