
const express = require('express')
import {handler4315} from "./handler4315";
const app = express()
app.get('/4315', handler4315)
app.listen(3000, () => {})
        