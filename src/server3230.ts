
const express = require('express')
import {handler3230} from "./handler3230";
const app = express()
app.get('/3230', handler3230)
app.listen(3000, () => {})
        