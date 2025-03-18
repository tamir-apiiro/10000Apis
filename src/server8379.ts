
const express = require('express')
import {handler8379} from "./handler8379";
const app = express()
app.get('/8379', handler8379)
app.listen(3000, () => {})
        