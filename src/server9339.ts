
const express = require('express')
import {handler9339} from "./handler9339";
const app = express()
app.get('/9339', handler9339)
app.listen(3000, () => {})
        