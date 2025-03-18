
const express = require('express')
import {handler8426} from "./handler8426";
const app = express()
app.get('/8426', handler8426)
app.listen(3000, () => {})
        