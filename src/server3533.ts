
const express = require('express')
import {handler3533} from "./handler3533";
const app = express()
app.get('/3533', handler3533)
app.listen(3000, () => {})
        