
const express = require('express')
import {handler9947} from "./handler9947";
const app = express()
app.get('/9947', handler9947)
app.listen(3000, () => {})
        