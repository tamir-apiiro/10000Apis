
const express = require('express')
import {handler3018} from "./handler3018";
const app = express()
app.get('/3018', handler3018)
app.listen(3000, () => {})
        