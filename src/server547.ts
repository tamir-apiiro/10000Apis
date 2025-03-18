
const express = require('express')
import {handler547} from "./handler547";
const app = express()
app.get('/547', handler547)
app.listen(3000, () => {})
        