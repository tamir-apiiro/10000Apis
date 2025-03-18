
const express = require('express')
import {handler7822} from "./handler7822";
const app = express()
app.get('/7822', handler7822)
app.listen(3000, () => {})
        