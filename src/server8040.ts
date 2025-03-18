
const express = require('express')
import {handler8040} from "./handler8040";
const app = express()
app.get('/8040', handler8040)
app.listen(3000, () => {})
        