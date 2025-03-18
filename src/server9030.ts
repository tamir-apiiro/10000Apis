
const express = require('express')
import {handler9030} from "./handler9030";
const app = express()
app.get('/9030', handler9030)
app.listen(3000, () => {})
        