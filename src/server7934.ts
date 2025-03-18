
const express = require('express')
import {handler7934} from "./handler7934";
const app = express()
app.get('/7934', handler7934)
app.listen(3000, () => {})
        