
const express = require('express')
import {handler9681} from "./handler9681";
const app = express()
app.get('/9681', handler9681)
app.listen(3000, () => {})
        