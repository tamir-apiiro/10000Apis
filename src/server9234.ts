
const express = require('express')
import {handler9234} from "./handler9234";
const app = express()
app.get('/9234', handler9234)
app.listen(3000, () => {})
        