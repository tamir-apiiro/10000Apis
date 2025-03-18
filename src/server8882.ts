
const express = require('express')
import {handler8882} from "./handler8882";
const app = express()
app.get('/8882', handler8882)
app.listen(3000, () => {})
        