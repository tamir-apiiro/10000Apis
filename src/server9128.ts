
const express = require('express')
import {handler9128} from "./handler9128";
const app = express()
app.get('/9128', handler9128)
app.listen(3000, () => {})
        