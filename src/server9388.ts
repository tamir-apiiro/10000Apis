
const express = require('express')
import {handler9388} from "./handler9388";
const app = express()
app.get('/9388', handler9388)
app.listen(3000, () => {})
        