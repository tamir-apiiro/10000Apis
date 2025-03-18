
const express = require('express')
import {handler6177} from "./handler6177";
const app = express()
app.get('/6177', handler6177)
app.listen(3000, () => {})
        