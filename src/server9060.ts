
const express = require('express')
import {handler9060} from "./handler9060";
const app = express()
app.get('/9060', handler9060)
app.listen(3000, () => {})
        