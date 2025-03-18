
const express = require('express')
import {handler9218} from "./handler9218";
const app = express()
app.get('/9218', handler9218)
app.listen(3000, () => {})
        