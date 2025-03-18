
const express = require('express')
import {handler2931} from "./handler2931";
const app = express()
app.get('/2931', handler2931)
app.listen(3000, () => {})
        