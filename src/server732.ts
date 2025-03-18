
const express = require('express')
import {handler732} from "./handler732";
const app = express()
app.get('/732', handler732)
app.listen(3000, () => {})
        