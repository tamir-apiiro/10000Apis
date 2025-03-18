
const express = require('express')
import {handler9008} from "./handler9008";
const app = express()
app.get('/9008', handler9008)
app.listen(3000, () => {})
        