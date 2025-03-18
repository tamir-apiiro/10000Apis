
const express = require('express')
import {handler9504} from "./handler9504";
const app = express()
app.get('/9504', handler9504)
app.listen(3000, () => {})
        