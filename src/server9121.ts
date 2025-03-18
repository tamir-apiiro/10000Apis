
const express = require('express')
import {handler9121} from "./handler9121";
const app = express()
app.get('/9121', handler9121)
app.listen(3000, () => {})
        