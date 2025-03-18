
const express = require('express')
import {handler9454} from "./handler9454";
const app = express()
app.get('/9454', handler9454)
app.listen(3000, () => {})
        