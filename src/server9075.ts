
const express = require('express')
import {handler9075} from "./handler9075";
const app = express()
app.get('/9075', handler9075)
app.listen(3000, () => {})
        