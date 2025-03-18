
const express = require('express')
import {handler2968} from "./handler2968";
const app = express()
app.get('/2968', handler2968)
app.listen(3000, () => {})
        