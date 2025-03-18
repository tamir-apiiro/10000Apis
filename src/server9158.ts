
const express = require('express')
import {handler9158} from "./handler9158";
const app = express()
app.get('/9158', handler9158)
app.listen(3000, () => {})
        