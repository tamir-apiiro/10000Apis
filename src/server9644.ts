
const express = require('express')
import {handler9644} from "./handler9644";
const app = express()
app.get('/9644', handler9644)
app.listen(3000, () => {})
        