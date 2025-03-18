
const express = require('express')
import {handler8732} from "./handler8732";
const app = express()
app.get('/8732', handler8732)
app.listen(3000, () => {})
        