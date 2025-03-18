
const express = require('express')
import {handler9737} from "./handler9737";
const app = express()
app.get('/9737', handler9737)
app.listen(3000, () => {})
        