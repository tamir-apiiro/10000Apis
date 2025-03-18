
const express = require('express')
import {handler9743} from "./handler9743";
const app = express()
app.get('/9743', handler9743)
app.listen(3000, () => {})
        