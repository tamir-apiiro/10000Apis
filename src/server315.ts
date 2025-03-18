
const express = require('express')
import {handler315} from "./handler315";
const app = express()
app.get('/315', handler315)
app.listen(3000, () => {})
        