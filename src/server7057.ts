
const express = require('express')
import {handler7057} from "./handler7057";
const app = express()
app.get('/7057', handler7057)
app.listen(3000, () => {})
        