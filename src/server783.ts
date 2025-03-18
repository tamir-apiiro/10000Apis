
const express = require('express')
import {handler783} from "./handler783";
const app = express()
app.get('/783', handler783)
app.listen(3000, () => {})
        