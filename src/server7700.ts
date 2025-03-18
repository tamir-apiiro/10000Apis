
const express = require('express')
import {handler7700} from "./handler7700";
const app = express()
app.get('/7700', handler7700)
app.listen(3000, () => {})
        