
const express = require('express')
import {handler2783} from "./handler2783";
const app = express()
app.get('/2783', handler2783)
app.listen(3000, () => {})
        