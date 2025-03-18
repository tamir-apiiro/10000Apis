
const express = require('express')
import {handler9694} from "./handler9694";
const app = express()
app.get('/9694', handler9694)
app.listen(3000, () => {})
        