
const express = require('express')
import {handler3012} from "./handler3012";
const app = express()
app.get('/3012', handler3012)
app.listen(3000, () => {})
        