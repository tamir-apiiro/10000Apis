
const express = require('express')
import {handler9891} from "./handler9891";
const app = express()
app.get('/9891', handler9891)
app.listen(3000, () => {})
        