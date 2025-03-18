
const express = require('express')
import {handler2898} from "./handler2898";
const app = express()
app.get('/2898', handler2898)
app.listen(3000, () => {})
        