
const express = require('express')
import {handler3955} from "./handler3955";
const app = express()
app.get('/3955', handler3955)
app.listen(3000, () => {})
        