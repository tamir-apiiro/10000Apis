
const express = require('express')
import {handler376} from "./handler376";
const app = express()
app.get('/376', handler376)
app.listen(3000, () => {})
        