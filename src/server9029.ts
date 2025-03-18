
const express = require('express')
import {handler9029} from "./handler9029";
const app = express()
app.get('/9029', handler9029)
app.listen(3000, () => {})
        