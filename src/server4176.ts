
const express = require('express')
import {handler4176} from "./handler4176";
const app = express()
app.get('/4176', handler4176)
app.listen(3000, () => {})
        