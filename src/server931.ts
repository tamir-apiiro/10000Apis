
const express = require('express')
import {handler931} from "./handler931";
const app = express()
app.get('/931', handler931)
app.listen(3000, () => {})
        