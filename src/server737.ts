
const express = require('express')
import {handler737} from "./handler737";
const app = express()
app.get('/737', handler737)
app.listen(3000, () => {})
        