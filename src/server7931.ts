
const express = require('express')
import {handler7931} from "./handler7931";
const app = express()
app.get('/7931', handler7931)
app.listen(3000, () => {})
        