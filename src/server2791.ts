
const express = require('express')
import {handler2791} from "./handler2791";
const app = express()
app.get('/2791', handler2791)
app.listen(3000, () => {})
        