
const express = require('express')
import {handler9733} from "./handler9733";
const app = express()
app.get('/9733', handler9733)
app.listen(3000, () => {})
        