
const express = require('express')
import {handler4405} from "./handler4405";
const app = express()
app.get('/4405', handler4405)
app.listen(3000, () => {})
        