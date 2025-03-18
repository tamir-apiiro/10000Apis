
const express = require('express')
import {handler7316} from "./handler7316";
const app = express()
app.get('/7316', handler7316)
app.listen(3000, () => {})
        