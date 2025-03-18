
const express = require('express')
import {handler512} from "./handler512";
const app = express()
app.get('/512', handler512)
app.listen(3000, () => {})
        