
const express = require('express')
import {handler8180} from "./handler8180";
const app = express()
app.get('/8180', handler8180)
app.listen(3000, () => {})
        