
const express = require('express')
import {handler31} from "./handler31";
const app = express()
app.get('/31', handler31)
app.listen(3000, () => {})
        