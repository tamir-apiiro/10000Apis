
const express = require('express')
import {handler7782} from "./handler7782";
const app = express()
app.get('/7782', handler7782)
app.listen(3000, () => {})
        