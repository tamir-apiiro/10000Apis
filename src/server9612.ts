
const express = require('express')
import {handler9612} from "./handler9612";
const app = express()
app.get('/9612', handler9612)
app.listen(3000, () => {})
        