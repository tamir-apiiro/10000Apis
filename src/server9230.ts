
const express = require('express')
import {handler9230} from "./handler9230";
const app = express()
app.get('/9230', handler9230)
app.listen(3000, () => {})
        