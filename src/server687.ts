
const express = require('express')
import {handler687} from "./handler687";
const app = express()
app.get('/687', handler687)
app.listen(3000, () => {})
        