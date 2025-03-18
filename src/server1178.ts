
const express = require('express')
import {handler1178} from "./handler1178";
const app = express()
app.get('/1178', handler1178)
app.listen(3000, () => {})
        