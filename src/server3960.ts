
const express = require('express')
import {handler3960} from "./handler3960";
const app = express()
app.get('/3960', handler3960)
app.listen(3000, () => {})
        