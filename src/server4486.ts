
const express = require('express')
import {handler4486} from "./handler4486";
const app = express()
app.get('/4486', handler4486)
app.listen(3000, () => {})
        