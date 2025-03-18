
const express = require('express')
import {handler9006} from "./handler9006";
const app = express()
app.get('/9006', handler9006)
app.listen(3000, () => {})
        