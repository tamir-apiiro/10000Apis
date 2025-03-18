
const express = require('express')
import {handler8333} from "./handler8333";
const app = express()
app.get('/8333', handler8333)
app.listen(3000, () => {})
        