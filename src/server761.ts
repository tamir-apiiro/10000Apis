
const express = require('express')
import {handler761} from "./handler761";
const app = express()
app.get('/761', handler761)
app.listen(3000, () => {})
        