
const express = require('express')
import {handler3393} from "./handler3393";
const app = express()
app.get('/3393', handler3393)
app.listen(3000, () => {})
        