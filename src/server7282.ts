
const express = require('express')
import {handler7282} from "./handler7282";
const app = express()
app.get('/7282', handler7282)
app.listen(3000, () => {})
        