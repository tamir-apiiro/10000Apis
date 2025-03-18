
const express = require('express')
import {handler623} from "./handler623";
const app = express()
app.get('/623', handler623)
app.listen(3000, () => {})
        