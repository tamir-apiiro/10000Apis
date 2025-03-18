
const express = require('express')
import {handler9176} from "./handler9176";
const app = express()
app.get('/9176', handler9176)
app.listen(3000, () => {})
        