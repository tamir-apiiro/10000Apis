
const express = require('express')
import {handler9159} from "./handler9159";
const app = express()
app.get('/9159', handler9159)
app.listen(3000, () => {})
        