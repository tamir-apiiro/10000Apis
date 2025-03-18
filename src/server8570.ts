
const express = require('express')
import {handler8570} from "./handler8570";
const app = express()
app.get('/8570', handler8570)
app.listen(3000, () => {})
        