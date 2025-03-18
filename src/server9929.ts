
const express = require('express')
import {handler9929} from "./handler9929";
const app = express()
app.get('/9929', handler9929)
app.listen(3000, () => {})
        