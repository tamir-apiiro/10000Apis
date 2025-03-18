
const express = require('express')
import {handler9671} from "./handler9671";
const app = express()
app.get('/9671', handler9671)
app.listen(3000, () => {})
        