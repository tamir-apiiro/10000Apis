
const express = require('express')
import {handler8549} from "./handler8549";
const app = express()
app.get('/8549', handler8549)
app.listen(3000, () => {})
        