
const express = require('express')
import {handler7755} from "./handler7755";
const app = express()
app.get('/7755', handler7755)
app.listen(3000, () => {})
        