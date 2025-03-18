
const express = require('express')
import {handler8843} from "./handler8843";
const app = express()
app.get('/8843', handler8843)
app.listen(3000, () => {})
        