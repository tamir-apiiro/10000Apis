
const express = require('express')
import {handler9041} from "./handler9041";
const app = express()
app.get('/9041', handler9041)
app.listen(3000, () => {})
        