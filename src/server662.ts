
const express = require('express')
import {handler662} from "./handler662";
const app = express()
app.get('/662', handler662)
app.listen(3000, () => {})
        