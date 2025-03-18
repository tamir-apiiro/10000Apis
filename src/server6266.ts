
const express = require('express')
import {handler6266} from "./handler6266";
const app = express()
app.get('/6266', handler6266)
app.listen(3000, () => {})
        