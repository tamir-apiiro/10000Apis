
const express = require('express')
import {handler9101} from "./handler9101";
const app = express()
app.get('/9101', handler9101)
app.listen(3000, () => {})
        