
const express = require('express')
import {handler85} from "./handler85";
const app = express()
app.get('/85', handler85)
app.listen(3000, () => {})
        