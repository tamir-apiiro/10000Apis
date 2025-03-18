
const express = require('express')
import {handler9804} from "./handler9804";
const app = express()
app.get('/9804', handler9804)
app.listen(3000, () => {})
        