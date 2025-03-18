
const express = require('express')
import {handler7968} from "./handler7968";
const app = express()
app.get('/7968', handler7968)
app.listen(3000, () => {})
        