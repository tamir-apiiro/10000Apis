
const express = require('express')
import {handler3392} from "./handler3392";
const app = express()
app.get('/3392', handler3392)
app.listen(3000, () => {})
        