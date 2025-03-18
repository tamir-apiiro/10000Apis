
const express = require('express')
import {handler9869} from "./handler9869";
const app = express()
app.get('/9869', handler9869)
app.listen(3000, () => {})
        