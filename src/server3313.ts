
const express = require('express')
import {handler3313} from "./handler3313";
const app = express()
app.get('/3313', handler3313)
app.listen(3000, () => {})
        