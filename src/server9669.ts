
const express = require('express')
import {handler9669} from "./handler9669";
const app = express()
app.get('/9669', handler9669)
app.listen(3000, () => {})
        