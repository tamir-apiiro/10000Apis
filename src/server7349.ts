
const express = require('express')
import {handler7349} from "./handler7349";
const app = express()
app.get('/7349', handler7349)
app.listen(3000, () => {})
        