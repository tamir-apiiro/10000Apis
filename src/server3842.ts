
const express = require('express')
import {handler3842} from "./handler3842";
const app = express()
app.get('/3842', handler3842)
app.listen(3000, () => {})
        