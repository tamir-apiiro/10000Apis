
const express = require('express')
import {handler9632} from "./handler9632";
const app = express()
app.get('/9632', handler9632)
app.listen(3000, () => {})
        