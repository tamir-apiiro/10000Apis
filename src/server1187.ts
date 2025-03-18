
const express = require('express')
import {handler1187} from "./handler1187";
const app = express()
app.get('/1187', handler1187)
app.listen(3000, () => {})
        