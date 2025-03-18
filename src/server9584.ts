
const express = require('express')
import {handler9584} from "./handler9584";
const app = express()
app.get('/9584', handler9584)
app.listen(3000, () => {})
        