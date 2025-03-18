
const express = require('express')
import {handler826} from "./handler826";
const app = express()
app.get('/826', handler826)
app.listen(3000, () => {})
        