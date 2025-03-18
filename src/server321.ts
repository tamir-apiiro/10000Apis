
const express = require('express')
import {handler321} from "./handler321";
const app = express()
app.get('/321', handler321)
app.listen(3000, () => {})
        