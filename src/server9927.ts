
const express = require('express')
import {handler9927} from "./handler9927";
const app = express()
app.get('/9927', handler9927)
app.listen(3000, () => {})
        