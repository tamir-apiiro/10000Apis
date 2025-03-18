
const express = require('express')
import {handler80} from "./handler80";
const app = express()
app.get('/80', handler80)
app.listen(3000, () => {})
        