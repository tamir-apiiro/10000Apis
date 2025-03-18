
const express = require('express')
import {handler50} from "./handler50";
const app = express()
app.get('/50', handler50)
app.listen(3000, () => {})
        