
const express = require('express')
import {handler8778} from "./handler8778";
const app = express()
app.get('/8778', handler8778)
app.listen(3000, () => {})
        