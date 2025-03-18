
const express = require('express')
import {handler7131} from "./handler7131";
const app = express()
app.get('/7131', handler7131)
app.listen(3000, () => {})
        