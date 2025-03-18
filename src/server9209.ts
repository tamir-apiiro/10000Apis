
const express = require('express')
import {handler9209} from "./handler9209";
const app = express()
app.get('/9209', handler9209)
app.listen(3000, () => {})
        