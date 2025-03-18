
const express = require('express')
import {handler7866} from "./handler7866";
const app = express()
app.get('/7866', handler7866)
app.listen(3000, () => {})
        