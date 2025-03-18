
const express = require('express')
import {handler9418} from "./handler9418";
const app = express()
app.get('/9418', handler9418)
app.listen(3000, () => {})
        