
const express = require('express')
import {handler7665} from "./handler7665";
const app = express()
app.get('/7665', handler7665)
app.listen(3000, () => {})
        