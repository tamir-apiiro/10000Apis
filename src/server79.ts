
const express = require('express')
import {handler79} from "./handler79";
const app = express()
app.get('/79', handler79)
app.listen(3000, () => {})
        