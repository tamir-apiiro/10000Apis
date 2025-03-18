
const express = require('express')
import {handler9428} from "./handler9428";
const app = express()
app.get('/9428', handler9428)
app.listen(3000, () => {})
        