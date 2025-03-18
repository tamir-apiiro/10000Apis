
const express = require('express')
import {handler9000} from "./handler9000";
const app = express()
app.get('/9000', handler9000)
app.listen(3000, () => {})
        