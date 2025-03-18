
const express = require('express')
import {handler2986} from "./handler2986";
const app = express()
app.get('/2986', handler2986)
app.listen(3000, () => {})
        