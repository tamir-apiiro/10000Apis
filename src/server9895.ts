
const express = require('express')
import {handler9895} from "./handler9895";
const app = express()
app.get('/9895', handler9895)
app.listen(3000, () => {})
        