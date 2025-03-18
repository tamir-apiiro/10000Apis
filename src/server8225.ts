
const express = require('express')
import {handler8225} from "./handler8225";
const app = express()
app.get('/8225', handler8225)
app.listen(3000, () => {})
        