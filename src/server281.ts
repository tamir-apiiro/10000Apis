
const express = require('express')
import {handler281} from "./handler281";
const app = express()
app.get('/281', handler281)
app.listen(3000, () => {})
        