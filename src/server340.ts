
const express = require('express')
import {handler340} from "./handler340";
const app = express()
app.get('/340', handler340)
app.listen(3000, () => {})
        