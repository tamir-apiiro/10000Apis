
const express = require('express')
import {handler266} from "./handler266";
const app = express()
app.get('/266', handler266)
app.listen(3000, () => {})
        