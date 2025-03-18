
const express = require('express')
import {handler7351} from "./handler7351";
const app = express()
app.get('/7351', handler7351)
app.listen(3000, () => {})
        