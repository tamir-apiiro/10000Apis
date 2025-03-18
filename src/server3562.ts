
const express = require('express')
import {handler3562} from "./handler3562";
const app = express()
app.get('/3562', handler3562)
app.listen(3000, () => {})
        