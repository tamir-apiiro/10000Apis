
const express = require('express')
import {handler2058} from "./handler2058";
const app = express()
app.get('/2058', handler2058)
app.listen(3000, () => {})
        