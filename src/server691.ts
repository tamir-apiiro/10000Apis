
const express = require('express')
import {handler691} from "./handler691";
const app = express()
app.get('/691', handler691)
app.listen(3000, () => {})
        