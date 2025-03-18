
const express = require('express')
import {handler2468} from "./handler2468";
const app = express()
app.get('/2468', handler2468)
app.listen(3000, () => {})
        