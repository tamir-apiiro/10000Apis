
const express = require('express')
import {handler3761} from "./handler3761";
const app = express()
app.get('/3761', handler3761)
app.listen(3000, () => {})
        