
const express = require('express')
import {handler9654} from "./handler9654";
const app = express()
app.get('/9654', handler9654)
app.listen(3000, () => {})
        