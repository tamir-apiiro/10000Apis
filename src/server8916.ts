
const express = require('express')
import {handler8916} from "./handler8916";
const app = express()
app.get('/8916', handler8916)
app.listen(3000, () => {})
        