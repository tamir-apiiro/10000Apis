
const express = require('express')
import {handler9688} from "./handler9688";
const app = express()
app.get('/9688', handler9688)
app.listen(3000, () => {})
        