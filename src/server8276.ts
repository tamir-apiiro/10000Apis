
const express = require('express')
import {handler8276} from "./handler8276";
const app = express()
app.get('/8276', handler8276)
app.listen(3000, () => {})
        