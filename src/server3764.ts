
const express = require('express')
import {handler3764} from "./handler3764";
const app = express()
app.get('/3764', handler3764)
app.listen(3000, () => {})
        