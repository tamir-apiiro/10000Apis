
const express = require('express')
import {handler2375} from "./handler2375";
const app = express()
app.get('/2375', handler2375)
app.listen(3000, () => {})
        