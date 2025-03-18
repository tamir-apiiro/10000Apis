
const express = require('express')
import {handler8826} from "./handler8826";
const app = express()
app.get('/8826', handler8826)
app.listen(3000, () => {})
        