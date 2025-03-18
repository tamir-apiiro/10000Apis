
const express = require('express')
import {handler9321} from "./handler9321";
const app = express()
app.get('/9321', handler9321)
app.listen(3000, () => {})
        