
const express = require('express')
import {handler38} from "./handler38";
const app = express()
app.get('/38', handler38)
app.listen(3000, () => {})
        