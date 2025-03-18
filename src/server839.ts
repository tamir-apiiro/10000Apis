
const express = require('express')
import {handler839} from "./handler839";
const app = express()
app.get('/839', handler839)
app.listen(3000, () => {})
        