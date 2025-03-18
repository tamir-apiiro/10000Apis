
const express = require('express')
import {handler3459} from "./handler3459";
const app = express()
app.get('/3459', handler3459)
app.listen(3000, () => {})
        