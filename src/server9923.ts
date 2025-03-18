
const express = require('express')
import {handler9923} from "./handler9923";
const app = express()
app.get('/9923', handler9923)
app.listen(3000, () => {})
        