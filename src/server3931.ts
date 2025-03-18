
const express = require('express')
import {handler3931} from "./handler3931";
const app = express()
app.get('/3931', handler3931)
app.listen(3000, () => {})
        