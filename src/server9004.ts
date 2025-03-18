
const express = require('express')
import {handler9004} from "./handler9004";
const app = express()
app.get('/9004', handler9004)
app.listen(3000, () => {})
        