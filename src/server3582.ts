
const express = require('express')
import {handler3582} from "./handler3582";
const app = express()
app.get('/3582', handler3582)
app.listen(3000, () => {})
        