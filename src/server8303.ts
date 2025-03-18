
const express = require('express')
import {handler8303} from "./handler8303";
const app = express()
app.get('/8303', handler8303)
app.listen(3000, () => {})
        