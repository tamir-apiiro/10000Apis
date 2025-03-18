
const express = require('express')
import {handler9340} from "./handler9340";
const app = express()
app.get('/9340', handler9340)
app.listen(3000, () => {})
        