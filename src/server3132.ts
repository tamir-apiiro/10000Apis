
const express = require('express')
import {handler3132} from "./handler3132";
const app = express()
app.get('/3132', handler3132)
app.listen(3000, () => {})
        