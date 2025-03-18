
const express = require('express')
import {handler316} from "./handler316";
const app = express()
app.get('/316', handler316)
app.listen(3000, () => {})
        