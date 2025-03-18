
const express = require('express')
import {handler9149} from "./handler9149";
const app = express()
app.get('/9149', handler9149)
app.listen(3000, () => {})
        